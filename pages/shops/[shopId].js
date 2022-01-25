import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Item from "../../components/Item";
import shops from "../../utils/data";

function Detail({ shop }) {
  return (
    <>
      <Head>
        <title>{shop.name} | Explore</title>
      </Head>
      <div className="background-bar">
        <div className="image-container">
          <Image src={shop.image} alt="Shop Photo" width={200} height={180} />
        </div>
        <h1>{shop.name}</h1>
      </div>
      <div className="text-container">
        <p className="text">{shop.address}</p>
        <p className="text">{shop.phone}</p>
      </div>
      <div style={{ height: "20px" }} />
      <div className="item-container">
        {shop.items.map((item, index) => {
          return (
            <Link
              key={item.index}
              href={`/modal?shopId=${shop.id}&id=${index}`}
            >
              <a>
                <Item item={item} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Detail;

export async function getStaticPaths() {
  return {
    paths: [{ params: { shopId: "1" } }, { params: { shopId: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { shopId } = context.params;
  const shop = shops.find((shop) => shop.id === parseInt(shopId));
  return {
    props: {
      shop,
    },
  };
}
