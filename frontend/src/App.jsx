import { Routes, Route } from "react-router";
import Homepage from './pages/home/Homepage';
import TodoList from './pages/todoList/TodoList';
import { Outlet, Navigate } from 'react-router';



const ProtectedRoute = () => {
  const isAuthenticated = false; 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {

  return (
      <Routes>

        <Route index element={<Homepage />} />
        <Route path="todo" element={<TodoList />} />

      </Routes>

  )
}

export default App;
