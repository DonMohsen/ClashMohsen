"use client";

import { IKImage } from "imagekitio-next";

type ImageType = {
  path?: string;
  src?: string;
  alt: string;
  className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!urlEndpoint) {
  throw new Error("Error: Please add NEXT_PUBLIC_URL_ENDPOINT to your .env");
}

const ImageKit = ({ path, src, alt, className }: ImageType) => {
  return (
    <div className={className + " relative"}>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        src={src}
        alt={alt}
        lqip={{ active: true, quality: 20 }}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default ImageKit;
