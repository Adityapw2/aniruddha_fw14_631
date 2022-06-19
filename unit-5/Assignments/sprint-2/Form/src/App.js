import "./App.css";
import Formm from "./component/Form.jsx";
import TableShow from "./component/TableShow.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    handleContent();
    return;
  }, [show]);

  const handleShow = () => {
    setShow(!show);
  };

  async function handleContent() {
    const response = await fetch("http://localhost:8000/user");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }
  const handleContent = () => {
    axios.get("http://localhost:8000/user").then((res) => {
      setUsers(res.data);
    });
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show Users" : "Create New User"}
      </button>

      {show ? (
        <Formm handleShow={handleShow} handleContent={handleContent} />
      ) : (
        <TableShow users={users} />
      )}
    </div>
  );
}

export default App;
