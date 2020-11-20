import { getDate } from "../getDate";
import { getRandomTask } from "../getRandomTask";

export const returnRandomTask = (tasks, exampleTasks) => {
  const filteredExampleTasks = exampleTasks.filter(
    (exampleTask) => !tasks.some(({ id }) => id === exampleTask.id)
  );

  return filteredExampleTasks.length !== 0
    ? { ...getRandomTask(filteredExampleTasks), date: getDate() }
    : null;
};
