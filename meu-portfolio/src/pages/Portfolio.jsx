
const projects = [
  {
    name: 'Projeto 1',
    description: 'Pokedex feita com React e Vite',
    image: '/assets/pokedex.png',
    link: 'https://github.com/fegas95/pokedex'
  },
  {
    name: 'Projeto 2',
    description: 'To do List feito com JS',
    image: '/assets/to-do-list.jpg',
    link: 'https://github.com/fegas95/to-do-list'
  },
  {
    name: 'Projeto 3',
    description: 'Jogo da velha feito com Js e React',
    image: '/assets/jogo-da-velha.png',
    link: 'https://github.com/fegas95/jogodavelha'
  },
  // Adicione mais projetos conforme necessário
];

const Portfolio = () => (
  <div>
    <h1>Portfólio</h1>
    {projects.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.name} />
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    ))}
  </div>
);

export default Portfolio;