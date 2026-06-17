import type { PropsWithChildren } from "react";
import Button from "./Button";

interface Props {
  theme: "dark" | "light";
}

export default function SwitchThemeButton({
  theme,
  children,
}: PropsWithChildren<Props>) {
  const handleClick = () => {
    const themeToRemove = theme === "light" ? "dark" : "light";

    document.body.classList.remove(`${themeToRemove}`);
    document.body.classList.add(`${theme}-theme`);
  };
  return <Button onClick={handleClick}>{children}</Button>;
}
