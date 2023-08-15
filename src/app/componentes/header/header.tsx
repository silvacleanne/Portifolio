import Image from 'next/image'
import "./header.scss"

export function Header() {
    return(
        <div className='header'>
            <div>
               <h1>Olá, Sou Cleanne Silva!</h1>
               <h2>Analista de Qualidade</h2>
               
               
            <Image
                src='/me.png'
                alt='Vercel Logo'
                width={325}
                height={310}
                priority
            />
            </div>
        </div>
    )
}