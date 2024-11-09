// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskDone, editTask } from '../reducers/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, updatedTask: { title: newTitle, description: newDescription } }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.isDone && <p>Completed at: {new Date(task.completedAt).toLocaleString()}</p>}
        </>
      )}
      <button onClick={() => dispatch(toggleTaskDone(task.id))}>
        {task.isDone ? 'Undo' : 'Mark as Done'}
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Task;
