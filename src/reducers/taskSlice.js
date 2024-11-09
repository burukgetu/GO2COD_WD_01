import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    rewardCount: 0,
    keywordSuggestions: {},
    darkMode: false,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            const titleWords = action.payload.title.split(' ');
            
            titleWords.forEach((word) => {
              word = word.toLowerCase();
              if (state.keywordSuggestions[word]) {
                state.keywordSuggestions[word] += 1;
              } else {
                state.keywordSuggestions[word] = 1;
              }
            });
          },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const index = state.tasks.findIndex(task => task.id === id);
            if (index !== -1) state.tasks[index] = { ...state.tasks[index], ...updatedTask };
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskDone: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
              task.isDone = !task.isDone;
              if (task.isDone) {
                task.completedAt = new Date().toISOString();
                state.rewardCount += 1;
                if (state.rewardCount % 5 === 0) {
                  alert("Congratulations! You've unlocked a new reward!");
                }
              } else {
                task.completedAt = null;
                state.rewardCount -= 1;
              }
            }
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskDone, toggleDarkMode } = taskSlice.actions;
export default taskSlice.reducer;