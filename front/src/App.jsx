import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Student from "./pages/creation/Student.jsx";
import StudentsContexts from "./contexts/StudentsContext.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentsConstructor from "./tools/StudentsContructor.jsx";
// import 'dotenv/config';




function App() {
	const [students, setStudents] = useState([]);
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/students/")
			.then((data) => {
				const studentsList = data.data.data;
				studentsList.forEach((student, index) => {
					axios.get("http://localhost:3000/students/courses/" + student.student_id)
						.then((fetchData)=>{
							const coursesList = [];
							const coursesFinded = fetchData.data.data;
							for(let i=0; i<coursesFinded.length; i++){
								const actual = coursesFinded[i]
								for(let j=0; j<courses.length; j++){
									if(actual.course_id === courses[j].course_id){
										coursesList.push(courses[j].course_name)
									}
								}
							}
							studentsList[index] = StudentsConstructor(student, coursesList);
						})
				})
				setStudents(studentsList);
			});
		axios.get("http://localhost:3000/courses/")
			.then((data) => {
				setCourses(data.data.data);
			});
	}, [])
	return (
		<>
			<StudentsContexts.Provider value={{ students, setStudents}}>
				<Router>
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/student" Component={Student} />
					</Routes>
				</Router>
			</StudentsContexts.Provider>
		</>
	)
}

export default App
