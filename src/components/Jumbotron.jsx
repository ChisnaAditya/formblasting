function Jumbotron() {
  return (
    <div className="flex flex-col lg:flex-row h-auto bg-[#fccf00]">
      <article className="basis-1/2 px-10 lg:ps-[150px] flex flex-col pt-[2rem] lg:pt-[4rem]">
        <h1 className="font-extrabold text-[32px] lg:text-[48px] leading-none pb-10">
          Form Kehadiran Registrasi Ulang (check-in)
        </h1>
        <div className="text-md lg:text-xl">
          <p className="italic font-bold text-3xl mb-2">
            Hai semua, salam dari mincaaa~ 👋🏻👋🏻
          </p>
          <p>
            Bagaimana kabarnya? Semoga tetap sehat & tetap baik-baik saja😇{" "}
          </p>
        </div>
        <div className="pt-10 me-32">
          <p className="hidden lg:block text-sm">
            *Sekedar info jam Layanan dimulai dari
          </p>
          <div className="hidden lg:block px-10 py-2 bg-[#ea1d23] rounded-full">
            <p className="italic font-bold text-white text-center">
              08:00 - 16:00 di hari Sabtu & Minggu.
            </p>
          </div>
          <div>
            <p className="hidden lg:block pt-10 italic">
              Besar harapan gform ini diisi ketika sebelum sampai lokasi
              registrasi ulang.
            </p>
            <div className="hidden lg:flex">
              <img
                alt="arrow"
                src="/arrow.png"
                className="animate-bounce w-[50px] pt-10"
              />
              <img
                alt="arrow"
                src="/arrow.png"
                className="animate-bounce w-[50px] pt-10"
              />
              <img
                alt="arrow"
                src="/arrow.png"
                className="animate-bounce w-[50px] pt-10"
              />
            </div>
          </div>
        </div>
      </article>
      <figure className="basis-1/2">
        <img alt="hero" src="/hero.png" />
        <p className="lg:hidden px-10 italic">
          Besar harapan form ini diisi ketika sebelum sampai lokasi registrasi
          ulang.
        </p>
        <p className="lg:hidden px-10 pt-5 text-sm">
          *Sekedar info jam Layanan dimulai dari jam{" "}
        </p>
        <div className="px-10">
          <div className="lg:hidden px-10 py-2 bg-[#ea1d23] rounded-full mb-5">
            <p className="italic font-bold text-white text-center">
              08:00 - 16:00 di hari Sabtu & Minggu.
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default Jumbotron;
