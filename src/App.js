import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./Data";

const mappedCards = Data.map((obj) => {
  return (
    <Card
      img={obj.img}
      title={obj.title}
      timeline={obj.timeline}
      description={obj.description}
      location={obj.location}
    />
  );
});

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="cards-container">{mappedCards}</div>
      </main>
    </div>
  );
}

export default App;
