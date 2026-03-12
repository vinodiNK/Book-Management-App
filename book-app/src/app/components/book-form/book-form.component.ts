import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnChanges {

  @Input() book: Book | null = null;
  @Output() formSubmit = new EventEmitter<void>();

  bookData: Book = { title: '', author: '', isbn: '', publicationDate: '' };

  constructor(private bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      this.bookData = {...this.book};
    }
  }

  saveBook() {
    if (this.bookData.id) {
      // update
      this.bookService.updateBook(this.bookData.id, this.bookData).subscribe(() => {
        alert("Book updated successfully!");
        this.resetForm();
      });
    } else {
      // add
      this.bookService.addBook(this.bookData).subscribe(() => {
        alert("Book added successfully!");
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.bookData = { title: '', author: '', isbn: '', publicationDate: '' };
    this.formSubmit.emit();
  }
}
