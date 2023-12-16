import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/about/about.component';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [AboutComponent, CategoriesComponent],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css'
})
export class HeadphonesComponent {

}
