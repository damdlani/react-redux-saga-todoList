export const getRandomTask = (exampleTasks) => {
  return exampleTasks[Math.floor(Math.random() * Math.floor(exampleTasks.length))];
};
