import { ChartLine, CheckCircle2 } from "lucide-react";
import type { ImageMetadata } from "astro";

interface Props {
  url: string;
  title: string;
  text: string;
  img: ImageMetadata;
  features: string[];
  stats: string[];
}

export default function WebsiteCard({
  url,
  title,
  text,
  img,
  features,
  stats,
}: Props) {
  return (
    <div className="group flex flex-col hover:bg-white transition-colors rounded-2xl">
      <a href={url} className="overflow-hidden rounded-2xl">
        <img
          src={img.src}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </a>

      <div className="flex flex-col rounded-b-2xl py-6 px-4 gap-4">
        <div className="pb-2">
          <h3 className="card-title text-2xl">
            <a href={url}>{title}</a>
          </h3>
          <p>{text}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-2">
          {/* Features */}
          <div>
            <h4 className="card-title font-semibold text-lg text-slate-900">
              Features
            </h4>

            <div className="grid gap-2">
              {features.map((f) => (
                <span className="px-2 py-0.5 text-xs text-dark/80 rounded-full bg-muted flex gap-2 items-center w-fit">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* stats */}
          <div>
            <h4 className="card-title font-semibold text-lg text-slate-900">
              Stats
            </h4>

            <div className="flex flex-col gap-2">
              {stats.map((s) => (
                <span className="px-2 py-0.5 text-xs text-dark/80 rounded-full bg-muted flex gap-2 items-center w-fit">
                  <ChartLine className="w-4 h-4 text-indigo-500" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
