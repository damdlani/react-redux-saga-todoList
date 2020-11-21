export const getExampleTasks = async () => {
  const response = await fetch("/react-redux-saga-todoList/exampleTasks.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
