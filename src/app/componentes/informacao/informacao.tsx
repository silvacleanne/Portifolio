import { SelecionaTitulo } from "../selecionaTitulo/seleciona-titulo"


export function Infor(){
    return(
        <div className="infor">
        <SelecionaTitulo text="Educação"/>
        <div className="educacao-infor">
          <span>Centro Universitário de João Pessoa</span><br></br>
          <span>Analise de desenvolvimento de sistema| Ago 2020 - Dez 2022</span>
        </div>
        <SelecionaTitulo text="Habilidades"/>
        <div className="habilidade-infor">
        <ul>
          <li>Linguagem Java</li>
          <li>Selenium e Junit</li>
          <li>Metodologia Ágil</li>
          <li>Visual Studio</li>
          <li>Teste em robo</li>
          <li>SQL</li>
        </ul>
          
        </div>
      </div>
    )
}