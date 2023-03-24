const root = document.querySelector('#root');

function clicked(msg){
    alert(msg);
}

const element = (
    <button onClick={clicked.bind(this,'Halo sudah di klik')}>
        Click Me
    </button>
);

ReactDOM.render(element, root);
