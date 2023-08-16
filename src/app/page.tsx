
import { Header } from "./componentes/header/header"
import './styles/home.scss'
import { Sobre } from "./componentes/sobre/sobre"
import { SocialBtns } from "./componentes/social-btns/social.btns"

import { Infor } from "./componentes/informacao/informacao"


export default function Home() {
  return (
    <main className="container">

      <Header/>
      <Sobre/>
      <Infor/>  
      <SocialBtns/>   
       
      <div className='buttons'>
        <a className="btn-primary" href="https://drive.google.com/file/d/1Vh9ddA6d_Rg7ZbvKpHs4YNaU1ifPiqc3/view?usp=sharing">
          Contato
        </a>
      </div>
       
    </main>
  )
}
