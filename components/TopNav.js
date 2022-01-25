import Link from "next/link";

function TopNav() {
  return (
    <div className="top-nav">
      <Link href="/shops">
        <a>
          <span className="top-nav-item box">Shops</span>
        </a>
      </Link>
      <Link href="/items">
        <a>
          <span className="top-nav-item">Items</span>
        </a>
      </Link>
      <Link href="/search">
        <a>
          <span className="search-icon">Icon</span>
        </a>
      </Link>
    </div>
  );
}

export default TopNav;
