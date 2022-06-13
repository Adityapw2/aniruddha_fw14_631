import axios from "axios";
import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import CityRow from "./components/CityRow";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [pglimit] = useState(10);
  const [currpage, setCurrpage] = useState(0);

  const prev = () => {
    if (currpage > 0) {
      pagination(currpage - 1, pglimit, -1);
    }
  };
  const next = () => {
    pagination(currpage + 1, pglimit, 1);
  };

  React.useEffect(() => {
    pagination(1, 10, 1);
  }, []);

  const pagination = async (s, e, i) => {
    return await axios
      .get(
        `https://json-server-mocker-masai.herokuapp.com/cities?_page=${s}&_limit=${e}}`
      )
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
        setCurrpage(currpage + i);
      });
  };

  return (
    <div className="App">
      {/* <div id="loading-container"></div> */}
      <table>
        <tr>
          <th>ID</th>
          <th>CITY NAME</th>
          <th>COUNTRY NAME</th>
          <th>POPULATION</th>
        </tr>
        {/* 
            create rows for countries

          */}
        {data.map((e) => {
          return <CityRow key={e.id} {...e} />;
        })}
      </table>

      <div>
        <ButtonComponent
          id="SORT_BUTTON"
          title={`Sort by Increasing Population`}
        />
        <ButtonComponent onClick={prev} title="PREV" id="PREV" />
        <ButtonComponent onClick={next} id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
