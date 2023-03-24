const root = document.querySelector('#root');
function App() {
  const [nama, setNama] = React.useState('Ramli');
  function ifSubmit(e) {
    e.preventDefault();
    console.log('Nama :', nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ifSubmit
  }, /*#__PURE__*/React.createElement("label", null, "nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: nama,
    onChange: function (event) {
      setNama(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);