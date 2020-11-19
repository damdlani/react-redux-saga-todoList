import { getDate } from "../getDate";
import { getRandomIndex } from "../getRandomTask";

export const pushRandomTask = (tasks, exampleTasks) => {
  tasks.forEach((task) => {
    const index = exampleTasks.findIndex(({ id }) => id === task.id);
    console.log(index);
    if (index >= 0) {
      exampleTasks.splice(index, 1);
    }
    return;
  });

  if (exampleTasks.length !== 0) {
    const index = getRandomIndex(exampleTasks.length);
    return { ...exampleTasks[index], date: getDate() };
  }
  return null;
};
