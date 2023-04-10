import React from "react";
import s from "./style.module.scss";
import Card from "../../components/card";
import Title from "../../components/title/title";
import Text from "../../components/Text/text";

export default function Case() {
  return (
    <div className={s.case} id="w">
      <div className={s.case_title}>
        <Title text={"Case Studies"} />
      </div>
      <div className={s.case_flex}>
        <div className={s.case_card}>
          <Card
            src={"/assets/case.png"}
            text1={"Adell Jacobi"}
            text2={"Drive Efficient Growth with Integrated Data"}
            border={"1px solid #EBEAF2"}
            color1={"#868297"}
            color2={"#413E52"}
            fsize1={13}
            fsize2={23}
            width={"100%"}
            align={"start"}
          />
        </div>
        <div className={s.case_info}>
          <div className={s.case_text}>
            <Text
              text={"Milford Smith"}
              fsize={13}
              color={"#868297"}
              align={"start"}
            />

            <Text
              text={"The Benefits of Data-Driven Storytelling with TechCues"}
              fsize={20}
              color={"#413E52"}
              align={"start"}
            />
          </div>
          <div className={s.case_text}>
            <Text
              text={"Adell Jacobi"}
              fsize={13}
              color={"#868297"}
              align={"start"}
            />

            <Text
              text={
                "Sales Technologies: The Most Important Digital Transformation Investment This Decade"
              }
              fsize={20}
              color={"#413E52"}
              align={"start"}
            />
          </div>
          <div className={s.case_text}>
            <Text
              text={"Lon Baumbach"}
              fsize={13}
              color={"#868297"}
              align={"start"}
            />

            <Text
              text={"Outreach CRO Hosts Event for B2B SaaS Community"}
              fsize={20}
              color={"#413E52"}
              align={"start"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
