using BookAPI.Models;

namespace BookAPI.Data
{
    public static class BookStore
    {
        public static List<Book> Books = new List<Book>()
        {
            new Book
            {
                Id = 1,
                Title = "Clean Code",
                Author = "Robert C. Martin",
                Isbn = "9780132350884",
                PublicationDate = new DateTime(2008,8,1)
            },
            new Book
            {
                Id = 2,
                Title = "The Pragmatic Programmer",
                Author = "Andrew Hunt",
                Isbn = "9780201616224",
                PublicationDate = new DateTime(1999,10,20)
            }
        };
    }
}