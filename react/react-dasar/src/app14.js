const root = document.querySelector('#root');

function App() {
    const [click,setClick] = React.useState(false);
    const [count,setCount] = React.useState(0);
    React.useEffect(function(){
        console.log('init corousel');

        return function(){
            console.log('destroy corousel');
        }
    },[click]);
    return (
        <>
        <button onClick={function(){
                setClick(true)
            }}>Clicked</button>
            <button onClick={function(){
                setCount(count + 1)
            }}>Tambah Nilai</button>
            Nilai Sekarang : {count}
        </>
    );
}

ReactDOM.render(<App />, root);
