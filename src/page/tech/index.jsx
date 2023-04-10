import React from "react";
import s from "./style.module.scss";
import Title from "../../components/title/title";
import Text from "../../components/Text/text";
import Image from "../../components/image/img";

export default function Tech() {
  return (
    <div className={s.tech} id="w">
      <div className={s.tech_m}>
        <div className={s.tech_card}>
          <Title text={"Mobile Technology"} />
          <div className={s.tech_info}>
            <Text
              text={"Milford Smith"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={
                "Technology in Sales: How Data is Powering Purchase Decisions"
              }
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
          <div className={s.tech_info}>
            <Text
              text={"Adell Jacobi"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={"Best Technology Podcast Episodes of 2020"}
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
          <div className={s.tech_info}>
            <Text
              text={"Lon Baumbach"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={"Integrate Big Data to Drive Informed, Agile Solutions"}
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
        </div>
        <div className={s.tech_img}>
          <Image src={"/assets/tech.svg"} width={"100%"} />
        </div>
        <div className={s.tech_card}>
          <Title text={"Data Insights"} />
          <div className={s.tech_info}>
            <Text
              text={"Milford Smith"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={
                "Technology in Sales: How Data is Powering Purchase Decisions"
              }
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
          <div className={s.tech_info}>
            <Text
              text={"Adell Jacobi"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={"Best Technology Podcast Episodes of 2020"}
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
          <div className={s.tech_info}>
            <Text
              text={"Lon Baumbach"}
              color={"#868296"}
              fsize={12}
              fweight={400}
              fontFamily={"Inter"}
            />
            <Text
              text={"Integrate Big Data to Drive Informed, Agile Solutions"}
              fsize={20}
              color={"#413E52"}
              fweight={400}
              fontFamily={"Inter"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
