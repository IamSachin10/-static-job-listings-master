import { useState } from "react";
import PhotosnapLogo from "../images/photosnap.svg";

function Photosnap({
  id,
  company,
  role,
  position,
  level,
  postedAt,
  contract,
  location,
  languages,
  clickHandler,
}) {
  const [element, setElement] = useState([]);

  const addElement = (lang) => {
    setElement([...element, lang]);
  };

  const clearElement = (ind) => {
    const updateElement = element.filter((_, index) => {
      return index !== ind
    } )
    setElement(updateElement)
  }

  return (
    <>
      <div className="bg-white h-[15vh] flex gap-4">
        {element.map((item, index) => (
          <div key={index} className="relative flex">
            <button className="text-dark-cyan bg-light-grayish-bg font-fw-700 w-8 h-4">
              {item}
            </button>
            {item && (
              <button
                className="  bg-dark-cyan text-light-grayish-bg w-8 h-4 font-fw-700"
                onClick={() => clearElement(index)}
              >
                X
              </button>
            )}
          </div>
        ))}
        <button>clear</button>
      </div>

      <section className=" mt-12 relative pl-4 pr-8 pb-4 bg-white border-l-4 border-dark-cyan rounded-md shadow-xl">
        <article className="  flex flex-col gap-3 border-b-[1px] border-b-grayish-cyan pb-4 ">
          <img
            src={PhotosnapLogo}
            alt="photosnap logo"
            className=" absolute w-10 h-10 top-[-1.5rem] "
          />
          <div className=" mt-6  flex gap-4">
            <h2 className="text-dark-cyan font-fw-700">{company}</h2>
            <p className=" uppercase px-1 rounded-md bg-dark-cyan text-light-grayish-bg font-fw-700 ">
              new
            </p>
            <p className=" uppercase px-1 rounded-md bg-dark-grayish-cyan text-light-grayish-bg font-fw-700 ">
              featured
            </p>
          </div>
          <p className="text-dark-grayish-cyan font-fw-700">{position}</p>
          <div className="flex  gap-4">
            <p className="text-grayish-cyan font-fw-500">{postedAt} .</p>
            <p className="text-grayish-cyan font-fw-500">{contract}.</p>
            <p className="text-grayish-cyan font-fw-500"> {location}</p>
          </div>
        </article>

        <article className=" flex flex-col gap-2 mt-4">
          <div className="flex gap-4">
            <button
              className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
              onClick={() => clickHandler(languages)}
            >
              {role}
            </button>
            <button
              className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
              onClick={() => clickHandler(level)}
            >
              {level}
            </button>
          </div>
          <div className="flex gap-4">
            {languages.map((btn, index) => {
              return (
                <button
                  key={index}
                  className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
                  onClick={() => addElement(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}

export default Photosnap;
