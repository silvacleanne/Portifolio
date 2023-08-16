import { SelecionaTitulo } from "../selecionaTitulo/seleciona-titulo"
import "./sobre.scss"

export function Sobre(){
    return(
        <div className='sobre'>
          <SelecionaTitulo text="Sobre"/>
          <p>sou apaixonada por explorar a vida ao máximo. De SP ao RJ e agora na PB, minha jornada<br></br>
           me trouxe experiências incríveis. Dançar com amigos, aproveitar praias e estar com a<br></br>
           família são meu refúgio. <br></br>
          Formada em contabilidade, minha transição para TI revela meu amor por desafios. Já trabalhei<br></br>
          como Analista de QA, enfrentando aprendizados valiosos. "Naruto" é meu anime favorito,<br></br>
          refletindo meu crescimento pessoal. Atualmente desempregada, busco oportunidades com<br></br>
          entusiasmo.<br></br> 
          Conectar e aprender são meu lema.  </p>
          
        </div>
    )
}