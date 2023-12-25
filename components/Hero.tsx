import { CanvasAnimation } from "./CanvasAnimation";
import { Countdown } from "./Countdown";

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row flex-nowrap justify-center mt-10">
      <div className="basis-1/2 flex flex-col bg-red-500 p-2">
        <h1 className="font-black text-center text-4xl">
          Transformez votre idée en réalité avec le no-code
        </h1>
        <p className="pt-3 text-purple-100 text-center">
          Créez votre site web, même si vous n'avez jamais codé auparavant.
        </p>
      </div>
      <div className="basis-1/2 flex flex-col justify-center xl:justify-start bg-green-500 p-3">
        <CanvasAnimation />
        <div className="flex mt-3 flex-col-reverse sm:flex-row gap-3 sm:gap-0 items-center">
          <Countdown />
          <div className="flex flex-col w-full justify-end items-start sm:items-start">
            <label className="mb-2">
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
    </section>
  );
};
