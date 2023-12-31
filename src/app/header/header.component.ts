import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { PostService } from '../post-service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';
import { MatDialog } from '@angular/material/dialog';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { Post } from '../post.model';
import { NotificationService } from '../notification.service'; // Import NotificationService


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<string>();
  private _searchTerm: string = '';
  userEmail: string = '';
  posts: Post[] = [];
  notifications: { type: string, userId: string, timestamp: Date }[] = [];

  constructor(private postService: PostService, private backEndService: BackEndService, private authService: AuthService, private router: Router, private dialog: MatDialog, private notificationService: NotificationService){
    this.authService.getAuthState().subscribe(user => {
      this.userEmail = user?.email || ''; // Add this line
    });
  }

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(async user => {
      this.userEmail = user?.email || '';
      if (user) {
        this.notifications = await this.notificationService.getNotifications(user.uid);
      }
    });
  }

  openPostForm() {
    this.dialog.open(PostEditComponent);
  }

  onSave(){
    this.backEndService.saveData();
  }

  showNavbar(): boolean {
    const route = this.router.url;
    return route !== '/login' && route !== '/register';
  }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }

  onLogout() {
    this.authService.logout();
  }

  onFetch() {
    this.backEndService.fetchData();
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.searchTermChange.emit(this._searchTerm);
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  async onSearch(): Promise<void> {
    this.postService.setSearchTerm(this.searchTerm);
    const userId = await this.authService.getUserId();
    this.posts = this.postService.searchPosts(this.searchTerm, userId);
  }

  async onSearchClick(): Promise<void> {
    this.postService.setSearchTerm(this.searchTerm);
    const userId = await this.authService.getUserId();
    this.posts = this.postService.searchPosts(this.searchTerm, userId);
  }
}
