import Image, { StaticImageData } from "next/image";

const InvertedImage = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="relative h-10 w-10">
      <Image src={src} alt={"avatar of user"} fill className="rounded-full" />
      <div className="absolute z-50 h-full w-full rounded-full border border-[#0000001A]"></div>
    </div>
  );
};

export default InvertedImage;
