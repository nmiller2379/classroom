// === OBJECT BASICS REVIEW ===

// 1. Create a simple object using key-value pairs.
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  published: 1937,
};

// Accessing properties using dot notation:
console.log(book.title); // Output: The Hobbit

// Accessing properties using bracket notation:
console.log(book["author"]); // Output: J.R.R. Tolkien

// Adding a new property:
book.rating = 4.8;
console.log(book.rating); // Output: 4.8

// Deleting a property:
delete book.genre;
console.log(book.genre); // Output: undefined

// === OBJECTS AS DICTIONARIES ===

// Using an object as a lookup table to convert codes to names:
const languageCodes = {
  en: "English",
  es: "Spanish",
  fr: "French",
  zh: "Chinese",
};

const userLang = "es";
console.log(languageCodes[userLang]); // Output: Spanish

// === NESTED OBJECT STRUCTURE (SIMPLIFIED RECORD COLLECTION) ===

const library = {
  sectionA: {
    shelf1: {
      book1: {
        title: "1984",
        author: "George Orwell",
      },
      book2: {
        title: "Brave New World",
        author: "Aldous Huxley",
      },
    },
    shelf2: {
      book3: {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
      },
    },
  },
  sectionB: {
    shelf1: {
      book4: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
      },
    },
  },
};

// Accessing a nested property with dot + bracket notation:
console.log(library.sectionA.shelf1.book2.title); // Output: Brave New World

// === WRONG APPROACH EXAMPLE ===

// Suppose we try to access a nested property without checking that it exists:
console.log(library.sectionC.shelf1.book5.title); // ❌ This will throw an error!
// TypeError: Cannot read properties of undefined (reading 'shelf1')

// === SAFELY ACCESSING NESTED PROPERTIES USING hasOwnProperty() ===

if (library.hasOwnProperty("sectionC")) {
  const section = library["sectionC"];

  if (section.hasOwnProperty("shelf1")) {
    const shelf = section["shelf1"];

    if (shelf.hasOwnProperty("book5")) {
      const book = shelf["book5"];
      console.log("Title:", book["title"]);
    } else {
      console.log("Book not found: book5 doesn't exist.");
    }
  } else {
    console.log("Book not found: shelf1 doesn't exist.");
  }
} else {
  console.log("Book not found: sectionC doesn't exist.");
}

// === SAFE NESTED ACCESS USING OPTIONAL CHAINING ===

// Optional chaining (?.) lets us safely try to access a nested property.
// If any part of the chain doesn't exist (like sectionC, shelf1, or book5),
// JavaScript will stop and return undefined instead of crashing with an error.

// Think of it like saying: “If this exists, keep going. If not, just return undefined.”

// In this example, if sectionC or shelf1 or book5 doesn't exist,
// the whole expression returns undefined, and the || fallback kicks in.

console.log(library.sectionC?.shelf1?.book5?.title || "Book not found.");

// === BONUS: DYNAMIC PROPERTY ACCESS ===

const sectionName = "sectionA";
const shelfName = "shelf2";
const bookId = "book3";

// Using variables to access nested values:
const selectedBook = library[sectionName]?.[shelfName]?.[bookId];
if (selectedBook) {
  console.log("You selected:", selectedBook.title); // Output: You selected: Fahrenheit 451
} else {
  console.log("That book doesn't exist.");
}
