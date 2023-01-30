import React from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";

// Images
import map from "../assets/images/map.png"

function Contact(): JSX.Element {
  return (
    <div className={"content content--contact"}>
      <Header text={"Leave us a line or two"}/>
      <div className={"contact-wrapper"}>
        <div className={"form"}>
          <input
            id={"formName"}
            className={"input"}
            type={"text"}
            name={"name"}
            placeholder={"Meno"}
            required={true}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"100"}
          />
          <input
            id={"formEmail"}
            className={"input"}
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            required={true}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"600"}
          />
          <textarea
            id={"formMessage"}
            className={"input"}
            name={"name"}
            placeholder={"Vaša správa"}
            required={true}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"1100"}
          />
          <input
            id={"captcha"}
            className={"input"}
            type={"text"}
            name={"captcha"}
            //value={informationCaptcha}
            placeholder={"27 + 15 = "}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"1600"}
            //onChange={(event) => (setInformationCaptcha(event.target.value))}
          />
          <input
            id={"formSubmit"}
            className={"submit"}
            name={"submit"}
            type={"submit"}
            value={"Odoslať"}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"2100"}
          />
        </div>
        <div className={"contact-horizontal-line"}></div>
        <div className={"contact-info"}>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"100"}
          >
            <p>
              <span className={"icon-text"}>
                <i className="fa fa-at" aria-hidden="true"></i>
                <p>riaditel@rrakysuce.sk</p>
              </span>
            </p>
            <p>
              <span className={"icon-text"}>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p>+421 000 000 000</p>
            </span>
            </p>
          </div>
          <br/>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"600"}
          >
            <p>
              <span className={"icon-text"}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <a target={"_blank"} href={"https://www.facebook.com/%C4%8Cierne-wydry-z-Trojmez%C3%AD-101302561357860"}>Facebook</a>
            </span>
            </p>
            <p>
              <span className={"icon-text"}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <a target={"_blank"} href={"https://www.instagram.com/explore/tags/ciernewydryztrojmezi/"}>#ciernewydryztrojmezi</a>
            </span>
            </p>
          </div>
          <br/>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"1100"}
          >
            <p>
              <span className={"icon-text"}>
                <p className={"text--dark-red"}>Ičo:</p>
                <p>530 30311</p>
              </span>
            </p>
            <p>
              <span className={"icon-text"}>
              <p className={"text--dark-red"}>Iban:</p>
              <p>SK08 0900 0000 0051 7707 9300</p>
            </span>
            </p>
          </div>
          <br/>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="0"
            data-aos-delay={"1600"}
          >
            <p>Čierne 556</p>
            <p>023 12 Čierne</p>
            <p>Slovensko</p>
          </div>
        </div>
      </div>
      <div className={"map"}>
        <Header text={"Nájdete nás vo vodách regiónov:"}/>
        <img data-aos={"fade-up"} data-aos-offset={"300"} alt={"map"} src={map}/>
      </div>
    </div>
  )
}

export default Contact