import { getDate } from "../getDate";
import { getRandomIndex } from "../getRandomTask";

export const pushRandomTask = (state, tasksArray) => {
  const index = getRandomIndex(tasksArray.length);

  if (state.tasks.find(({ id }) => id === tasksArray[index].id)) {
    try {
      pushRandomTask(state, tasksArray);
    } catch (error) {
      state.outOfExamples = true;
    }
  } else {
    state.tasks.push({ ...tasksArray[index], date: getDate() });
  }
};
