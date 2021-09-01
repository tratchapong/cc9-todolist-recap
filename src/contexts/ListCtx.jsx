import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const ListCtx = createContext();

const useLists = () => {
  return useContext(ListCtx)
}

const url = "http://localhost:8080";

function ListProvider(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get(`${url}/todo`).then((res) => setLists(res.data));
  }, []);

  const hdlAdd = async (text) => {
    try {
      let res = await axios.post(`${url}/todo`, { name: text, status: false });
      setLists([...lists, res.data]);
    } catch (error) {
      console.log("Add Error :", error);
    }
  };

  const hdlDel = async (xid) => {
    setLists(lists.filter((item) => item.id !== xid));
    try {
      await axios.delete(`${url}/todo/${xid}`);
    } catch (error) {
      console.log("Delete Error :", error);
    }
  };

  const hdlEdit = async (xid, text) => {
    let e_item = lists.find((item) => item.id === xid);
    if (text === "_STATUS") {
      setLists(
        lists.map((item) =>
          item.id === xid ? { ...item, status: !e_item.status } : item
        )
      );
      await axios.put(`${url}/todo/${xid}`, {
        name: e_item.name,
        status: !e_item.status,
      });
    } else {
      setLists(
        lists.map((item) => (item.id === xid ? { ...item, name: text } : item))
      );
      await axios.put(`${url}/todo/${xid}`, {
        name: text,
        status: e_item.status,
      });
    }
  };

  return (
    <ListCtx.Provider value={{ lists, hdlAdd, hdlEdit, hdlDel }}>
      {props.children}
    </ListCtx.Provider>
  );
}

export { ListCtx, ListProvider, useLists };
