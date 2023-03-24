const root = document.querySelector('#root');

function App() {
    React.useEffect(function(){
        // const getData = fetch(`https://api.spaceflightnewsapi.net/v3/blogs`).then(function(response){
        //     return response.json();
        // }).then(function(response){
        //     console.log(response);
        // })
        // console.log(getData);
        async function getData(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs`);
            
            const response = await request.json();
            console.log(response);
        }
        getData();
    },[]);
    return <h1>Data Fetch</h1>;
}

ReactDOM.render(<App />, root);
