import React from "react"
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios"
import {Link} from "react-router-dom";

// Interfaces
import {Article} from "../types/interfaces"

function Articles():JSX.Element {
  const [articlesData, setArticlesData] = useState<Article[]>([])

  useEffect(() => {
    axios
      .get<Article[]>("http://localhost:8000/api/articles/")
      .then((response: AxiosResponse) => {
        setArticlesData(response.data)
      })
  }, [])

  return (
    <>
      {
        articlesData[0] ? (
            <div className={"article__wrapper article__first"}>
              <div
                className={"article"}
                id={articlesData[0].id.toString()}
                key={articlesData[0].id}
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-offset="100"
              >
                <div className={"article__image"}>
                  {
                    articlesData[0].thumbnail_path ?
                      <Link to={"/post/" + articlesData[0].id }>
                        <img alt={"image"} src={"http://localhost:8000" + articlesData[0].thumbnail_path}/>
                      </Link> :
                      <></>
                  }
                </div>
                <div className={"article__content"}>
                  <Link className={""} to={"/post/" + articlesData[0].id}>
                    <h2>{articlesData[0].headline}</h2>
                  </Link>
                  <div className={"article__details"}>
                    {
                      articlesData[0].author ?
                        <p>Autor: {articlesData[0].author}</p> :
                        <></>
                    }
                    {
                      articlesData[0].created ?
                        <p>Vytvorené dňa: {articlesData[0].created?.slice(0, 10)}</p> :
                        <></>
                    }
                  </div>
                  <div>
                    {
                      articlesData[0].short ?
                        <p>{articlesData[0].short}</p> :
                        <></>
                    }
                  </div>
                </div>
              </div>
            </div>) :
          <></>
      }
      <div className={"pick-up-line"}>
        <p
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-offset="100"
        >
          Otužilci prežijú, ostatní musia zabrať :)
        </p>
      </div>
      <div className={"article__wrapper"}>
        {
          articlesData.slice(1).map(({id, headline, author, created, short, thumbnail_path}) => (
            <div
              className={"article"}
              id={id.toString()}
              key={id}
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-offset="100"
            >
              <>
                {console.log(thumbnail_path)}
              </>
              <div className={"article__image"}>
                {
                  thumbnail_path ?
                    <Link to={`/post/${id}`}><img alt={"image"}
                                                      src={"http://localhost:8000" + thumbnail_path}/></Link> :
                    <></>
                }
              </div>
              <div className={"article__content"}>
                <Link className={""} to={`/post/${id}`}>
                  <h2>{headline}</h2>
                </Link>
                <div className={"article__details"}>
                  {
                    author ?
                      <p>Autor: {author}</p> :
                      <></>
                  }
                  {
                    created ?
                      <p>Vytvorené dňa: {created?.slice(0, 10)}</p> :
                      <></>
                  }
                </div>
                <div>
                  {
                    short ?
                      <p>{short}</p> :
                      <></>
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

// @ts-ignore
export default Articles