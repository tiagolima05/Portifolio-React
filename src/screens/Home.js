import styled from "styled-components";
import Page from "../components/Page";
import { breakPoints, font, size } from "../helpers/Constants";

export default function Home() {
    return (
        <Page>
            <Title>Formação</Title>
            <SubTittle bold>Faculdade</SubTittle>
            <SubTittle>
                Cursando - Tecnologia em Análise e Desenvolvimento de Sistemas
                na FAESA
            </SubTittle>
            <SubTittle bold>Data Science Academy</SubTittle>
            <SubTittle>Microsoft Power BI para Data Science</SubTittle>
            <SubTittle bold>Alura</SubTittle>
            <SubTittle>HTML5 </SubTittle>
            <SubTittle>CSS3</SubTittle>
            <Title>Experiência Profissional</Title>
            <SubTittle bold>Motora Techonologies</SubTittle>
            <SubTittle>
                Estagiário de nível superior, atuo no monitoramento do centro de
                controle de operações e no suporte ao aprimoramento do CCO.
            </SubTittle>
            <Title>Informações Adicionais</Title>
            <SubTittle bold>Língua Inglesa</SubTittle>
            <SubTittle>
                Participei de um Intercâmbio em 2018 em Toronto, Canadá então
                possuo leitura, conversação e escrita em nivel intermediário
            </SubTittle>
            <Title>Conhecimento</Title>
            <SubTittle>Pacote Office</SubTittle>
            <SubTittle>Back-End Java e Python</SubTittle>
            <SubTittle>Front-End HTML5, CSS3 e Javascript</SubTittle>
        </Page>
    );
}

const Title = styled.p`
    font-family: ${font};
    margin: 0;
    font-weight: bold;
    font-size: ${size.size2};
    @media ${breakPoints.tablet} {
        font-size: ${size.size4};
    }
`;
const SubTittle = styled.p`
    padding: 0.5rem;
    font-family: ${font};
    font-weight: ${(props) => props.bold && "bold"};
    margin: 0;
    width: 90%;
    font-size: ${size.size1};
    @media ${breakPoints.tablet} {
        font-size: ${size.size2};
        width: 70%;
    }
`;
