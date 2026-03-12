import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent implements OnChanges {

  @Input() book: Book | null = null;
  @Output() formSubmit = new EventEmitter<void>();

  bookData: Book = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      this.bookData = { ...this.book };
    }
  }

  saveBook() {
    if (this.bookData.id) {
      this.bookService.updateBook(this.bookData.id, this.bookData)
        .subscribe(() => {
          alert("Book updated!");
          this.resetForm();
        });
    } else {
      this.bookService.addBook(this.bookData)
        .subscribe(() => {
          alert("Book added!");
          this.resetForm();
        });
    }
  }

  resetForm() {
    this.bookData = { title: '', author: '', isbn: '', publicationDate: '' };
    this.formSubmit.emit();
  }
}
