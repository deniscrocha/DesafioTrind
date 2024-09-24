import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Student from "./pages/creation/Student.jsx";

function App() {
  return (
    <>
			<Router>
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/student" Component={Student} />
				</Routes>
			</Router>
    </>
  )
}

export default App
