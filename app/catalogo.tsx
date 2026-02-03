export default function Catalogo() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Catálogo de Veículos</h1>
      <p>Veja todos os veículos disponíveis para venda e consignação.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "20px" }}>
          <strong>Fiat Cronos 2020</strong><br />
          R$ 69.900,00<br />
          Quilometragem: 85.000 km
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong>Corolla 2018 XEi</strong><br />
          R$ 72.000,00<br />
          Quilometragem: 85.000 km
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong>Kicks 2022</strong><br />
          R$ 95.000,00<br />
          Quilometragem: 40.000 km
        </li>
      </ul>

      <a href="/" style={{ display: "inline-block", marginTop: "20px" }}>
        Voltar para Home
      </a>
    </main>
  );
}