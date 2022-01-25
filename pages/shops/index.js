import Head from "next/head";
import Shop from "../../components/shop";
import shops from "../../utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shops | Explore</title>
      </Head>
      {shops.map((shop) => {
        return <Shop key={shop.id} shop={shop} />;
      })}
    </>
  );
}
