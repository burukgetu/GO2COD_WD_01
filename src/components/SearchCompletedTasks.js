// src/components/SearchCompletedTasks.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const SearchCompletedTasks = () => {
  const [searchDate, setSearchDate] = useState('');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => 
    task.isDone && task.completedAt && 
    new Date(task.completedAt).toLocaleDateString() === new Date(searchDate).toLocaleDateString()
  );

  return (
    <div>
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        placeholder="Search by date"
      />
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default SearchCompletedTasks;
