import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import { TaskForm } from "../pure/forms/taskFormik";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

//componenten principal
const TaskList = () => {
  const Task1 = new Task("Autenticarse", "Debe autericarse con sus credenciales", false);

  const [tasks, setTasks] = useState([Task1]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("The Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("TaskList has been unmonted");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("Complete this Task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }
  function deleteTask(task) {
    console.log("Delete this task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("Add this task", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const loadingStyle = {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
  };

  const Table = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Complete</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3> There are not tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    );
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h2>List your tasks</h2>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            {loading ? <p style={loadingStyle}> loading...</p> : tasksTable}
            {/* {tasksTable} */}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskList;
