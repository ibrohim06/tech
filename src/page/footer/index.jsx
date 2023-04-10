import React from "react";
import s from "./style.module.scss";
import Image from "../../components/image/img";
import Text from "../../components/Text/text";
import Link from "../../components/Link/link";
import Button from "../../components/button/button";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_flex}>
        <div className={s.footer_logo}>
          <Image src={"/assets/footer-logo.svg"} />
        </div>
        <div className={s.footer_flinks}>
          <div className={s.footer_links}>
            <Text
              text={"Categories"}
              fsize={16}
              fontFamily={"Inter"}
              color={"#ABABFA"}
              uppercase={"uppercase"}
            />
            <Link
              text={"Case Studies"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
            <Link
              text={"Mobile Technology"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
            <Link
              text={"Data Insights"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
          </div>
          <div className={s.footer_links}>
            <Text
              text={"Template"}
              fsize={16}
              fontFamily={"Inter"}
              color={"#ABABFA"}
              uppercase={"uppercase"}
            />
            <Link
              text={"Style Guide"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
            <Link
              text={"License"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
            <Link
              text={"Change Log"}
              color={"#ABABFA"}
              fsize={14}
              fontFamily={"Inter"}
              textDecoration={"underline"}
            />
          </div>
        </div>
        <div className={s.footer_btns}>
          <Text
            text={"Quality tech news In your inbox. Every week."}
            fsize={29}
            fontFamily={"Inter"}
            color={"#FFFFFF"}
            align={"start"}
          />
          <div className={s.footer_btn}>
            <Button
              text={"Email address"}
              color={"#5C5CFF"}
              bg={"#1B1B4D"}
              border={"1px solid #8989F8"}
              br={4}
              uppercase={"unset"}
              fsize={20}
            />
            <Button
              text={"SUBSCRIBE"}
              color={"white"}
              bg={"#5C5CFF"}
              border={"1px solid #8989F8"}
              br={4}
              uppercase={"unset"}
              fsize={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
