import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    function loginHandler(event){
        event.preventDefault();

        const chechLogin = true;

        if(chechLogin){
            navigate('/dashboard');
        }
    }
    return (
        <>
            <h1>Halaman Login</h1>
            <form onSubmit={loginHandler}>
                <input type="text" name="username"></input>
                <input type="password" name="password"></input>
                <button type="submit">Login</button>
            </form>
        </>
    );
}