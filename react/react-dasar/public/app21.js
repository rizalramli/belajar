const root = document.querySelector('#root');
function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function saveTodo(event) {
    event.preventDefault();
    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setActivity('');
      setEdit({});
      return setTodos(updatedTodos);
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity('');
  }
  function removeTodo(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }
  function editTodo(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simpel Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodo
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "isi aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan Perubahan' : 'Tambah')), /*#__PURE__*/React.createElement("ul", null, todos.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.activity, /*#__PURE__*/React.createElement("button", {
      onClick: editTodo.bind(this, item)
    }, " Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodo.bind(this, item.id)
    }, " Hapus"));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);