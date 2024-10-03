import styled from "styled-components";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import StudentsContexts from "../../contexts/StudentsContext";
import CoursesContext from "../../contexts/CoursesContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5vh;
    & label{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
    }
    padding: 0 10vh;
    margin: 8vh 0;
`
const StudentContainer = styled.div`
    gap: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const LocalizationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    flex-wrap: wrap;
`
const CoursesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vh;
`
const InputText = styled.input`
    border-radius: 6px;
    height: 50px;
    background: #F2F2F2;
    border: 0.5px solid #BDBDBD;
`
const Select = styled.select`
    border-radius: 6px;
    height: 50px;
    background: #F2F2F2;
    border: 0.5px solid #BDBDBD;
`

export default function Student() {
	const location = useLocation();
	const id = location.state.id;
	const [ student, setStudent ] = useState({});
	const [ name, setName ] = useState(location.state.name);
	const [ lastname, setLastname ] = useState("");
	const [ birthday, setBirthday ] = useState("");
	const [ cpf, setCpf ] = useState("");
	const [ gender, setGender ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ cep, setCep ] = useState("");
	const [ country, setCountry ] = useState("");
	const [ street, setStreet ] = useState("");
	const [ neighborhood, setNeighborhood ] = useState("");
	const [ number, setNumber ] = useState("");
	const [ complement, setComplement ] = useState("");
	const [ city, setCity ] = useState("");
	const [ state, setState ] = useState("");
	const [ studentsCourses, setStudentsCourses ] = useState([]);
	const {courses, setCourses} = useContext(CoursesContext);
	const { students, setStudents } = useContext(StudentsContexts);
	const findStudent = () =>{
		students.forEach((s)=>{
			if(s.student_id === id){
				setStudent(s);
			}
		});
	}
	useEffect(()=>{
		if(student.student_name == null){
			findStudent();
		}
		if(student.student_name){
			setName(student.student_name);
			setLastname(student.student_lastname);
			const birthdayString = student.student_birthday;
			const day = birthdayString.slice(0,2);
			const month = birthdayString.slice (3,5);
			const year = birthdayString.slice(6, 10);
			setBirthday(`${year}-${month}-${day}`);
			setCpf(student.student_cpf);
			setGender(student.student_gender);
			setEmail(student.student_email);
			setCep(student.student_cep);
			setCountry(student.student_country);
			setStreet(student.student_street);
			setNeighborhood(student.student_neighborhood);
			setNumber(student.student_number);
			setComplement(student.student_complement);
			setCity(student.student_city);
			setState(student.student_state);
			if(student.student_courses) setStudentsCourses(student.courses);
		}
	}, [student])
	const handleSave = ()=>{
		// checar campos obrigatorios
		// checar se existe
		// update
		// create
	}
	return (
		<>
			<Header props={{id, name, lastname}}/>
			<Container>
				<StudentContainer>
					<div>
						<label>Nome*</label><br />
						<InputText 
							style={{ width: "465px" }}
							type="text" 
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label>Sobrenome</label><br />
						<InputText 
							style={{ width: "609px" }}
							type="text" 
							value={lastname}
							onChange={(e) => setLastname(e.target.value)}
						/>
					</div>
					<div>
						<label>Data de Nascimento</label><br />
						<InputText 
							style={{ width: "255px" }}
							type="date" 
							value={birthday}
							onChange={(e)=>setBirthday(e.target.value)}
						/>
					</div>
					<div>
						<label>CPF</label><br />
						<InputText 
							style={{ width: "255px" }}
							type="text" 
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
						/>
					</div>
					<div>
						<label>Gênero</label><br />
						<Select
							style={{ width: "544px" }}
							value={gender}
							onChange = {(e) => setGender(e.target.value)}
						>
							<option value="Masculino">Masculino</option>
							<option value="Feminino">Feminino</option>
						</Select>
					</div>
					<div>
						<label>Email*</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</StudentContainer>
				<h1>Localização</h1>
				<LocalizationContainer>
					<div>
						<label>CEP*</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={cep}
							onChange={(e) => setCep(e.target.value)}
						/>
					</div>
					<div>
						<label>País*</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
					<div>
						<label>Rua</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>
					</div>
					<div>
						<label>Bairro</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={neighborhood}
							onChange={(e) => setNeighborhood(e.target.value)}
						/>
					</div>
					<div>
						<label>Número*</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</div>
					<div>
						<label>Complemento</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={complement}
							onChange={(e) => setComplement(e.target.value)}
						/>
					</div>
					<div>
						<label>Cidade</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div>
						<label>Estado</label><br />
						<InputText 
							style={{ width: "537px" }}
							type="text" 
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
				</LocalizationContainer>
				<h1>Cursos</h1>
				<CoursesContainer>
					<div>
						<label>Nome Do Curso</label><br />
						<Select 
							style={{ width: "741px" }} 
						>
						<option></option>
						{courses.map((course)=>{
							return(
								<option>{course.course_name}</option>
							)
						})}
						</Select>
					</div>
					<div>
						<label>Data de Conclusão</label><br />
						<InputText 
							style={{ width: "274px" }} 
							type="date" 
						/>
					</div>
					<button>Salvar</button>
				</CoursesContainer>
			</Container>
		</>
	)
}
