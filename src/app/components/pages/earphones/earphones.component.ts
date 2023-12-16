import { Component } from '@angular/core';
import { AboutComponent } from '../../shared/about/about.component';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-earphones',
  standalone: true,
  imports: [AboutComponent, CategoriesComponent],
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.css'
})
export class EarphonesComponent {

}
