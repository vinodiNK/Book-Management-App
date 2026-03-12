export interface Book {
  id?: number; // optional because new book will not have an ID yet
  title: string;
  author: string;
  isbn: string;
  publicationDate: string; // store as string for input type="date"
}
