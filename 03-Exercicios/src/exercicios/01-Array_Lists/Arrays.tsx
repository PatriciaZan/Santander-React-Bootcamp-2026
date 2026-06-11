const coffeesArray = ["item-1", "item-2", "item-3", "item-4", "item-5"];

interface Coffes {
  id: number;
  name: string;
  description: string;
  type: number;
}

const coffesObj: Coffes[] = [
  { id: 1, name: "item-1", description: "description of item-1", type: 1 },
  { id: 2, name: "item-2", description: "description of item-2", type: 2 },
  { id: 3, name: "item-3", description: "description of item-3", type: 3 },
  { id: 4, name: "item-4", description: "description of item-4", type: 4 },
  { id: 5, name: "item-5", description: "description of item-5", type: 5 },
];

const List = () => {
  const listItems = coffeesArray.map((coffe) => <li>{coffe}</li>);

  const listObj = coffesObj.map((coffe) => (
    <li key={coffe.id}>{coffe.name}</li>
  ));
  const topSale = coffesObj.filter((coffe) => coffe.name === "item-3");
  console.log(topSale);

  //   return <ul>{listItems}</ul>;
  return (
    <>
      {topSale.map((coffe) => (
        <p>O mais vendido: {coffe.name}</p>
      ))}
      <ul>{listObj}</ul>;
    </>
  );
};

export default function Arrays() {
  return (
    <>
      <h1>List</h1>
      <List />
    </>
  );
}
