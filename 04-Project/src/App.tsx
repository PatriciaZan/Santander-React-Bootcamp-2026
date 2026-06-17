import "./App.css";
import Item from "./components";

const itemsList = [
  { id: "meias", name: "Meias", count: 5, check: false },
  { id: 'escova-de-cabelo"', name: 'Escova de cabelo"', check: false },
  { id: "blusa", name: "Blusa", check: true },
  { id: "travesseiro", name: "Travesseiro", check: true },
];

export default function App() {
  return (
    <div className="list">
      <h1>Itens para colocar na mala</h1>
      {itemsList.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          check={item.check}
          count={item.count}
        />
      ))}
      {/* <Item name="Meias" />
      <Item name="Escova de cabelo" check />
      <Item name="Blusa" />
      <Item name="Travesseiro" check={true} /> */}
    </div>
  );
}
