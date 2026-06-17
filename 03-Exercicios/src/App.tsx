import "./App.css";
import Button from "./exercicios/01-Dark_Mode/Button";
import DarkModeButton from "./exercicios/01-Dark_Mode/DarkModeButton";
import Post from "./exercicios/01-Dark_Mode/Post";
import SwitchThemeButton from "./exercicios/01-Dark_Mode/SwitchThemeButton";

function App() {
  const handleHoursClick = () => {
    const currentDate = new Date();
    alert(`Agora são: ${currentDate.getHours()}:${currentDate.getMinutes()}`);
  };

  return (
    <>
      {/* <DarkModeButton /> */}
      <SwitchThemeButton theme="light">Light</SwitchThemeButton>
      <SwitchThemeButton theme="dark">Dark</SwitchThemeButton>
      <Button onClick={handleHoursClick}>Que horas são?</Button>
      <Post
        imageSource="../public/assets/1.png"
        alternative="Imagem de gradiente"
        user="gradients01"
        text="Beautiful gradient image"
        onLikePost={() => alert("Liked")}
      />
    </>
  );
}

export default App;
