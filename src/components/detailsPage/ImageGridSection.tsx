"use client"

import React, { useState, useEffect, useRef } from "react"
import imageNotFound from "@/assets/no-records.png"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { imageGridSource } from "./imageGrid.config"

const ImageGridSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([])
  const [imageErrors, setImageErrors] = useState<boolean[]>([])
  const sliderRef = useRef<Slider | null>(null)


  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
    handleImageLoad(index)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          padding: "10px",
          listStyle: "none",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "white",
          display: "inline-block",
          margin: "0 4px",
        }}
      />
    ),
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sliderRef.current?.slickPause()
      } else {
        sliderRef.current?.slickPlay()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const renderImageNotFounds = () => (
    <div className="flex items-center justify-center w-full h-screen bg-grayish">
      <Image
        src={imageNotFound}
        alt={`image-not-found`}
        layout="intrinsic"
        width={500}
        height={500}
        className="sm:rounded-md lg:rounded-xl"
      />
    </div>
  )

  const renderImage = (index: number) => (
    <div className="relative w-full h-full sm:rounded-md lg:rounded-xl overflow-hidden bg-gray-300 border border-slate-100 flex items-center justify-center">
          <Image
            src={imageGridSource[index]}
            alt={`banner-image-${index}`}
            layout="fill"
            objectFit="cover"
            className={`sm:rounded-md lg:rounded-xl overflow-hidden shadow-sm transition-opacity duration-300 ${
              imagesLoaded[index] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleImageLoad(index)}
            onError={() => handleImageError(index)}
          />
        {/* )} */}
    </div>
  )

  return (
    <section className="w-full">
      {imageGridSource.length > 0 ? (
        <>
          <div className="max-sm:hidden grid grid-cols-12 gap-2 md:gap-4">
            <div className="col-span-12 md:col-span-6 aspect-[16/8] md:aspect-[10/7] relative">
              {renderImage(0)}
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col gap-4 relative">
              <div className="w-full h-full relative">{renderImage(1)}</div>
              <div className="w-full h-full md:aspect-auto relative">{renderImage(2)}</div>
            </div>
            <div
              className="col-span-6 md:col-span-3 aspect-[12/12] md:aspect-auto relative cursor-pointer"
            >
              {imagesLoaded[3] && !imageErrors[3] && (
                <div className="absolute sm:rounded-md lg:rounded-xl inset-0 z-10 flex items-center justify-center bg-gray-950/50 hover:bg-gray-950/60 transition duration-300">
                  <p className="text-white text-center small-caption">View all photos</p>
                </div>
              )}
              {renderImage(3)}
            </div>
          </div>
          <div className="sm:hidden mt-4">
            <Slider ref={sliderRef} {...settings}>
              {imageGridSource.map((_, index) => (
                <div key={index} className="relative w-full aspect-square">
                  {renderImage(index)}
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">{renderImageNotFounds()}</div>
      )}
    </section>
  )
}

export default ImageGridSection
