import { useState } from "react";
import jsonData from "../data.json";
// import JobListing from "./components/JobListing";
import Photosnap from "./components/Photosnap";
function App() {
  const [data, setData] = useState(jsonData);

  return (
    <div>
      {data.map((job) => {
        return <Photosnap key={job.id} {...job} />;
      })}
    </div>
  );
}

export default App;
