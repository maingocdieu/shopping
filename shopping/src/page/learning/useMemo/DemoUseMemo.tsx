import { useMemo, useState } from "react";

type Product = {
  name: string;
  price: number;
};
export const DemoUseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const handelSubmit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  const total = useMemo(() => {
    return products.reduce((result, product) => result + product.price, 0);
  }, [products]);
  return (
    <>
      <div
        style={{
          padding: "10px 32px",
        }}
      >
        <input
          type="text"
          value={name}
          placeholder="enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={price}
          placeholder="enter price..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handelSubmit}>Add</button>
        <br />
        Total: {total}
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product?.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
