export default function Catalogo() {
  return (
    <main style={{ padding: "60px 40px" }}>
      <h1>Catálogo de Veículos</h1>

      <p style={{ marginTop: "10px", color: "#666" }}>
        Veículos disponíveis no portal ViaAuto Pro
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* CARD */}
        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Corolla XEi 2020</h3>
          <p>Automático • Flex</p>
          <strong>R$ 79.900</strong>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Compass Limited 2019</h3>
          <p>Automático • Diesel</p>
          <strong>R$ 89.900</strong>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Civic EXL 2018</h3>
          <p>Automático • Flex</p>
          <strong>R$ 74.900</strong>
        </div>
      </div>
    </main>
  );
}