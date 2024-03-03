import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAddTask, onDeleteTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-4 py-2 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>New Task</Button>
    </div>
  );
}
