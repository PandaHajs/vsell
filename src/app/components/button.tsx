import { JSX } from "react";
const ReverseButton = ({
  setParts,
}: {
  setParts: React.Dispatch<React.SetStateAction<(() => JSX.Element)[]>>;
}) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded w-1/3 mx-auto"
      onClick={() => {
        setParts((prevState) => {
          const newState = [...prevState];
          newState.reverse();
          return newState;
        });
      }}
    >
      Reverse!
    </button>
  );
};

export default ReverseButton;
