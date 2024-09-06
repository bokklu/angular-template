import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.scss',
})
export class Feature1Component {
  isCollapsed = false;
}
