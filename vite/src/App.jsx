import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Card
          title="Web Development"
          description="I love building modern websites using React, Node.js, and APIs."
          image="https://picsum.photos/300/200?random=1"
        />
        <Card
          title="Photography"
          description="Capturing moments through my lens is one of my passions."
          image="https://picsum.photos/300/200?random=2"
        />
        <Card
          title="Gaming"
          description="In my free time, I enjoy exploring open-world games."
          image="https://picsum.photos/300/200?random=3"
        />
        <Card
          title="Travel"
          description="I love exploring new places and cultures around the world."
          image="https://picsum.photos/300/200?random=4"
        />
      </div>
    </div>
  );
}

export default App;
