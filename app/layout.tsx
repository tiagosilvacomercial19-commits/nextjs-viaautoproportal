import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            padding: "15px 40px",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>ViaAuto Pro</strong>

          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
            <a href="/catalogo" style={{ color: "#fff", textDecoration: "none" }}>
              Catálogo
            </a>
            <a href="/planos" style={{ color: "#fff", textDecoration: "none" }}>
              Planos
            </a>
            <a href="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
              Dashboard
            </a>
            <a href="/login" style={{ color: "#fff", textDecoration: "none" }}>
              Login
            </a>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}