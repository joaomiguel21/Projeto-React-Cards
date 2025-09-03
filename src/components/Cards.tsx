interface ClasseCard { //Criação da pasta "Components" e da classe e atributos "Cards".
    key: number;
    linkImagem: string;
    nome: string;
    titulo: string;
    linkGitHub: string;
}

function Card ({nome, titulo, linkImagem, linkGitHub }: ClasseCard){ //Criação da função Card para a descontrução.
    return(
        <div className="card">
            <img src={linkImagem} alt={'Imagem de ${name}'} className="card-img" />
            <h2>{nome}</h2>
            <p>{titulo}</p>
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer">Perfil GitHub</a>
        </div>
    );
}

export default Card;