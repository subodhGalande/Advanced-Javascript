class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `Title: ${this.title}  file-size: ${this.fileSize}MB`;
  }
}
const EBook = new Ebook("Mybook", "goku", 2012, 12);
console.log(EBook.download());
