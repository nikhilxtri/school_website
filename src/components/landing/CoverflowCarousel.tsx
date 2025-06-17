import React, { useState, useEffect} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  // Carousel images
  const images = [
    "https://cdn.pixabay.com/photo/2025/06/11/07/18/wildlife-9653797_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/23/41/cow-3089259_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/10/20/14/52/cow-8329667_960_720.jpg"
  ];
  
  // Autoplay effect
  useEffect(() => {
    if (!loaded || !instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 100000); // Change 3000 to your desired interval in ms
    return () => clearInterval(interval);
  }, [loaded, instanceRef]);

  return (
    <>
    <h2 className="text-4xl bg-black mx-auto md:text-5xl font-bold text-primary mb-5 font-headline">Gallery</h2>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden" style={{height:100}}>
            {images.map((src, idx) => (
            <div className="keen-slider__slide flex items-center justify-center" key={idx}>
                <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={100}
                height={100}
                className=""
                style={{ objectFit: "contain"}}
                />
            </div>
            ))}
        </div>
        {loaded && instanceRef.current && (
            <>
            <Arrow
                left
                onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                className="absolute top-1/2 left-6 -translate-y-1/2 z-10"
            />
            <Arrow
                onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
                }
                className="absolute top-1/2 right-6 -translate-y-1/2 z-10"
            />
            </>
        )}
        </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
  className?: string
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled} ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={40}
      style={{ cursor: props.disabled ? "not-allowed" : "pointer", color: "rgba(255,255,255,0)"}}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="currentColor" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="currentColor"/>
      )}
    </svg>
  )
}
