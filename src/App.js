import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  //aca se cambia el estado de true a false y viceversa
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((t) => !t.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      //si tiene algo, lo convierto
      setTaskItems(JSON.parse(data));
    }
  }, []); //este es para que cuando se acturalice la pagina no se pierda los datos

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems)); //Aca lo guardamos en el localStorage como json a lo que se ingresa en el input
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
     <Container>
      <TaskCreator createNewTask={createNewTask} />
          <TaskTable tasks={taskItems} toggleTask={toggleTask} />
          <VisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
          />

          {showCompleted === true && (
            <TaskTable
              tasks={taskItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )}
     </Container>
     
    </main>
  );
}

export default App;
