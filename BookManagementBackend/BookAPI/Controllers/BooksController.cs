using Microsoft.AspNetCore.Mvc;
using BookAPI.Models;
using BookAPI.Data;

namespace BookAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {

        // GET all books
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return Ok(BookStore.Books);
        }

        // GET book by id
        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = BookStore.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
                return NotFound("Book not found");

            return Ok(book);
        }

        // POST create book
        [HttpPost]
        public ActionResult<Book> AddBook(Book book)
        {
            book.Id = BookStore.Books.Count + 1;

            BookStore.Books.Add(book);

            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }

        // PUT update book
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book updatedBook)
        {
            var book = BookStore.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
                return NotFound("Book not found");

            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.Isbn = updatedBook.Isbn;
            book.PublicationDate = updatedBook.PublicationDate;

            return NoContent();
        }

        // DELETE book
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = BookStore.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
                return NotFound("Book not found");

            BookStore.Books.Remove(book);

            return NoContent();
        }
    }
}