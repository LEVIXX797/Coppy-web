import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import Magnet from "./Magnet";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">

      <FadeIn y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {["About","Price","Projects","Contact"].map(item=>(
            <a
              key={item}
              className="
              text-[#D7E2EA]
              uppercase
              font-medium
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            whitespace-nowrap
            w-full
            text-[14vw]
            sm:text-[15vw]
            md:text-[16vw]
            lg:text-[17.5vw]
            mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.6}>
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0"
        >
          <Magnet>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              className="
              w-[280px]
              sm:w-[360px]
              md:w-[440px]
              lg:w-[520px]"
            />
          </Magnet>
        </div>
      </FadeIn>

      <div className="mt-auto pb-8 px-6 md:px-10 flex justify-between items-end">
        <FadeIn delay={0.35}>
          <p
            className="
            text-[#D7E2EA]
            uppercase
            font-light
            tracking-wide
            leading-snug
            max-w-[160px]
            sm:max-w-[220px]
            md:max-w-[260px]"
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
