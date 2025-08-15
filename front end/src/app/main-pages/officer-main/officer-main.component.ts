import { Component } from '@angular/core';
import { OfficerSidebarComponent } from '../../officer/common/officer-sidebar/officer-sidebar.component';


@Component({
  selector: 'app-officer-main',
  imports: [OfficerSidebarComponent],
  templateUrl: './officer-main.component.html',
  styleUrl: './officer-main.component.css'
})
export class OfficerMainComponent {
}
