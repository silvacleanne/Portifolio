import { Exception } from "sass"
import { Header } from "./componentes/header/header"
import './styles/home.scss'
import { Experiencia } from "./componentes/experiencia/experiencia"
import { SocialBtns } from "./componentes/social-btns/social.btns"

import { Infor } from "./componentes/informacao/informacao"


export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Experiencia/>
      <Infor/>  
      <SocialBtns/>   
       
      <div className='buttons'>
        <a className="btn-primary" href="https://drive.google.com/file/d/1Vh9ddA6d_Rg7ZbvKpHs4YNaU1ifPiqc3/view?usp=drive_link">
          Contato
        </a>
      </div>
       
    </main>
  )
}
