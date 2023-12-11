import { useState } from "react";
import TagButton from "./TagButton";
import Tag from "./Tag";

function JobListing({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  languages,
  role,
  level,
  new: isNew,
  featured,
  filter,
  tools,
}) {
  // const [selectedLanguages, setSelectedLanguages] = useState([]);

  // const addLanguage = (lang) => {
  //   setSelectedLanguages((prevLanguages) => [...prevLanguages, lang]);
  //   filter(lang);
  // };

  return (
    <section className="mt-12 relative pl-4 pr-8 pb-4 bg-white border-l-4 border-dark-cyan rounded-md shadow-xl">
      <article className="flex flex-col gap-3 border-b-[1px] border-b-grayish-cyan pb-4">
        <img
          src={logo}
          alt={company}
          className="absolute w-10 h-10 top-[-1.5rem]"
        />
        <div className="mt-6 flex gap-4">
          <h2 className="text-dark-cyan font-fw-700">{company}</h2>
          {isNew && (
            <p className=" uppercase px-1 rounded-md bg-dark-cyan text-light-grayish-bg font-fw-700">
              new
            </p>
          )}
          {featured && (
            <p className=" uppercase px-1 rounded-md bg-dark-grayish-cyan text-light-grayish-bg font-fw-700">
              featured
            </p>
          )}
        </div>
        <p className="text-dark-grayish-cyan font-fw-700">{position}</p>
        <div className="flex gap-4">
          <p className="text-grayish-cyan font-fw-500">{postedAt} .</p>
          <p className="text-grayish-cyan font-fw-500">{contract}.</p>
          <p className="text-grayish-cyan font-fw-500"> {location}</p>
        </div>
      </article>

      <article className="flex flex-col gap-2 mt-4">
        <div className="flex gap-4">
          <TagButton label={role} onClick={() => filter(role)} />
          <TagButton label={level} onClick={() => filter(level)} />
        </div>
        <div className="flex gap-4">
          {languages.map((btn, index) => (
            <TagButton
              key={index}
              label={btn}
              onClick={() => filter(btn)}
            />
          ))}
          {tools &&
            tools.map((btn, index) => (
              <TagButton
                key={index}
                label={btn}
                onClick={() => filter(btn)}
              />
            ))}
        </div>
      </article>
    </section>
  );
}

export default JobListing;
