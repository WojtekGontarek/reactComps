import { useState } from "react";

export default function RegForm(){
    const [status, setStatus] = useState("")
    function handleSubmit(event){
        event.preventDefault();

        // Metoda 1: FormData (czysty js)
        let formData = new FormData(event.target);

        console.log(formData)

        setStatus(`Login: ${formData.get('login')}`)
    }

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div><label htmlFor='login' required>Login:</label><input type='text' name='login' id='login'></input></div>
            <div><label htmlFor='email' required>Email:</label><input type='text' name='email' id='email'></input></div>
            <div><label htmlFor='pass' required>Password:</label><input type='password' name='pass' id='pass'></input></div>
            <div><label htmlFor='rpassword' required>Repeat password:</label><input type='password' name='rpassword' id='rpassword'></input></div>
            <div><button type='submit'>Zarejestruj</button></div>
            <div><p>{status}</p></div>
        </form>
    )
}

