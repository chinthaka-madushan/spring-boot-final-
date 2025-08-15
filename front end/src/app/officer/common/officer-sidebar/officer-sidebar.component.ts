// officer-sidebar.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-officer-sidebar',
  templateUrl: './officer-sidebar.component.html',
  styleUrls: ['./officer-sidebar.component.css'],
  imports: [CommonModule,RouterOutlet,RouterLinkActive]
})
export class OfficerSidebarComponent {
 
}