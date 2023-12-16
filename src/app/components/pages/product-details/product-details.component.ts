import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from '../../shared/categories/categories.component';
import { AboutComponent } from '../../shared/about/about.component';
import { YouMayAlsoLikeComponent } from '../../shared/you-may-also-like/you-may-also-like.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, AboutComponent, YouMayAlsoLikeComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
