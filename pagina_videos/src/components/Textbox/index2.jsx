export default function Textbox({ dados }){
    return(
        <>
        {
            dados.map(texto => (
            <div className="textos" >
                <h1>{texto.titulo}</h1>
                <p>{texto.paragrafo}</p>
                <button>{texto.botao}</button>
            </div>
            ))
        }
        </>
    )
}