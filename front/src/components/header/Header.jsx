import logo from "../../../public/logo.png";
import styled from "styled-components";

const Container = styled.header`
	position: relative;
	width: 100%;
	height: 67px;
	left: 0px;
	top: 0px;
	background: #EA394E;
	border-radius: 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 5vh;
	padding: 1vh;
	color: white;
	& img{
		margin-left: 5vh;
		height: 5vh;
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
`

export default function Header(){
	return(
		<Container>
			<img src={logo} alt="logo" />
			<h1>Gerenciador de Alunos</h1>
		</Container>
	)
}
