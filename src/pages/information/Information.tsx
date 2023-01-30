import React, {useState} from "react";
import Header from "../../components/Header";
import InformationContent from "./InformationContent";
import set = Reflect.set;

function Information(): JSX.Element {
  const [password, setPassword] = useState<string>("")
  const [informationCaptcha, setInformationCaptcha] = useState<string>("")
  const [approved, setApproved] = useState<boolean>(true)
  const [approvedCaptcha, setApprovedCaptcha] = useState<boolean>(true)
  {console.log(password)}

  return (
    <div className={"content"}>
      <Header text={"Ste vo vodách prístupných len členom klubu"} />
      {
        localStorage.approved ?
          <form
            className={"information-form"}
            autoComplete="new-password"
          >

            <input
              id={"informationPassword"}
              className={"input"}
              type={"password"}
              name={"information-password"}
              value={password}
              autoComplete={"new-password"}
              placeholder={"Password"}
              onChange={(event) => (setPassword(event.target.value))}
              data-aos={"fade-left"}
              data-aos-delay={"100"}
              data-aso-offset={"0"}
            />
            <input
              id={"informationCaptcha"}
              className={"input"}
              type={"text"}
              name={"information-captcha"}
              value={informationCaptcha}
              placeholder={"27 + 15 = "}
              onChange={(event) => (setInformationCaptcha(event.target.value))}
              data-aos={"fade-right"}
              data-aos-delay={"500"}
              data-aso-offset={"0"}
            />
            <div className={"submit-wrapper"}>
              {
                !approvedCaptcha ?
                  <p id={"informationMathErrorMessage"}>Nevieš Matiku ???</p> :
                  <></>
              }
              {&:hover {
                border-color: $red3;
              }
                &:focus {
                border-color: $red3;
              }
                &:user-invalid {
                background-color: $red4;
              }
                !approved ?
                  <p id={"informationPasswordErrorMessage"}>Nesprávne heslo!</p> :
                  <></>
              }
              <input
                id={"informationSubmit"}
                className={"submit"}
                type={"submit"}
                name={"informationSubmit"}
                value={"Prihlásiť"}
                onClick={(event) => {
                  event.preventDefault()
                  if (informationCaptcha === "42" && password === "wydry") {
                    localStorage.setItem("approved", "true")
                    setApproved(true)
                    setApprovedCaptcha(true)
                  }
                  if (informationCaptcha != "42") {
                    setApprovedCaptcha(false)
                  } else {
                    setApprovedCaptcha(true)
                  }
                  if (password != "wydry") {
                    setApproved(false)
                  } else {
                    setApproved(true)
                  }
                }}
                data-aos={"fade-up"}
                data-aos-delay={"900"}
                data-aso-offset={"0"}
              />
            </div>
          </form> :
          <></>
      }
      {
        localStorage.approved ?
          <InformationContent /> :
          <></>
      }
    </div>
  )
}

export default Information