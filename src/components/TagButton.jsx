function TagButton({ label, onClick }) {
  return (
    <button
      className="font-fw-700 rounded-md py-1 px-2 text-dark-cyan bg-light-grayish-bg cursor-pointer hover:bg-dark-cyan hover:text-light-grayish-bg"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default TagButton;