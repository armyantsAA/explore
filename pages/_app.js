import Nav from "../components/Nav";
import TopNav from "../components/TopNav";
import "../styles/globals.css";
import "../styles/modal.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Nav />
      <TopNav />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
