import { useRef, useState } from "react";

export default function RegFormWithRef() {
    const [status, setStatus] = useState("")

    const loginRef = useRef(),
        emailRef = useRef(),
        passwordRef = useRef(),
        rpasswordRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const login = loginRef.current.value;
        const email = emailRef.current.value;

        emailRef.current.value = "to@df.dl";

        setStatus(`Login: ${login}`)
    }

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div><label htmlFor='login' required>Login:</label><input type='text' ref={loginRef} id='alogin'></input></div>
            <div><label htmlFor='email' required>Email:</label><input type='text' ref={emailRef} id='aemail'></input></div>
            <div><label htmlFor='password' required>Password:</label><input type='password' ref={passwordRef} id='apass'></input></div>
            <div><label htmlFor='rpassword' required>Repeat password:</label><input type='password' ref={rpasswordRef} id='rpassword'></input></div>
            <div><button type='submit'>Zarejestruj</button></div>
            <div><p>{status}</p></div>
        </form>
    )
}

