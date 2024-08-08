
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = (index) => {
    const newData = data.filter((_, i) => index != i);
    setData(newData);
    console.log(data);
  };

  return (
    <div className="App">
      {data && <ChildComponent data={data} deleteHandler={deleteHandler} />}
    </div>
  );
}
const ChildComponent = ({ data, deleteHandler }) => {
  const [value, setValue] = useState("");
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const dataFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setValue(e.target.value);
    const newDataVariable = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setNewData(newDataVariable);
  };
  return (
    <>
      <input type="text" value={value} onChange={dataFilter} />

      <p>
        {newData?.map((item, index) => {
          return (
            <p key={index}>
              <span>{item?.name}</span>
              <span>{item?.username}</span>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </p>
          );
        })}
      </p>
    </>
  );
};
