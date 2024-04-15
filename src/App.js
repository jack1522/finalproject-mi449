import logo from "./logo.svg";
import "./App.css";

const favBooks = [
  {
    id: 1,
    title: "The Songs of W.E.B. Dubois ",
    author: "Honorée Fanonne Jeffers",
    isbn: "9780008516482",
    isFiveStar: true,
  },
  {
    id: 2,
    title: "Their Eyes Were Watching God Novel",
    author: "Zora Neale Hurston",
    isbn: "9780060838676",
    isFiveStar: false,
  },
  {
    id: 3,
    title: "The Outsiders",
    author: "S.E Hilton",
    isbn: "9780060838676",
    isFiveStar: false,
  },
  {
    id: 4,
    title: "Bud, Not Buddy",
    author: "Christopher Paul Curtis",
    isbn: "9780060838676",
    isFiveStar: true,
  },
  {
    id: 5,
    title: "Get a Life, Chloe Brown",
    author: "Talia Hibbert",
    isbn: "9780062941206",
    isFiveStar: false,
  },
];

function ChooseBook() {
  function setNum() {
    const bookNum = Math.floor(Math.random() * 5) + 1;

    alert(
      `Book Genie suggests that you start with book #${bookNum} from the list of books below.`
    );
  }
  return (
    <button onClick={setNum}>Unsure of what to read? Ask the Book Genie</button>
  );
}
function DisplayBooks() {
  const booklist = favBooks.map((book) => (
    <li key={book.id} style={{ color: book.isFiveStar ? "blue" : "orange" }}>
      {book.title} by {book.author}
    </li>
  ));
  return <ol>{booklist}</ol>;
}

function InfoLegend() {
  return (
    <div>
      <h1> Fav Book List Legend: </h1>
      <p> Blue = 5 Stars </p>
      <p>Orange = 4 Stars</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kimberly's React App w/ Components !!!!
        </a>
        <InfoLegend />
        <ChooseBook />
        <DisplayBooks />
      </header>
    </div>
  );
}

export default App;
