export default function Home() {
  return (
    <div className="w-full h-full  absolute">
      <video
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
      <div className="text-white absolute overflow-y-auto top-0 bottom-0 left-0 right-0"></div>
    </div>
  );
}
