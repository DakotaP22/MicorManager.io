import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent {
  title = "MicroManager.io";



}
