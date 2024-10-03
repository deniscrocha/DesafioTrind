import { useNavigate } from "react-router-dom";
import back from "../../../public/backarrow.png";
import deleteIcon from "../../../public/delete.png";
import axios from "axios";

const titleStyle = {
	fontFamily: "Montserrat",
	fontStyle: "normal",
	fontWeight: 800,
	fontSize: "16px",
	lineHeight: "30px",
	letterSpacing: "0.01em",
	textAlign: "center",
	color: "white"
}

export default function Header({ props }) {
	const navigate = useNavigate();
	const handleDelete = () => {
		if (props.id != null) {
			axios.delete("http://localhost:3000/students/" + id.id)
		}
		navigate("/")
	}
	return (
		<div style={{background: "#EA394E", padding: 20}}>
		<header
			className="d-flex flex-row justify-content-between align-items-center"
			style={{height: "3.0em" }}
		>
			<div 
				className="d-flex flex-row align-items-center gap:1vh"
				style={{cursor: "pointer", gap: "2vh"}}
				onClick={()=>navigate("/")}

			>
			<img
				src={back}
				className="align-self-center"
				alt="voltar"
				style={{
					width: "2.5em",
					height: "2.5em"
				}}
			/>
			<h1 style={titleStyle}>Gerenciador de Alunos</h1>
			<p style={{color: "white", fontSize: 28}}>|</p>
			{props.name ? <h1 style={titleStyle}>{props.name + " " + props.lastname}</h1> : ""}
			</div>
			<img 
				src={deleteIcon}
				className="align-self-center"
				alt="deletar"
				style={{
					width: "2.5em",
					height: "2.5em",
					cursor: "pointer"
				}}
				onClick={()=>handleDelete()}
			/>
		</header>
		</div>
	)
}

