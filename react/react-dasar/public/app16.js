const root = document.querySelector('#root');
function App() {
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      judulRef.current.textContent = 'Aplikasi';
    }, 2000);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Application"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);