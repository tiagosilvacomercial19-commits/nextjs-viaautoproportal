import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={{ backgroundColor: "#000", color: "#fff" }}>
  <div
    style={{
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {/* LOGO */}
    <div style={{ fontSize: "22px", fontWeight: "bold" }}>
      ViaAuto<span style={{ color: "#999" }}>Pro</span>
    </div>

    {/* MENU */}
    <nav style={{ display: "flex", gap: "20px" }}>
      <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Início</a>
      <a href="/catalogo" style={{ color: "#fff", textDecoration: "none" }}>Catálogo</a>
      <a href="/planos" style={{ color: "#fff", textDecoration: "none" }}>Planos</a>
      <a href="/login" style={{ color: "#fff", textDecoration: "none" }}>Entrar</a>
    </nav>
  </div>
</header>

        <main>{children}</main>
      </body>
    </html>
  );
}