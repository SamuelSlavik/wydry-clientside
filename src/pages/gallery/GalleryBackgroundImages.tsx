import React from "react";
import {useEffect, useState} from "react";

// Interfaces
import {GalleryInterface, ImagesInterface, GalleryBackgroundImagesProps} from "../../types/interfaces";
import axios, {AxiosResponse} from "axios";

function GalleryBackgroundImages({eventName}: GalleryBackgroundImagesProps): JSX.Element {
  const [images, setImages] = useState<ImagesInterface[]>([])

  useEffect(() => {
    axios
      .get<ImagesInterface>(`http://localhost:8000/api/images/?=${eventName}`)
      .then((response: AxiosResponse) => {
          setImages(response.data)
        }
      )
  }, [])

  return (
    <div className={"event__background"}>
      {
        images.slice(0,4).map(({id, name, src, alt, created, description, event}) => (
          <div key={id} className={"event__image"} >
            <img alt={alt} src={"http://localhost:8000/" + src} />
          </div>
        ))
      }

    </div>
  )
}

export default GalleryBackgroundImages