import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "./Header.jsx";
import styled from "styled-components";
import search from "../../../public/search.png";
import people from "../../../public/people.png";
import left_arrow from "../../../public/leftarrow.png";
import right_arrow from "../../../public/rightarrow.png";
import swap from "../../../public/swap.png";
import StudentsContexts from "../../contexts/StudentsContext.jsx";
import CoursesContext from "../../contexts/CoursesContext.jsx";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 5vh;
`
const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1vh;
	margin-top: 5vh;
`
const SearchInput = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 8px 12px;
	gap: 8px;
	width: 80vh;
	height: 5vh;
	border: 0.5px solid #BDBDBD;
	border-radius: 6px;
	& input{
		border-radius: 5px;
		height: 4vh;
		border: none;
		width: 90%;
	}
	& img{
		height: 5vh;
		cursor: pointer;
	}
`
const ButtonAdd = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 10px;
	gap: 12px;
	border: 0.5px solid #BDBDBD;
	border-radius: 6px;
	cursor: pointer;
box-sizing: border-box;
	& img{
		height: 5vh;
	}
	& p{
		text-align: center;
	}
`
const Pages = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const ButtonPages = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: none;
	background: white;
	padding: 8px 14px;
	gap: 8px;
	margin: 0 auto;
	filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
	border-radius: 8px;
	cursor: pointer;
	& img{
		height: 2vh;
	}
	& p{
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 120%;
	color: #5F6368;
	}
`
const ListStudents = styled.table`
	margin-top: 3vh;
	width: 90%;
	color: #5F6368;
`
const Swap = styled.img`
	height: 3vh;
`
const SwapDiv = styled.div`
	display: flex;
	align-items: center;
`

export default function Home() {
	const navigate = useNavigate();
	const { students, _ } = useContext(StudentsContexts);
	const { courses, __ } = useContext(CoursesContext);
	const handleClickStudent = (key, name) => {
		navigate("/student", { state: { id: key, name: name } })
	}
	const handleCourse = (studentCourse) => {
		let courseName;
		courses.forEach((course)=>{
			if(course.course_id === studentCourse.course_id){
				courseName = course.course_name
			}
		})
		return courseName ? (
			<>
				{courseName}
			</>
			)
			: ""
	}
	const handleStudents = students.map((student) => {
		return student ? (
			<tr
				key={student.student_id}
				onClick={() => handleClickStudent(student.student_id, student.student_name)}
			>
				<td>{student.created_at.slice(0, 10)} </td>
				<td>{student.student_name} </td>
				<td>{student.student_state} </td>
				<td>
					{student.student_courses.length > 0 ?
						student.student_courses.map((course) => handleCourse(course))
						: ""
					}
				</td>
			</tr>
		)
			: ""
	})
	return (
		<>
			<Header />
			<Container>
				<SearchContainer>
					<SearchInput>
						<input type="text" placeholder="Buscar por aluno" />
						<img src={search} />
					</SearchInput>
					<ButtonAdd onClick={() => handleClickStudent("", null)}>
						<img src={people} />
						<p>Adicionar</p>
					</ButtonAdd>
				</SearchContainer>
				<ListStudents>
					<thead>
						<tr>
							<th>
								<SwapDiv>
									Data de cadastro
									<Swap src={swap} />
								</SwapDiv>
							</th>
							<th>Nome</th>
							<th>Estado</th>
							<th>Cursos</th>
						</tr>
					</thead>
					<tbody>
						{students.length > 0 ? handleStudents : <tr></tr>}
					</tbody>
				</ListStudents>
				<Pages>
					<ButtonPages type="button">
						<img src={left_arrow} />
						<p>Anterior</p>
					</ButtonPages>
					<ButtonPages type="button">
						<p>Próximo</p>
						<img src={right_arrow} />
					</ButtonPages>
				</Pages>
			</Container>
		</>
	)
}
