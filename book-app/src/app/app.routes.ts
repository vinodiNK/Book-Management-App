import { Routes } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },   // Home page
  { path: 'add-book', component: BookFormComponent }  // Add book page
];
