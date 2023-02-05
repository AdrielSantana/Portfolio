import Image from "next/image";

const PhotoBackground = () => {
  return (
    <div className="perfil-photo-container">
      <Image
        width={400}
        height={300}
        priority
        alt="perfil photo"
        src={"/images/background/hero/perfil.png"}
      ></Image>
    </div>
  );
};

export default PhotoBackground;
