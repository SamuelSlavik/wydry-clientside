import React from "react";
import Header from "../../components/Header";


// Images
import about2 from "../../assets/images/about/about2.jpg"
import about3 from "../../assets/images/about/about3.jpg"
import about4 from "../../assets/images/about/about4.jpg"
import about5 from "../../assets/images/about/about5.jpg"
import about6 from "../../assets/images/about/about6.jpg"
import about7 from "../../assets/images/about/about7.jpg"


function About(): JSX.Element {
  return (
    <div className={"content content--about"}>
      <Header text={"Spoznajte Wydry"} />
      <div className={"about"}>
        <div
          className={"about__first"}
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="200"
        >
          <p>
            Občianske združenie <span className={"text--light-red text--bold"}>Čierne wydry z Trojmezí</span> je nezávislým občianskym združením fyzických a
            právnických osôb v súlade s ustanoveniami zákona o
            OZ č. 83/1990 Zb. SR.
          </p>
        </div>
        <div
          className={"about__second"}
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="600"
        >
          <p>
            Cieľom <span className={"text--light-red text--bold"}>OZ Čierne wydry z Trojmezí</span> je skvalitnenie života v
            obciach <span className={"text--light-red text--bold"}>Čierne</span> SK, <span className={"text--light-red text--bold"}>Hrčava</span> CZ a <span className={"text--light-red text--bold"}>Jaworzynka</span> PL,
            ktoré tvoria <span className={"text--light-red text--bold"}>SK-CZ-PL Trojstyk</span>, ako aj ostatných okolitých obcí.
            Združenie podporuje cezhraničnú spoluprácu a prispieva
            k záchrane hmotného a nehmotného
            kultúrneho a historického dedičstva Trojstyku.
          </p>
        </div>
        <div
          className={"about__third"}
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="1000"
        >
          <p>
            OZ sa venuje organizácií športových, kultúrnych akcií a
            starostlivosti o životné prostredie.
            Všetkých členov <span className={"text--light-red text--bold"}>OZ Čierne wydry z Trojmezí</span> spája
            aktívny prístup zdravému životnému štýl.
            Sú aktívny propagátori a realizátori otužovania.
          </p>
        </div>
      </div>
      <div className={"card__wrapper"}>
        <div
          className={"card"}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay=""
        >
          <img alt={"Picture of Wydry"} src={about3}/>
        </div>
        <div
          className={"card card--middle"}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="400"
        >
          <img alt={"Picture of Wydry"} src={about2}/>
        </div>
        <div
          className={"card"}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="800"
        >
          <img alt={"Picture of Wydry"} src={about4}/>
        </div>
      </div>
      <div className={"benefits__wrapper"}>
        <h2
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          Benefity otužovania
        </h2>
        <div className={"benefits"}>
          <div className={"benefits__left"}>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <p>Otužovanie zlepší funkciu kardiovaskulárny systém</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <p>Otužovanie cvičí pevnú vôľu</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <p>Otužovanie spája ľudí dobrej vôle celého sveta</p>
            </div>
          </div>
          <div className={"benefits__horizontal-line"}></div>
          <div className={"benefits__right"}>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <p>Otužovanie posilní imunitu celého tela</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <p>Otužovanie má priaznivý vplyv na celkovú pohodu a dobrú náladu</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <p>Este jeden text treba vymysliet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About