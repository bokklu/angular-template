import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbCollapseModule,
  NgbOffcanvas,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    NgbOffcanvasModule,
    NgbCollapseModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild('offcanvasSidebar', { static: true })
  isCollapsed = false;
  offcanvasContent!: TemplateRef<any>;

  constructor(private offcanvasService: NgbOffcanvas) {}

  openOffcanvas() {
    this.offcanvasService.open(this.offcanvasContent, { position: 'start' });
  }
}
