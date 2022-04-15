/* eslint-disable @typescript-eslint/no-empty-function */
import MoonIcon from "@heroicons/react/outline/MoonIcon";
import SunIcon from "@heroicons/react/outline/SunIcon";
import React from "react";
import { useState } from "react";
import { ThemeContext } from "~/context/theme";

interface IDarkModeToggle {
  colour?: string;
  on?: boolean;
  onToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  tabIndex?: number;
}

const DarkModeToggle: React.FC<IDarkModeToggle> = ({
  on = false,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(on);

  function toggle() {
    setIsOn(!isOn);
    onToggle?.(!isOn);
  }

  function handleClick() {
    toggle();
  }

  const handleKeyDown = (props: { key: string }) => {
    if (props.key === "Enter") toggle();
  };

  return (
    <div
      role="checkbox"
      aria-checked={isOn ? "true" : "false"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={`cursor-pointer w-16 h-9 rounded-full relative px-1.5 flex items-center border border-gray-400 ${
        isOn ? "bg-blue-900" : "bg-gray-50 justify-end"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
          isOn ? "translate-x-8 bg-white" : "translate-x-0 bg-gray-700"
        }`}
      />
      {isOn ? (
        <MoonIcon className="h-5 w-5 text-gray-50 " />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      )}
    </div>
  );
};

const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [toggle, setToggle] = useState(theme === "dark");

  React.useEffect(() => {
    console.log("toggle", toggle);
    setTheme(toggle ? "dark" : "white");
  }, [setTheme, toggle]);

  return (
    <header className="w-full fixed top-0 left-0">
      <div className="relative flex h-16 flex-shrink-0 bg-secondary shadow-sm dark:bg-dark-secondary">
        <div className="flex flex-1 justify-between px-4 sm:px-6">
          <div />
          <div className="mt-3">
            <DarkModeToggle on={theme === "dark"} onToggle={setToggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
