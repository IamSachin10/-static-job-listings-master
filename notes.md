         ```jsx

          <button
            className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
            onClick={() => clickHandler(languages[index])}
          >
            {languages[0]}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
            onClick={() => clickHandler(languages[index])}
          >
            {languages[1]}
          </button>
          <button
            className=" font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
            onClick={() => clickHandler(languages[index])}
          >
            {languages[2]}
          </button>
         ```










```jsx
          {add && (
        <div className="bg-white h-[15vh] flex items-center justify-center gap-4">
          <div className=" flex items-center justify-center gap-2">
            <button className="bg-dark-cyan text-light-grayish-bg w-[5rem] h-8 rounded-sm">
              {add}
            </button>
            {/* <span className="font-fw-700 bg-light-grayish-bg text-dark-cyan">
              X
            </span> */}
          </div>
          <button
            type="button"
            onClick={clearItem}
            className=" font-fw-700 text-grayish-cyan text-xl "
          >
            clear
          </button>
        </div>
      )}

```

```jsx


      <div className=" inline-grid grid-flow-col bg-white h-[15vh]">
        {element.map((item, index) => (
          <div
            key={index}
            className=" flex gap-2  items-center "
          >
            <button className="text-dark-cyan bg-light-grayish-bg font-fw-700 w-8 h-4">
              {item}
              {item && (
                <span
                  className="cursor-pointer  bg-dark-cyan text-light-grayish-bg w-8 h-4 font-fw-700"
                  onClick={() => clearElement(index)}
                >
                  X
                </span>
              )}
            </button>
          </div>
        ))}
        {
        element.length > 0 && (<button className="font-fw-700 text-grayish-cyan" onClick={clearButtons}>clear</button>)
        }
      </div>
```