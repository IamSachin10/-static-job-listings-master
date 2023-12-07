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