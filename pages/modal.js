import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import shops from "../utils/data";

function Modal({ shopId, shopName, item }) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <>
      <div onClick={() => closeModal()} className="background">
        <div className="modal-container">
          <div className="modal-image-container">
            {item.images.map((image, index) => {
              return (
                <div className="modal-image" key={index}>
                  <Image src={image} alt="Image" width={150} height={150} />
                </div>
              );
            })}
          </div>
          <div className="modal-main">
            <div className="modal-left">
              <h2 className="modal-name" onClick={closeModal}>
                {item.name}
              </h2>
              <p className="modal-price">${item.price}</p>
            </div>
            <p className="modal-desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis
            </p>
          </div>

          <Link className="modal-from-shop" href={`/shops/${shopId}`}>
            <a>
              <div>From - {shopName}</div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Modal;

export async function getServerSideProps(context) {
  const shopId = context.query.shopId;
  const id = context.query.id;
  const shop = shops.find((shop) => shop.id === parseInt(shopId));
  const item = shop.items[id];
  return {
    props: {
      shopId: shop.id,
      shopName: shop.name,
      item,
    },
  };
}
