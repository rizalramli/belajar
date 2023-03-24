const root = document.querySelector('#root');

function App() {
    const [nama,setNama] = React.useState('Ramli');

    function ifSubmit(e){
        e.preventDefault();

        console.log('Nama :',nama);
    }

    return (
        <form onSubmit={ifSubmit}>
            <label>nama :</label>
            <input type="text" value={nama} onChange={function(event){
                setNama(event.target.value);
            }}></input>
            <button type="submit">Kirim</button>
        </form>
    );
}

ReactDOM.render(<App />, root);
