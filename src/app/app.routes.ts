import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HeadphonesComponent } from './components/pages/headphones/headphones.component';
import { SpeakersComponent } from './components/pages/speakers/speakers.component';
import { EarphonesComponent } from './components/pages/earphones/earphones.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { Headphones1Component } from './components/pages/product-details/headphones-1/headphones-1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'headphones', component: HeadphonesComponent},
  { path: 'speakers', component: SpeakersComponent},
  { path: 'earphones', component: EarphonesComponent},
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    children: [
      { path: 'headphones-1', component: Headphones1Component},
      { path: '**', redirectTo: 'headphones-1'}
    ]
  }
];
