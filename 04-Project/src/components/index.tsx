import { useState } from "react";

interface Props {
  name: string;
  check?: boolean;
  count?: number;
}

const Item: React.FC<Props> = ({ name, check, count }) => {
  //   if (check) {
  //     return (
  //       <div className="item">
  //         ✅ <del>{name}</del>
  //       </div>
  //     );
  //   }

  //   return <div className="item">⬜ {name}</div>;
  const [isChecked, setIsChecked] = useState(check);

  let itemName: React.ReactNode = name;

  if (isChecked) {
    itemName = <del>{name}</del>;
  }

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="item" onClick={handleClick}>
      {isChecked ? "✅" : "⬜"}
      {!!count && ` (${count})`}
      {/* {check ? <del>{name}</del> : name} */}
      {itemName}
    </div>
  );
};

export default Item;
