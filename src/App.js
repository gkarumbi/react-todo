import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App() {
  const todosComponents = todosData.map( todo => <TodoItem key= {todo.id} text = {todo.text} completed={todo.completed} />

  )
  return (
    <div className="App">
      {todosComponents}
    </div>
  );
}

export default App;
