import "bootstrap/dist/css/bootstrap.css";
import Logo from "./logoBiko.png";

function Menu() {
  return (
    <div>
      <img src={Logo} className="mx-auto" alt="..." id="logo" />

      <h1 className="text-center" id="header">
        Busca Bikonianos
      </h1>

      <p className="text-center" id="redParagraph">
        (lorem ipsum dolor set
      </p>
      <p className="text-center" id="normalParagraph">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        pretium tellus.{" "}
      </p>
    </div>
  );
}

export default Menu;
