
export const getExampleTasks = async () => {
    const response = await fetch('/react-todoList/exampleTasks.json');

    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json();
};