import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/about/about.component';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [AboutComponent, CategoriesComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {

}
