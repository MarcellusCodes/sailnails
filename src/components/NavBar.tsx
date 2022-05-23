import React from "react";
import { Branding, MenuButton, Container } from "./index";
import Link from "next/link";
import { NavItems } from "../constants/index";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  return (
    <nav className="px-6 md:px-0 w-full bg-primary py-2">
      <Container Styles="flex flex-row items-center justify-between">
        <Link href="/" passHref>
          <a className="cursor-pointer ">
            <Branding />
          </a>
        </Link>
        <ul className="hidden md:flex flex-row items-center space-x-6">
          {NavItems.map((Items) => (
            <Link key={Items.Id} href={Items.Href}>
              <motion.li
                transition={{ type: "spring" }}
                className="text-xl shadow-initial hover:shadow-animate active:shadow-tap active:scale-95 duration-300 px-2 py-2 border-2 border-typography font-primary cursor-pointer"
              >
                {Items.Name}
              </motion.li>
            </Link>
          ))}
        </ul>
        <MenuButton />
      </Container>
    </nav>
  );
};

export default NavBar;
