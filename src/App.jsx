import "./App.css";
import Todo from "./Components/Todo.jsx";

function App() {
  return (
    <div className="bg-gray-300">
      <div className="font-bold flex-col items-center p-8 text-5xl md:text-6xl ">
        <h1 className="mb-8 md:mb-10">My Todos</h1>

        <Todo title="TailwindCSS" text="Week 1" eniola="Delete" />
        <Todo title="Master Js Basics" text="Week 2" eniola="Undo" />
        <Todo title="React Basics" text="Week 3" eniola="Delete" />
        <Todo title="React Hooks" text="Week 4" eniola="Undo" />
      </div>
    </div>
  );
}

export default App;
