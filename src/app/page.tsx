import Image from "next/image";

export default function Home() {
  return (
    <div className="h-auto md:h-[200px]">
      <section className="text-center">
        <h1 className="text-[#8f94ff] mt-[38px] text-[40px] md:text-[51.7px] font-normal">
          JUST UX
        </h1>
        <h2 className="text-white mt-[-10px] md:mt-[-20px] text-[50px] md:text-[80px] font-semibold">
          ecommerce
        </h2>
        <h2 className="text-white mt-[-20px] md:mt-[-40px] font-semibold text-[50px] md:text-[80px]">
          user interface kit
        </h2>
      </section>

      <section className="flex flex-wrap justify-around mt-9 text-white gap-4">
        <div className="mt-[10px] group">
          <Image
            width={209.27}
            height={257.31}
            alt="chair"
            src="/chair.jpeg"
            className="mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="text-center">
            The Dendy Chair <br /> £250
          </div>
        </div>
        <div className="mt-[70px] group">
          <Image
            width={209.27}
            height={257.31}
            alt="light"
            src="/light.jpeg"
            className="h-[262px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="group">
          <Image
            width={209.27}
            height={257.31}
            alt="table"
            src="/table1.jpeg"
            className="h-[260px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="text-center">
            The Stanley Table <br /> £125
          </div>
        </div>
        <div className="mt-[50px] group">
          <Image
            width={209.27}
            height={257.31}
            alt="yellow"
            src="/yallow.jpeg"
            className="h-[260px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="text-center">
            New Lamp <br /> £250
          </div>
        </div>
        <div className="group">
          <Image
            width={209.27}
            height={257.31}
            alt="white"
            src="/white.jpeg"
            className="h-[260px] mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="text-center">
            Andel Vase <br /> £95
          </div>
        </div>
      </section>
    </div>
  );
}
