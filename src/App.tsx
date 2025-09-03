import './App.css'
import Cards from './components/Cards';

function App() {
  const meuPerfil = {
    id: 1,
      linkImagem: 'https://avatars.githubusercontent.com/u/136198099?s=400&u=b4ac45f8037c2e41b8f89de76d76d7cf5aa1a29c&v=4',
      nome: 'João Miguel Mendes B. Costa',
      titulo:'Estudante iniciante em desevolvimento web',
      linkGitHub: 'https://github.com/joaomiguel21'
  };

  const outrosPerfis = [
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

  const outrosPerfisOrdenados = outrosPerfis.sort((a, b) => a.nome.localeCompare(b.nome));

  const listaPerfis = [meuPerfil, ...outrosPerfisOrdenados];

  return (
    <div className="App">
      <h1>Cards da Equipe do Projeto PEI</h1>
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
