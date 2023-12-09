// Photosnap.jsx
import { useState } from "react";
import TagButton from "./TagButton";
import ElementDisplay from "./ElementDisplay";
// import PhotosnapLogo from "../images/photosnap.svg";

function Photosnap({props}) {
  const {
    company,
  position,
  postedAt,
  contract,
  location,
  languages,
  clickHandler,
  role,
  level,
  // new,
  featured} = props
  const [element, setElement] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const addElement = (lang) => {
    setElement([...element, lang]);
    setVisible(true);
  };

  const clearElement = (ind) => {
    const updatedElement = element.filter((_, index) => index !== ind);
    setElement(updatedElement);
  };

  const clearButtons = () => {
    setElement([]);
  };

  return (
    <>
      {element.length > 0 && (
        <ElementDisplay
          elements={element}
          clearElement={clearElement}
          clearButtons={clearButtons}
        />
      )}

      <section className="mt-12 relative pl-4 pr-8 pb-4 bg-white border-l-4 border-dark-cyan rounded-md shadow-xl">
        <article className="flex flex-col gap-3 border-b-[1px] border-b-grayish-cyan pb-4">
          {/* <img
            src={PhotosnapLogo}
            alt="photosnap logo"
            className="absolute w-10 h-10 top-[-1.5rem]"
          /> */}
          <div className="mt-6 flex gap-4">
            <h2 className="text-dark-cyan font-fw-700">{company}</h2>
           {/* {new && 
             <p className=" uppercase px-1 rounded-md bg-dark-cyan text-light-grayish-bg font-fw-700">
              new
            </p>  
           } */}
           {featured &&
            <p className=" uppercase px-1 rounded-md bg-dark-grayish-cyan text-light-grayish-bg font-fw-700">
              featured
            </p>
            }
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
            <TagButton label={role} onClick={() => addElement(role)} />
            <TagButton label={level} onClick={() => addElement(level)} />
          </div>
          <div className="flex gap-4">
            {languages.map((btn, index) => (
              <TagButton
                key={index}
                label={btn}
                onClick={() => addElement(btn)}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Photosnap;
