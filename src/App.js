import "./App.css";
import listSlice from "./components/listSlice";
import List from "./components/list";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <List />
    </div>
  );
}

export default App;
