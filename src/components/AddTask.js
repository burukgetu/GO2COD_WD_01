import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title && description) {
      dispatch(addTask({ id: uuidv4(), title, description, isDone: false }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
