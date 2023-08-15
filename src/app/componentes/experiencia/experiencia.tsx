import { SelecionaTitulo } from "../selecionaTitulo/seleciona-titulo"
import "./experiencia.scss"

export function Experiencia(){
    return(
        <div className='experiencia'>
          <SelecionaTitulo text="Experiencia"/>
          <p>Tenho experiência como Analista de Qualidade Júnior na Enjoei (Ago 2022 - Abr 2023),<br></br>
             com forte conhecimento em metodologias ágeis como Scrum e Kanban, e habilidades<br></br>
             em teste manual em websites, mobile e responsivo, bem como testes regressivos em<br></br>
             dispositivos móveis Android e iOS. Tenho conhecimento em BDD e documentação no <br></br>
             Confluence Atlassian. Participei da mentoria de Teste de Software e tenho paixão por<br></br>
             aprimorar minha automação com Cypress. Também contribuí como Estagiário de <br></br>
             Desenvolvimento no TRE (Set 2021 - Jul 2022) e como Tester QA na Fabrica de Software <br></br>
             (Set 2021 - Jul 2022), aplicando metodologia Scrum, criando planos de teste e otimizando <br></br>
             a experiência do usuário.<br></br>
             Estou comprometido(a) em aprimorar minhas habilidades em automação de testes <br></br>
             utilizando a ferramenta Cypress. Atualmente, participo da mentoria em Teste de <br></br>
             Software,Test.Class e Descomplicando Testes de API Rest (DTAR) com Julio de Lima.</p>
          <div className='tempo-experiencia'>
            
          </div>
        </div>
    )
}