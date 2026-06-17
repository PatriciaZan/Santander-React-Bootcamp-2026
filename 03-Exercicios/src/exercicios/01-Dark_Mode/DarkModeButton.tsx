export default function DarkModeButton() {
  const handleClick = () => {
    alert("Dark mode selected1");
  };

  return (
    <button className="button" onClick={handleClick}>
      Dark{" "}
    </button>
  );
}
