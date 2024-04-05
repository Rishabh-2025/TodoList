import { bindActionCreators } from 'redux';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useDispatch } from 'react-redux';
// import { addTodo, deleteTodo,todoFinished,editTodo } from './todoAction/todoActions';
import todoReducer,{ addTodo,editTodo,todoFinished,deleteTodo } from './slices/todoSlice';
function App() {

  const dispatch = useDispatch()
  const actions = bindActionCreators({addTodo, deleteTodo,todoFinished,editTodo},dispatch);
  return (
   
<>
    <h1 >Daily Planner</h1>
  <AddTodo addTodo={actions.addTodo}/>
  <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
</>

     
  )
}

export default App
