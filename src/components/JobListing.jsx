import TagButton from "./TagButton";
import { useState } from "react";

function JobListing({ job }) {
  const [element, setElement] = useState([]);

  const addElement = (lang) => {
    setElement([...element, lang]);
  };
  return (
    <section>
      <article>
        <div>
          <h2>{job.company}</h2>
          {job.new && <p>new</p>}
          {job.featured && <p>featured</p>}
        </div>
        <p>{job.position}</p>
        <div>
          <p>{job.postedAt}</p>
          <p>{contract}</p>
          <p>{job.location}</p>
        </div>
      </article>
      <article>
        <div>
          <TagButton label={job.role} onClick={addElement(job.role)} />

          <TagButton label={job.level} onClick={addElement(job.level)} />
        </div>
        <div>
          {job.languages.map((btn, index) => {
            <TagButton key={index} label={btn} onClick={addElement(btn)} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default JobListing;
