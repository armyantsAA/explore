import Image from "next/image";
function Item({ item }) {
  return (
    <div className="shop-item">
      <Image
        src={item.image}
        alt="Pizza"
        height={"100%"}
        width={"160%"}
        objectFit="cover"
      />
      <div className="shop-item-name">{item.name}</div>
      <div className="text">{item.price}</div>
    </div>
  );
}

export default Item;
