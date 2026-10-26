import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import WebsiteCard from "./WebsiteCard";
import { useState, useEffect } from "react";

interface Website {
  title: string;
  text: string;
  url: string;
  img: { src: string; width?: number; height?: number };
  features: string[];
  stats: string[];
}

interface Props {
  websites: Website[];
}

export default function WebsitesCarousel({ websites }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 5000 }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div ref={emblaRef} className="-ml-4">
        <div className="flex">
          {websites.map((site: Website, i) => (
            <div key={site.title} className="shrink-0 w-full pl-4">
              <WebsiteCard {...site} priority={i === 0} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {websites.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === selectedIndex ? "bg-indigo-500" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
