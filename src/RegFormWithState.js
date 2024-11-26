import { useRef, useState } from "react";

export default function RegFormWithState() {
  const [login, setLogin] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [rpassword, setRPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h2>FormState</h2>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <label htmlFor="blogin">Login:</label>
          <input
            type="text"
            id="blogin"
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bemail">Email:</label>
          <input
            type="text"
            id="bemail"
            required
            value={email}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bpassword">Password:</label>
          <input
            type="password"
            id="bpassword"
            required
            value={password}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="brpassword">Repeat password:</label>
          <input
            type="password"
            id="brpassword"
            required
            value={rpassword}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Zarejestruj</button>
        </div>
      </form>
    </div>
  );
}
