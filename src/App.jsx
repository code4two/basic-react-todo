import "./App.css";
import Todo from "./Components/Todo.jsx";

function App() {
  return (
    <div className="bg-gray-300">
      <div className="font-bold flex-col items-center p-8 text-5xl md:text-6xl ">
        <h1 className="mb-6 md:mb-8">My Todos</h1>
        <h3 className="text-3xl text-center mb-6 py-2 md:text-5xl border-l-6 rounded-lg border-pink-800">
          My React Roadmap🤗
        </h3>

        <Todo title="Learn TailwindCSS" text="Task 1" eniola="Delete" />
        <Todo title="Master Js Basics" text="Task 2" eniola="Undo" />
        <Todo title="Learn React Basics" text="Task 3" eniola="Delete" />
        <Todo title="Learn React Hooks" text="Task 4" eniola="Undo" />
        <Todo title="Learn Routing" text="Task 5" eniola="Delete" />
        <Todo title="API Integration" text="Task 6" eniola="Undo" />
        <Todo title="State Management" text="Task 7" eniola="Delete" />
        <Todo title="Typescript" text="Task 8" eniola="Delete" />
        <Todo title="Testing" text="Task 9" eniola="Delete" />
        <Todo title="Performance Optimization" text="Task 10" eniola="Delete" />
        <Todo title="Deployment" text="Task 11" eniola="Delete" />
      </div>
    </div>
  );
}

export default App;
