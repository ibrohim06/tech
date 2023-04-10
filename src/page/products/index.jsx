import React from "react";
import s from "./style.module.scss";
import Text from "../../components/Text/text";
import Button from "../../components/button/button";
import Image from "../../components/image/img";
import Card from "../../components/card";

export default function Product() {
  return (
    <div className={s.product} id="w">
      <div className={s.product_title}>
        <div className={s.product_name}>
          <Text
            text={"Recent Articles"}
            color={"#413E52"}
            uppercase={"uppercase"}
            fsize={14}
            fontFamily={"Inter"}
            fweight={400}
          />
        </div>
        <div className={s.product_flex}>
          <Button
            text={"View All"}
            color={"#413E52"}
            fsize={14}
            fweight={400}
            bg={"transparent"}
            border={"none"}
            uppercase={"unset"}
            width={"10"}
            height={10}
          />
          <Image src={"/assets/arrow-right.svg"} />
        </div>
      </div>
      <div className={s.product_card}>
        <Card
          src={"/assets/product-1.png"}
          text1={"Mobile Technology"}
          text2={"1 Adell Jacobi"}
          text3={"Best Technology Podcast Episodes of 2020"}
          color1={"#5C5CFF"}
          color2={"#868297"}
          color3={"#413E52"}
          uppercase1={"uppercase"}
          fsize1={14}
          fsize2={13}
          fsize3={19}
          fweight={400}
          width={"100%"}
          border
          align={"start"}
          twidth={90}
        />
        <Card
          src={"/assets/product-2.png"}
          text1={"Case Studies"}
          text2={"Adell Jacobi"}
          text3={"Drive Efficient Growth with Integrated Data"}
          color1={"#5C5CFF"}
          color2={"#868297"}
          color3={"#413E52"}
          fsize1={14}
          fsize2={13}
          fsize3={19}
          fweight={400}
          width={"100%"}
          border
          twidth={90}
          align={"start"}
        />
        <Card
          src={"/assets/product-3.png"}
          text1={"Case Studies"}
          text2={"Milford Smith"}
          text3={"The Benefits of Data-Driven Storytelling with TechCues"}
          color1={"#5C5CFF"}
          color2={"#868297"}
          color3={"#413E52"}
          fsize1={14}
          fsize2={13}
          fsize3={19}
          fweight={400}
          width={"100%"}
          align={"start"}
          border
        />
      </div>
      <div className={s.product_info} id="m">
        <div className={s.product_jj}>
          <Card
            text1={"Free ebook"}
            fsize1={13}
            color1={"#5C5CFF"}
            uppercase={"uppercase"}
            nn
            text2={"5 Things You Can Do Right Now to Speed up Your Workflow"}
            fsize2={31}
            color2={"#FFFFFF"}
            bg={"#111131"}
            align={"start"}
            fontFamily={"Inter"}
          />
        </div>
        <div className={s.product_btn}>
          <Button
            text={"Email address"}
            color={"#5C5CFF"}
            bg={"#1B1B4D"}
            border={"1px solid #8989F8;"}
            br={4}
            maxwidth={"100%"}
          />
          <Button
            maxwidth={"100%"}
            text={"SUBSCRIBE"}
            color={"white"}
            bg={"#5C5CFF"}
            border={"1px solid #8989F8;"}
            br={4}
          />
        </div>
      </div>
    </div>
  );
}
