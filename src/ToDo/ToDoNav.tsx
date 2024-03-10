
import { FormEventHandler } from "react";
import plus from "../assets/plus.png";
import "./ToDoNav.scss"

type ToDoNavProps = {
  input: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  reset: () => void;
};

const ToDoNav = ({ input, handleInput, handleSubmit, reset }: ToDoNavProps) => {
  
  return (
    <>
      <div className="nav">
        <h1 className="nav__heading">To Do List </h1>
        <button className="nav__button" onClick={reset}>
          Reset
        </button>
      </div>
      <section className="new-todo">
        <form onSubmit={handleSubmit} className="new-todo__form">
          <input
            type="text"
            value={input}
            onInput={handleInput}
            placeholder="Add your task here..."
          />
          <button className="new-todo__button">
            <img className="plus" src={plus} />
          </button>
        </form>
    
      </section>
    </>
  );
};
export default ToDoNav;