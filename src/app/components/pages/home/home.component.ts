import { Component } from '@angular/core';
import { CategoriesComponent } from '../../shared/categories/categories.component';
import { AboutComponent } from '../../shared/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
