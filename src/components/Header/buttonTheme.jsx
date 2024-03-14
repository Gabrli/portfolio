import { FaMoon } from "react-icons/fa";

export default function ButtonTheme(props) {
  const { setTheme, theme } = props;

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={`transition duration-500 ease-in-out rounded text-gray-500 p-2 text-xl border ${
        theme === "dark"
          ? "border-secondary2 hover:text-white"
          : "border-secondary_light2 hover:text-black"
      } `}
    >
      <FaMoon />
    </button>
  );
}
