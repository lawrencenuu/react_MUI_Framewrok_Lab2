//import "./App.css";
// import Home from "./components/Home";
// import Todo from "./components/Todo";
import TodoPage from "./pages/TodoPage";
import {Route, Routes} from "react-router-dom";
import CalenderPage from "./pages/Calendar";
import HomePage from "./pages/Homepage";
import TodayPage from "./pages/Todaypage";

function App(){
    return(
        <Routes>
            <Route exect path="/" element={<HomePage/>} />
            <Route path="/todo" element={<TodoPage/>} />
            <Route path="/today" element={<TodayPage/>} />
            <Route path="/calendar" element={<CalenderPage />} />
        </Routes>
    
    );
}
export default App;
