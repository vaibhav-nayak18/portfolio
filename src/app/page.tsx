import { Background, Navbar } from '@/components';

export default function Home() {
  return (
    <div className="w-full h-full  absolute">
      <Background />
      <div className="text-white absolute overflow-y-auto top-0 bottom-0 left-0 right-0">
        {/* <Navbar /> */}
      </div>
    </div>
  );
}
