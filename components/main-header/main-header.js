import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackGround from "./main-header-background";

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackGround />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="a plate with food" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
  );
  
}
