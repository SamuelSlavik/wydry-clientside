import React from "react";
import {Link} from "react-router-dom";
import axios, {AxiosResponse} from "axios"
import {useEffect, useState} from "react";

// Interfaces
import {Information} from "../../types/interfaces";

function InformationContent(): JSX.Element {
  const [informationData, setInformationData] = useState<Information[]>([])

  useEffect(() => {
    axios
      .get<Information[]>("http://localhost:8000/api/information/")
      .then((response: AxiosResponse) => {
        setInformationData(response.data)
      })
  }, [])

  return (
    <div className={"information__wrapper"} >
      {
        informationData.map(({id, headline, body, created, due_date, author}) => (
          <div
            className={"information"}
            key={id}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="100"
          >
            <h2>{headline}</h2>
            {
              due_date ?
                <p className={"information__due"}>Platné do: {due_date?.slice(0, 10)}</p> :
                <></>
            }
            <div className={"information__detail"}>
              {
                created ?
                  <p>Vytvorené dňa: {created?.slice(0, 10)}</p> :
                  <></>
              }
              {
                author ?
                  <p>Autor: {author}</p> :
                  <></>
              }
            </div>
            <div className={"information__content"}>
              {
                <>
                  {
                    body ?
                      body.map((element) => (
                        <p>{element.text}</p>
                      )) : <></>
                  }
                </>
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default InformationContent