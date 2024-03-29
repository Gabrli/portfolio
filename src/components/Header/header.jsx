import ButtonGitHub from "./buttonGitHub";

import ButtonTheme from "./buttonTheme";
import LangList from "./langList";

export default function Header(props) {
  const { setTheme, theme } = props;

  return (
    <header
      className={`flex justify-between pl-2 pr-2 items-center h-custom_h_1 z-10  ${
        theme === "dark"
          ? "bg-secondary1 border-secondary2"
          : "bg-secondary_light1 border-secondary_light2"
      } border-b fixed top-0 left--0  w-full `}
    >
      <ButtonGitHub />
      <div className="flex justify-center gap-2 items-center pr-2">
        <ButtonTheme setTheme={setTheme} theme={theme} />
        <LangList />
      </div>
    </header>
  );
}
