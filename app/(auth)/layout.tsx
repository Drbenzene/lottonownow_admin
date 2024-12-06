// src/components/AuthLayout.js
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div
      style={{ backgroundImage: "url(/img/Background.png)" }}
      className="relative bg-cover bg-center flex flex-col md:flex-row h-screen"
    >
      <a href="/">
        <Image
          src="/icons/Logo.svg"
          alt="lottonownow"
          width={134}
          height={79.01}
          className="absolute z-50 cursor-pointer top-6 md:top-12 left-4 md:left-16 w-fit"
        />
      </a>

      {/* Form Section */}
      <section className="flex-1 scrollbar-hide flex items-center justify-center container">
        <div className="">{children}</div>
      </section>

      {/* Side Image Section */}
      <section className="hidden md:hidden lg:flex relative pt-[70px] mr-16">
        {/* <div className="relative w-full h-[500px]"> */}
        <Image
          src="/img/Figma-Group.png"
          height={967}
          width={724}
          // fill
          alt=""
          layout="responsive"
          className="mx-auto max-w-[500px] sm:max-w-[600px] md:max-w-[724px]"
        />
        {/* </div> */}
      </section>
    </div>
  );
}
