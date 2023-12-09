import Tag from "./Tag"

function ElementDisplay({elements, clearElement, clearButtons}){
  return (
      <div className="flex bg-white flex-row-reverse items-center mx-4 my-8 overflow-y-auto max-h-screen rounded">
      {elements.length > 0 && (
        <div>
          <button
            className="text-grayish-cyan font-fw-700 px-4 py-2 rounded mt-2 self-end"
            onClick={clearButtons}
          >
            Clear
          </button>
        </div>
      )}
      <div className="flex flex-wrap mt-2 ml-2">
        {elements.map((item, index) => (
          <Tag key={index} label={item} onRemove={() => clearElement(index)} />
        ))}
      </div>
    </div>
  )
}

export default ElementDisplay