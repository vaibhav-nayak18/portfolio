import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <Image
      src={"/image.png"}
      alt="hello"
      className=" w-full h-full"
      width={500}
      height={800}
      quality={100}
    />
  );
}

/*    <video

      autoPlay
      muted
      loop
      className=" object-cover h-full w-full "
    >
      <source
        src="/blackhole.webm"
        type="video/webm"
      />
    </video>
    */
