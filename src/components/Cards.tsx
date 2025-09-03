interface ClasseCard { //Criação da classe e atributos que ela possui.
    key: number;
    linkImagem: string;
    nome: string;
    titulo: string;
    linkGitHub: string;
}

function Card ({nome, titulo, linkImagem, linkGitHub }: ClasseCard){
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