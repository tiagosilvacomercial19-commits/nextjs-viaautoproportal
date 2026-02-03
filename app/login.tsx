export default function Login() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #ddd",
          padding: "30px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Acessar Plataforma</h1>

        <form>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}