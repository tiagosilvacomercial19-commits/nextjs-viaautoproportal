export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* BANNER */}
      <section
        style={{
          height: "80vh",
          background: "linear-gradient(135deg, #000, #222)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
        }}
      >
        <h1 style={{ fontSize: "48px", maxWidth: "700px" }}>
          O portal profissional para vender e gerir veículos
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "600px", marginTop: "20px" }}>
          Conectamos vendedores, lojistas e compradores em um único ecossistema
          inteligente.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
          <a
            href="/catalogo"
            style={{
              padding: "15px 25px",
              backgroundColor: "#fff",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Ver Catálogo
          </a>

          <a
            href="/planos"
            style={{
              padding: "15px 25px",
              border: "2px solid #fff",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Conhecer Planos
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: "60px 40px" }}>
        <h2>Por que usar o ViaAuto Pro?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          <div>
            <h3>🚗 Catálogo Organizado</h3>
            <p>Todos os veículos centralizados em um único lugar.</p>
          </div>

          <div>
            <h3>📊 Dashboard Inteligente</h3>
            <p>Controle total de estoque, vendas e performance.</p>
          </div>

          <div>
            <h3>💰 Monetização Clara</h3>
            <p>Planos simples e escaláveis para lojistas e vendedores.</p>
          </div>
        </div>
      </section>
    </main>
  );
}