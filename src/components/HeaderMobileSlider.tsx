//  =============== Import Section ===============
import { ReactElement } from "react";
import HeaderSearchBar from "./HeaderSearchBar";

function Header(): ReactElement {
  return (
    <nav>
      <section>
        <HeaderSearchBar />
      </section>
    </nav>
  );
}

export default Header;
