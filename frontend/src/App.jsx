import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/UI/Navbar";
import BookSection from "./components/UI/BookSection";
import DetailedBook from "./components/UI/DetailedBook";

const bookData = [
  {
    id: 1,
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    coverImg:
      "https://m.media-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    coverImg:
      "https://m.media-amazon.com/images/I/51+GySc8ExL._SX333_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Cosmos",
    author: "Carl Sagan",
    coverImg:
      "https://m.media-amazon.com/images/I/51IcVjsJlDL._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    coverImg:
      "https://m.media-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    title: "A Heartbreaking Work of Staggering Genius",
    author: "Dave Eggers",
    coverImg:
      "https://m.media-amazon.com/images/I/51em6Mq-+gL._SX320_BO1,204,203,200_.jpg",
  },
  {
    id: 6,
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    coverImg:
      "https://m.media-amazon.com/images/I/41NvfPTY4hL._SX400_BO1,204,203,200_.jpg",
  },
  {
    id: 7,
    title: "A Long Way Gone: Memoirs of a Boy Soldier",
    author: "Ishmael Beah",
    coverImg:
      "https://m.media-amazon.com/images/I/41F3OLVtknL._SX330_BO1,204,203,200_.jpg",
  },
  {
    id: 8,
    title: "In Cold Blood",
    author: "Truman Capote",
    coverImg:
      "https://m.media-amazon.com/images/I/41GpHh-5KFL._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 9,
    title: "Guns, Germs, and Steel: The Fates of Human Societies",
    author: "Jared Diamond Ph.D.",
    coverImg:
      "https://m.media-amazon.com/images/I/51lVEXYsw0L._SX327_BO1,204,203,200_.jpg",
  },
  {
    id: 10,
    title:
      "The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America",
    author: "Erik Larson",
    coverImg:
      "https://m.media-amazon.com/images/I/41i6RKW1IXL._SX314_BO1,204,203,200_.jpg",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <BookSection bookData={bookData} />
      <DetailedBook />
    </>
  );
}

export default App;
