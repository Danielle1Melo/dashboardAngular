import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule} from "@angular/material/list"
import { MatIconModule} from "@angular/material/icon"
import {  RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  } 

  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play-circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route:'posts',
        }
      ]
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    },
  ]);

  profileImage = computed(() => this.sidenavCollapsed() ? '32': '100');


}
