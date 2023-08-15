import "./seleciona-titulo.scss"


interface SelecionaTituloProps {
    text: string
}

export function SelecionaTitulo({ text } : SelecionaTituloProps) {
    return(
        <h3 className="seleciona-titulo">{text}</h3>
    )
}