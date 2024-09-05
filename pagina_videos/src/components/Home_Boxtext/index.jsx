import Textbox from "../Textbox/index2"


function Home_textbox({texto}){
    const texto = [
        {
            titulo: "Crie seus vídeos online",
            paragrafo: "Tranforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.",
            botao: "Começar agora!"
        }


    ]

return (
    <div className="texto">
        <Textbox texto={texto}/>

    </div>
)
}

export default Home_textbox