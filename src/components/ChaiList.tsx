import type { Chai } from "../types";
import { ChaiCcard } from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}
const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCcard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30}
        />
      ))}
    </div>
  );
};

export default ChaiList;
