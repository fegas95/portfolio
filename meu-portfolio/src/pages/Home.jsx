
const Home = () => (
  <div className="text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
    <h1>Bem-vindo ao meu Portfólio</h1>
    <p>Sou Igor, um desenvolvedor web com habilidades em programação.</p>
    <nav className="mb-4 d-flex justify-content-center">
      <a className="btn btn-primary me-2" href="/">Home</a>
      <a className="btn btn-primary me-2" href="/portfolio">Portfólio</a>
      <a className="btn btn-primary" href="/contact">Contato</a>
    </nav>
    <img src="/assets/eu.jpeg" alt="Igor Figueiroa" className="foto-curriculo" />
  </div>
);

export default Home;