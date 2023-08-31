import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs"
import { AiFillApple } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import x from "./style.module.css";
import { BsBag } from "react-icons/bs";
import { navLinks, navData } from "./../../mocks/index";

const Navbar = () => {
  const [linkId, setLinkId] = useState(false);
  return (
    <div className={x.navbar}>
      <nav className={x.nav__wrp}>
        <AiFillApple className={x.apple__icon} />
        {navLinks.map(({ id, title }) => (
          <div key={id} onMouseOver={() => setLinkId(id)} className={x.nav__link}>
            <p className={x.title__text}>{title}</p>
            <div className="dropdown">
             {navData.map(({  }) => (
              <p key={id}>{}</p>
             ))}
            </div>
          </div>
        ))}
        <BiSearchAlt2 className={x.search__icon} />
        <BsBag  className={x.bag__icon}/>
      </nav>
      <div className={x.nav_bottom}>
        <p>
          We’re donating $10 to the National Park Foundation for every purchase
          made at Apple using Apple Pay through 8/27.<sup>1</sup>
          <Link className={x.shop} to="#">
            <span> Shop now  <BsChevronRight/></span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
