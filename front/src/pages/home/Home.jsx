import Header from "./Header.jsx";
import styled from "styled-components";
import search from "../../../public/search.png";
import people from "../../../public/people.png";
import left_arrow from "../../../public/leftarrow.png";
import right_arrow from "../../../public/rightarrow.png";
import swap from "../../../public/swap.png";

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

export default function Home(){
	return(
		<>
		<Header />
		<Container>
			<SearchContainer>
				<SearchInput>
					<input type="text" placeholder="Buscar por aluno" />
					<img src={search}/>
				</SearchInput>
				<ButtonAdd>
					<img src={people}/>
					<p>Adicionar</p>
				</ButtonAdd>
			</SearchContainer>
			<ListStudents>
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
