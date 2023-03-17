import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome, Gryffindors</h1>

      <h4>Yout Tasks</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">Sleep</div>
          <div className="delete-todo">X</div>
        </div>
        <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">Work</div>
          <div className="delete-todo">X</div>
        </div>
      </div>
    </div>
  );
}

export default App;
