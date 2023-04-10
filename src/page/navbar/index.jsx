import React from "react";
import s from "./style.module.scss";
import Image from "../../components/image/img";
import Link from "../../components/Link/link";
import Button from "../../components/button/button";

export default function Navbar() {
  return (
    <div className={s.navbar} id="wd">
      <div className={s.navbar_left}>
        <div className={s.navbar_logo}>
          <Image src={"/assets/logo-text.png"} />
        </div>
        <div className={s.navbar_links}>
          <Link
            text={"Categories"}
            href={"#!"}
            fsize={14}
            fweight={400}
            color={"#413E52"}
            fontFamily={"Inter"}
            textDecoration={"none"}
          />
          <Image src={"/assets/arrow-down.svg"} />
          <Link
            text={"Authors"}
            href={"#!"}
            fsize={14}
            fweight={400}
            color={"#413E52"}
            fontFamily={"Inter"}
            textDecoration={"none"}
          />
          <Link
            text={"Template"}
            href={"#!"}
            fsize={14}
            fweight={400}
            color={"#413E52"}
            fontFamily={"Inter"}
            textDecoration={"none"}
          />
          <Image src={"/assets/arrow-down.svg"} />
        </div>
      </div>
      <div className={s.navbar_right}>
        <Button
          text={"Subscribe"}
          height={10}
          width={15}
          fsize={15}
          color={"white"}
          uppercase={"uppercase"}
          fontFamily={"Inter"}
          br={"4"}
          bg={"#5C5CFF"}
        />
      </div>
    </div>
  );
}
