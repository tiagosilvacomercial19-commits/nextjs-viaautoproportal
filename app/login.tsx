export default function Login() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Login</h1>
      <p>Acesso à plataforma ViaAuto Pro</p>

      <form style={{ maxWidth: "300px" }}>
        <input
          type="email"
          placeholder="E-mail"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Senha"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Entrar
        </button>
      </form>
    </main>
  );
}