const root = document.querySelector('#root');
function App() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log('init corousel');
    return function () {
      console.log('destroy corousel');
    };
  }, [click]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick(true);
    }
  }, "Clicked"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah Nilai"), "Nilai Sekarang : ", count);
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);