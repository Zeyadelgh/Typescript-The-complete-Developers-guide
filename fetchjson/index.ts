import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const { id, completed, title } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}`);
};
