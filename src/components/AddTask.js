import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./listSlice";
import { useState } from "react";

function AddTask() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const taskList = useSelector((state) => state.taskList.value);

  function addnewTask(event) {
    dispatch(
      addTask({
        id: taskList.length + 1,
        description: description,
        isDone: false,
      })
    );
    event.target.value = " ";
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.key == "Enter") addnewTask(event);
  }

  const handleOnChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <div className="newTask">
        <input
          id="description"
          type="text"
          placeholder="inset your note"
          name="description"
          onChange={handleOnChange}
          onKeyUp={handleClick}
        />
      </div>
    </div>
  );
}

export default AddTask;
