import { useNavigate } from "react-router-dom";
import back from "../../../public/backarrow.png";
import deleteIcon from "../../../public/delete.png";
import styled from "styled-components";

const ContainerHeader = styled.header`
	position: relative;
	width: 100%;
	height: 10vh;
	left: 0px;
	top: 0px;
	background: #EA394E;
	border-radius: 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	color: white;
	& img{
		margin-left: 5vh;
		height: 3vh;
		margin-right: 5vh;
	}
	& h1{
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 800;
		font-size: 16px;
		line-height: 30px;
		letter-spacing: 0.01em;
		text-align: center;
	}
    & div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5vh;
				cursor: pointer;
    }
`
export default function Header(){
	const navigate = useNavigate();
	return(
		<ContainerHeader>
            <div onClick={()=>{navigate("/")}}>
                <img src={back} alt="comeback" />
                <h1>Gerenciador de Alunos</h1>
                <p>|</p>
            </div>
			<img src={deleteIcon}  alt="logo" />
		</ContainerHeader>
	)
}

