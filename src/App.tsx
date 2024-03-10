import { FormEvent, useEffect, useState } from "react";
import MainCard from "./MainCard/MainCard";
import { ToDoTypes } from "./toDoTypes";
import "./App.scss";
import AdditionalCards from "./AdditionalCards/AdditionalCrads";
import { MyLocationType } from "./geolocation";
import ToDoNav from "./ToDo/ToDoNav";
import ToDoList from "./ToDo/ToDoList";

const App = () => {
  const [location, setLocation] = useState<MyLocationType>();
  const defaultLocation = { latitude: 51.5072, longitude: 0.1276 };
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<ToDoTypes[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };
  const addTask = (): void => {
    const newTask = { taskName: input };
    setTodo([...todo, newTask]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //makes sure the page does not refresh every time you add new task
    if (input == "") {
      alert("Please enter a todo");
    } else addTask();
    setInput("");
  };

  const toDelete = (taskNametoDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNametoDelete;
      })
    );
  };

  const reset = () => {
    setInput("");
    setTodo([]);
  };


  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })
    
    }  else {setLocation(defaultLocation)
        console.log("location unaccessible, default value used")}

  }, []);



  return (
    <div className="app">
      {location && <MainCard locations={location}  />}
     
     <div className="app-cont">
      {location && <AdditionalCards locations={location} />}
      <div className="to-do">
      <ToDoNav
        reset={reset}
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
      />
      {todo.map((task: ToDoTypes, key: number) => {
        return <ToDoList toDelete={toDelete} key={key} task={task} />;
      })}
    </div>
    </div>
    </div>
  );
};

export default App;
