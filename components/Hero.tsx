import { CanvasAnimation } from "./CanvasAnimation";
import { Countdown } from "./Countdown";

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row flex-nowrap justify-center mt-10">
      <div className="basis-1/2 flex flex-col p-2 md:items-end">
        <div className="text-container text-center md:text-start w-full md:w-4/5 lg:w-2/3 xl:w-3/5 2xl:w-1/2 md:mt-8 2xl:me-5">
          <h1 className="font-black text-4xl sm:text-5xl xl:text-6xl">
            Transformez votre idée en réalité avec le no-code
          </h1>
          <p className="pt-3 text-purple-100 sm:text-lg">
            Créez votre site web, même si vous n'avez jamais codé auparavant.
          </p>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-center xl:justify-start p-3">
        <div className="w-full lg:w-5/6 xl:w-4/5">
          <CanvasAnimation />
          <div className="flex mt-3 flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row gap-3 items-center">
            <Countdown />
            <div className="flex flex-col w-full justify-end items-start">
              <label className="mb-2 text-nowrap">
                Accédez à la <span className="font-bold">bêta</span> en
                avant-première :
              </label>
              <div className="flex gap-1 w-full">
                <input
                  data-theme="light"
                  type="text"
                  placeholder="Entrez votre mail"
                  className="input input-bordered w-full"
                />
                <button data-theme="light" className="btn">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
