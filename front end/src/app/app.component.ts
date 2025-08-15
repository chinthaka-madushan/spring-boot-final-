import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { OfficerMainComponent } from './main-pages/officer-main/officer-main.component';
import { OfficerSidebarComponent } from "./officer/common/officer-sidebar/officer-sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'e_Division';

  ngOnInit(): void {
    initFlowbite();
  }
}