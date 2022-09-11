import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
//importamos la hoja de estilos de task-email
import "../../style/task.scss";

//El componente que ejecuta o pinta lo que se le envie dese "tasklist" a través de esos props
const TaskComponent = ({ task, complete, remove }) => {
  //Para controlar cuando hacemos algo a una tarea
  useEffect(() => {
    console.log("Task created");
    return () => {
      console.log(
        `Task: ${(task.name, task.description)}) is going to unmount`
      );
    };
  }, [task]);
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        //cuando hagamos click en el icono, ejecutamos la funcion anonima que viene del padre y le pasamos la tarea
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: "gray" }}
        ></i>
      );
    }
  }
  //Creamos dos objeto con un estilo personalizado para pasarlo en el retunr
  const taskVerified = {
    color: "green",
    fontWeith: "bolt",
  };

  const taskPending = {
    color: "tomato",
    fontWeith: "bold",
  };

  return (
    <tr
      className={"fw-normal"}
      style={task.completed ? taskVerified : taskPending}
    >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <th>
        <span className="ms-2">{task.description}</span>
      </th>
      <td>
        {/* Function that return icon depending on completation */}
        {taskCompletedIcon()}
      </td>
      <td>
        <i
          className="bi-trash task-action"
          style={{ color: "tomato" }}
          onClick={() => remove(task)}
        ></i>
      </td>
    </tr>
  );
};

export default TaskComponent;
