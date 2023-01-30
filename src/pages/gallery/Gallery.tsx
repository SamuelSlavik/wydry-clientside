import React from "react";
import Header from "../../components/Header";
import {useEffect, useState} from "react";

// Interfaces
import {GalleryInterface, ImagesInterface} from "../../types/interfaces";
import axios, {AxiosResponse} from "axios";
import GalleryBackgroundImages from "./GalleryBackgroundImages";

function Gallery(): JSX.Element {
  const [galleryData, setGalleryData] = useState<GalleryInterface[]>([]);
  const [images, setImages] = useState<ImagesInterface[]>([])

  useEffect(() => {
    axios
      .get<GalleryInterface>(`http://localhost:8000/api/events/`)
      .then((response: AxiosResponse) => {
        setGalleryData(response.data)
      })
  },[])

  // @ts-ignore
  return (
    <div className={"content content--gallery"}>
      <Header text={"Aj tu sme plávali..."} />
      {
        galleryData.map(({id, name, body, created, date_of, place, in_calendar}) => (
          <div className={"event__wrapper"} key={id}>
            <div className={"event"}>
              <h1><a href={""}>{name}</a></h1>
              <GalleryBackgroundImages eventName={name}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Gallery