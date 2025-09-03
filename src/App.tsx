import './App.css'
import Cards from './components/Cards'; //Importamos o arquivo para usar aqui.

function App() {
  const meuPerfil = { //Criação de uma const para ser o perfil que sempre vai aparecer primeiro.
    id: 1,
      linkImagem: 'https://avatars.githubusercontent.com/u/136198099?s=400&u=b4ac45f8037c2e41b8f89de76d76d7cf5aa1a29c&v=4',
      nome: 'João Miguel Mendes B. Costa',
      titulo:'Estudante iniciante em desevolvimento web',
      linkGitHub: 'https://github.com/joaomiguel21'
  };

  const outrosPerfis = [ //Criação de um array onde vai contar os outros cards que vão aparecer depois.
    {
      id: 2,
      linkImagem:'https://avatars.githubusercontent.com/u/100854214?v=4',
      nome: 'Vinicius Felipe',
      titulo:'2 - Estudante de Engenharia de Software',
      linkGitHub: 'https://github.com/VFaoCUBO'},
    {
      id: 3,
      linkImagem:'https://avatars.githubusercontent.com/u/47678930?v=4',
      nome: 'Eduardo Patrick',
      titulo: '1 - Estudante de Engenharia de Software',
      linkGitHub: 'https://github.com/edumxk'},
  ];

  const outrosPerfisOrdenados = outrosPerfis.sort((a, b) => a.nome.localeCompare(b.nome)); //Ordenar o array em ordem alfabética.

  const listaPerfis = [meuPerfil, ...outrosPerfisOrdenados]; //Juntamos o perfil que deve aparecer sempre em primeiro com o array ordenado.

  return ( //Retornamos os dados no array onde linha por linha ele deve mostrar os cards com os dados que cada linha possui.
    <div className="App">
      <h1 className="page-title">Cards da Equipe do Projeto PEI</h1>
      <div className="profiles-container">
        {listaPerfis.map(perfil => (
          <Cards
            key={perfil.id}
            nome={perfil.nome}
            titulo={perfil.titulo}
            linkImagem={perfil.linkImagem}
            linkGitHub={perfil.linkGitHub}
          />
        ))}
      </div>
    </div>
  );
}

export default App
