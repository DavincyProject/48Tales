import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const images = ["/carousel/2.jpg", "/carousel/1.jpg", "/carousel/3.jpg"];

  return (
    <div className="embla w-full mx-auto h-96" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              aspectRatio:
                "16/9" /* Atur rasio aspek sesuai dengan kebutuhan */,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
