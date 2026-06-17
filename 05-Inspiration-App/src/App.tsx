import "./App.css";
import Copyright from "./components/Copyright";
import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/InspirationGenerator";

function App() {
  return (
    <>
      <FancyText title text="Get Inspired today" />
      <InspirationGenerator>
        <Copyright year={2026} />
      </InspirationGenerator>
    </>
  );
}

export default App;
