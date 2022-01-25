import Image from "next/image";
import Link from "next/link";

function Shop({ shop }) {
  return (
    <div className="shop-container">
      <Link href={`/shops/${shop.id}`}>
        <a>
          <div className="shop">
            <Image
              className="shop-image"
              src={shop.image}
              alt="Shop Photo"
              width={"100%"}
              height={"120%"}
            />

            <div className="shop-name">{shop.name}</div>
            <div className="text">{shop.address}</div>
            <div className="text">{shop.phone}</div>
          </div>
        </a>
      </Link>
      <div className="shop-item-container">
        {shop.items.map((item, index) => {
          return (
            index < 4 && (
              <Link key={shop.id} href={`/modal?shopId=${shop.id}&id=${index}`}>
                <a>
                  <div className="shop-item" key={index}>
                    <Image
                      className={index === 3 ? "item-image-last" : ""}
                      src={item.image}
                      alt="Pizza"
                      height={"100%"}
                      width={"160%"}
                      objectFit="cover"
                    />
                    <div className="shop-item-name">{item.name}</div>
                    <div className="text">{item.price}</div>
                  </div>
                </a>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
