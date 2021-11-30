import head from "next/head";
import React from "react";
import firebase from "firebase";
import { db } from "../firebase";
import { GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";

export const getStaticPaths = async () => {
  const tasksSnapshot = await db.collection('tasks').get().then((snapshot) => {
    const paths = snapshot.docs.map(doc => {
      return {
        params: { id: doc.id.toString() },
      };
    });
    console.log(paths)
  return { paths,fallback: false };
})};
  
  export const getStaticProps= async () => {
    const tasks = [];
    const ref = await db.collection('tasks').get();
    ref.docs.map((doc) => {
      const data = { id: doc.id, title: doc.data().title };
      tasks.push(data);
    });
    return {
      props: {
        tasks,
      }
    }
  }

  const Details = ({ tasks }) => {
    return (
      <>
        <h1>Firebaseのページ</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
        <Link href={`/`}>
          <a>戻る</a>
        </Link>
      </>
    );
  }
