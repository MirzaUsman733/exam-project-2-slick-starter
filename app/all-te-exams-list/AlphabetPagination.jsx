const AlphabetPagination = ({ onSelect }) => {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="flex justify-center flex-wrap gap-2 py-4">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={() => onSelect(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetPagination;
