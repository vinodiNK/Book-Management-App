namespace BookAPI.Models
{
    public class Book
    {
        public int Id { get; set; }             // Unique ID
        public string? Title { get; set; }       // Book title
        public string? Author { get; set; }      // Book author
        public string? Isbn { get; set; }        // Book ISBN
        public DateTime? PublicationDate { get; set; }  // Publication date
    }
}