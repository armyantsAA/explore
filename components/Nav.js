import Link from "next/link";
import { useRouter } from "next/router";
function Nav() {
  const navItem = [
    "Featured",
    "Food",
    "Drink",
    "Clothes",
    "Accessories",
    "Groceries",
  ];

  const router = useRouter();

  return (
    <div className="nav">
      <p
        className="big-font"
        onClick={() => {
          router.push("/shops");
        }}
      >
        Explore
      </p>

      {navItem.map((item, index) => (
        <div className="nav-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Nav;
