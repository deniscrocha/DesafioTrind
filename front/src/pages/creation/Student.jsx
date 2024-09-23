import styled from "styled-components";
import Header from "./Header";

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

export default function Student(){
    return(
    <>
        <Header />
        <Container>
            <StudentContainer>
                <div>
                    <label>Nome*</label><br/>
                    <InputText style={{width: "465px"}} type="text"/>
                </div>
                <div>
                    <label>Sobrenome</label><br/>
                    <InputText style={{width: "609px"}} type="text"/>
                </div>
                <div>
                    <label>Data de Nascimento</label><br/>
                    <InputText style={{width: "255px"}} type="date"/>
                </div>
                <div>
                    <label>CPF</label><br/>
                    <InputText style={{width: "255px"}} type="text"/>
                </div>
                <div>
                    <label>Gênero</label><br/>
                    <Select style={{width: "544px"}}>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Select>
                </div>
                <div>
                    <label>Email*</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
            </StudentContainer>
            <h1>Localização</h1>
            <LocalizationContainer>
                <div>
                    <label>CEP*</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>País*</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Rua</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Bairro</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Número*</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Complemento</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Cidade</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
                <div>
                    <label>Estado</label><br/>
                    <InputText style={{width: "537px"}} type="text"/>
                </div>
            </LocalizationContainer>
            <h1>Cursos</h1>
            <CoursesContainer>
                <div>
                    <label>Nome Do Curso</label><br/>
                    <Select style={{width: "741px"}}/>
                </div>
                <div>
                    <label>Data de Conclusão</label><br/>
                    <InputText style={{width: "274px"}} type="date"/>
                </div>
                <button>Salvar</button>
            </CoursesContainer>
        </Container>
    </>
    )
}