import { getDate } from "../getDate";
import { getArrayItem } from "../getArrayItem";

export const getRandomTask = (tasks, exampleTasks) => {
  const filteredExampleTasks = exampleTasks.filter(
    (exampleTask) => !tasks.some(({ id }) => id === exampleTask.id)
  );

  return filteredExampleTasks.length !== 0
    ? { ...getArrayItem(filteredExampleTasks), date: getDate() }
    : null;
};
