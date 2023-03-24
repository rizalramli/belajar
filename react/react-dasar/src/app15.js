const root = document.querySelector('#root');

function App() {
    const [login,setLogin] = React.useState(false);
    return (
        <>
        <h1>Login dulu ya</h1>
        <p>{login && 'Kamu Sudah Login'}</p>
        <button onClick={function(){
                setLogin(true)
            }}>Login</button>
        </>
    );
}

ReactDOM.render(<App />, root);
