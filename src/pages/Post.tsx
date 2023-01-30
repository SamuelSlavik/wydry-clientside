import React from "react"
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios, {AxiosResponse} from "axios";

// Interfaces
import {Article} from "../types/interfaces";

function Post() {
  const { id } = useParams()

  const [article, setArticle] = useState<Article>()

  useEffect(() => {
    axios
      .get<Article[]>(`http://localhost:8000/api/articles/${id?.toString()}/`)
      .then((response: AxiosResponse) => {
        setArticle(response.data)
      })
  }, [])

  return (
    <div className={"content"}>
      <div className={"post"}>
        <h2 data-aos="zoom-in" data-aos-offset="100">{article?.headline}</h2>
        <div className={"post__image"}>
          {
            article?.thumbnail_path ?
              <img
                alt={"image"}
                src={"http://localhost:8000" + article?.thumbnail_path}
                data-aos="zoom-in"
                data-aos-offset="100"
              /> :
              <></>
          }
        </div>
        <div
          className={"post__content"}
          data-aos="fade-right"
          data-aos-offset="100"
        >
          {
            <>
              {
              article?.body ?
                article.body.map((element) => (
                  <p>{element.text}</p>
                )) : <></>
              }
            </>
          }
        </div>
        <div
          className={"post__details"}
          data-aos="zoom-in"
          data-aos-offset="200"
        >
          {
            article?.author ?
              <p>Autor: {article.author}</p> :
              <></>
          }
          {
            article?.created ?
              <p>Vytvorené dňa: {article.created?.slice(0, 10)}</p> :
              <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Post