const root = document.querySelector('#root');
function clicked(msg) {
  alert(msg);
}
const element = /*#__PURE__*/React.createElement("button", {
  onClick: clicked.bind(this, 'Halo sudah di klik')
}, "Click Me");
ReactDOM.render(element, root);