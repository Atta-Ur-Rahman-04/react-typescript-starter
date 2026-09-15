import { ChaiCcard } from "./components/ChaiCard";
import Counter from "./components/Counter";
import type { Chai } from "./types";
import ChaiList from "./components/ChaiList";
import { OrderForm } from "./components/OrderForm";
import { Card } from "./components/Card";

const menu: Chai[] = [
  { id: 1, name: "Ginger", price: 50 },
  { id: 2, name: "lemon", price: 50 },
  { id: 3, name: "masala", price: 50 },
];

const App = () => {
  return (
    <div>
      <h1>Chai Aur Typescript</h1>
      <ChaiCcard name="headphone" price={5000} />
      <ChaiCcard name="iphone" price={100000} />
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai aur TS" footer={<button>Order Now</button>} />
      </div>
    </div>
  );
};

export default App;
