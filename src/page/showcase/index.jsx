import React from "react";
import s from "./style.module.scss";
import Link from "../../components/Link/link";
import Image from "../../components/image/img";

export default function Showcase() {
  return (
    <div className={s.showcase} id="wd m">
      <div className={s.showcase_flex} id="w">
        <div className={s.showcase_left}>
          <Link
            text={"Mobile Technology"}
            color={"#5C5CFF"}
            fsize={14}
            fweight={400}
            fontFamily={"Inter"}
            uppercase={"uppercase"}
          />
          <Link
            text={
              "Technology in Sales: How Data is Powering Purchase Decisions"
            }
            color={"#413E52"}
            fsize={32}
            fweight={700}
            fontFamily={"Inter"}
          />
          <Link
            text={"Milford Smith"}
            color={"#413E52"}
            fsize={14}
            fweight={400}
            fontFamily={"Inter"}
            uppercase={"uppercase"}
          />
          <Link
            text={"February 12, 2021"}
            color={"#868297"}
            fsize={13}
            fweight={400}
            fontFamily={"Inter"}
            uppercase={"uppercase"}
          />
        </div>
        <div className={s.showcase_right}>
          <Image src={"/assets/shocase.svg"} />
        </div>
      </div>
    </div>
  );
}
