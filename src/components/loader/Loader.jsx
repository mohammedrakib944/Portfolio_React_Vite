import "./loader.css";
import LoaderImg from "../../assets/img/Loader.gif";

export default function Loader() {
  window.onload = () => {
    setTimeout(() => {
      document.querySelector(".Loader").style.display = "none";
    }, 2000);
  };
  return (
    <div className="Loader">
      <img src={LoaderImg} />
    </div>
  );
}
