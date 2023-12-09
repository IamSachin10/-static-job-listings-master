function Tag({ label, onRemove }) {
  return (
    <div className="mr-2 mb-2">
      <button className="text-dark-cyan bg-light-grayish-bg font-fw-700 px-4 py-2 rounded inline-flex items-center">
        {label}
        <span
          className="cursor-pointer bg-dark-cyan text-light-grayish-bg font-fw-700 px-2 ml-2 rounded"
          onClick={onRemove}
        >
          X
        </span>
      </button>
    </div>
  );
}

export default Tag;