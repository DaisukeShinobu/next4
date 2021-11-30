import React, { useState, useEffect, useContext } from "react";
import { AuthProvider } from "../auth/AuthProvider";
import Header from "../components/header/Header";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import InputTask from "../components/Task/inputTask";
import TaskItem from "../components/Task/TaskItem";

const Home: React.FC = (props: any) => {
  const router = useRouter();
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);

  useEffect(() => {
    const loginJudge = auth.onAuthStateChanged((user) => {
      !user && router.push("/");
    });
    return () => loginJudge();
  });

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <AuthProvider>
      <div>
        <Header />
        <InputTask />
        <h1>homeだよ</h1>
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
    </AuthProvider>
  );
};

export default Home;
