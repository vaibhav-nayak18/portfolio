export default function Home() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-auto"
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
