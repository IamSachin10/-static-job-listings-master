import { useState } from "react";
import jsonData from "../data.json";
import Photosnap from "./components/Photosnap";
// import HeaderBg from "./images/bg-header-mobile.svg"
function App() {
  const [data, setData] = useState(jsonData);

  return (
    <>
      {data.length > 0 && (
        <Photosnap key={data[0].id} {...data[0]}  />
      )}
    </>
  );
}

export default App;

