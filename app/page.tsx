export default function Home() {
  return (
    <>
      <header style={{ padding: "20px", background: "#020617", color: "#fff" }}>
        <strong>ViaAuto Pro</strong>
        <nav style={{ marginTop: "10px" }}>
          <a href="#catalogo" style={{ marginRight: 15, color: "#fff" }}>Catálogo</a>
          <a href="#planos" style={{ marginRight: 15, color: "#fff" }}>Planos</a>
          <a href="#login" style={{ color: "#fff" }}>Login</a>
        </nav>
      </header>

      <section style={{ padding: "60px" }}>
        <h1>Portal Automotivo Profissional</h1>
        <p>Conectando lojistas, vendedores e compradores</p>
      </section>

      <section id="catalogo" style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2>Catálogo</h2>
        <p>Veículos disponíveis em breve.</p>
      </section>

      <section id="planos" style={{ padding: "60px" }}>
        <h2>Planos</h2>
        <p>Planos para lojistas e vendedores.</p>
      </section>

      <section id="login" style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2>Login</h2>
        <input placeholder="Email" /><br /><br />
        <input placeholder="Senha" type="password" />
      </section>

      <footer style={{ padding: "20px", background: "#020617", color: "#fff" }}>
        © ViaAuto Pro
      </footer>
    </>
  );
}