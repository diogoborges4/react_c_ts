import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";
import TaksForm from "./components/TaksForm";
import TaskList from "./components/TaskList";
import { ITask } from "./interfaces/Task";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updateItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaksForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div>
          <TaksForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
