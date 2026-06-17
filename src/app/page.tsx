"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


const X = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="flex flex-col gap-2 p-4">
      {tasks?.map((task) => (
        <div key={task._id} className="border rounded p-2 flex flex-col">
          <p>{task.text}</p>
          <p>Is Completed: {`${task.isCompleted}`}</p>
        </div>
      ))}
    </div>
  )
};

export default X;