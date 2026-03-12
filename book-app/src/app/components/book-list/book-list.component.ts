
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  deleteBook(id?: number) {
    if (!id) return;

    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }

  onFormSubmit() {
    this.selectedBook = null;
    this.loadBooks();
  }
}
