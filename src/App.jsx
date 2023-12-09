import { useState } from "react";
import JobListing from "./components/JobListing";
import data from '../data.json'

function App(){
  const [jobs, setJobs] = useState(data)
  const filter = (job) => {
    if(job === ""){
      setJobs(data)
    } else {
      const filterJobs = data.filter((newJob) => newJob.languages.includes(job))
      setJobs(filterJobs)
    }
  }
  return (
    <div>
      {jobs.map((job) => {
        return <JobListing key={job.id} filter={filter} {...job} />
      })}
    </div>
  )
}


export default App