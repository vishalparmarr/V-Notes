"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Props {
  title: string;
  image: string;
  downloadLink: string;
  downloadNumber: number;
}

const ResourceCard = ({ title, image, downloadLink }: Props) => {
  const [downloads, setDownloads] = useState(0);

  useEffect(() => {
    const localStorageKey = `downloads-${title}`;
    const savedDownloads = localStorage.getItem(localStorageKey);
    if (savedDownloads !== null) {
      setDownloads(Number(savedDownloads));
    }
  }, [title]);

  const handleClick = () => {
    const localStorageKey = `downloads-${title}`;
    const newDownloads = downloads + 1;
    setDownloads(newDownloads);
    localStorage.setItem(localStorageKey, String(newDownloads));
  };

  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full" onClick={handleClick}>
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="text-white flex-center body-medium gap-1.5">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          {downloads}
        </div>
        <Link
          href={downloadLink}
          target="_blank"
          className="text-gradient_purple-blue flex-center body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
