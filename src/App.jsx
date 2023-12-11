import { useState } from "react";
import JobListing from "./components/JobListing";
import Tag from "./components/Tag";
import data from "../data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [item, setItem] = useState([])

  const filter = (...parameters) => {
  console.log("Filtering with parameters:", parameters);

  const filteredJobs = jobs.filter((job) => {
    return parameters.some((param) => {
      return (
        job.languages.includes(param) ||
        job.role.includes(param)||
        job.company.includes(param) ||
        job.level.includes(param) ||
        job.tools.includes(param)
      );
    });
  });

  if (filteredJobs.length > 0) {
    setJobs(filteredJobs);
    setItem[parameters]
  } else {
    console.error("No matching jobs found");
    // Optionally, you can set jobs to the original data
    // setJobs(jobs);
  }
};

const onRemove = (id) => {
  setJobs(jobs.filter((job => job.id !== id)))
};


  return (
    <div>
      <Tag 
      onRemove={onRemove}
      label={item}
      />
      {jobs.map((job) => {
        return <JobListing key={job.id} filter={filter} {...job} />;
      })}
    </div>
  );
}

export default App;
