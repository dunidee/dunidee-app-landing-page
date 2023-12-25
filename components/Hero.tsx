import { CanvasAnimation } from "./CanvasAnimation"
import { Countdown } from "./Countdown"

export const Hero = () => {
  return (
    <section className="mt-10 flex flex-col xl:flex-row flex-nowrap justify-center gap-4 xl:gap-0">
      <div className="basis-1/2 ps-20 flex flex-col items-center xl:items-end pe-20 bg-red-500">
        <h1 className="text-7xl font-black text-center xl:text-start" style={{ width: "30rem" }}>
          Transformez votre idée en réalité avec le no-code
        </h1>
        <p className="text-xl pt-3 text-purple-100 text-center xl:text-start" style={{ width: "30rem" }}>
          Créez votre site web, même si vous n'avez jamais codé auparavant.
        </p>
      </div>
      <div className="basis-1/2 flex justify-center xl:justify-start bg-green-500">
        <div style={{ width: "35rem" }}>
          <CanvasAnimation/>
          <div className="flex mt-3">
            <Countdown />
            <div className="flex flex-col ps-3 w-full justify-end">
              <label className="mb-2">
                Accédez à la <span className="font-bold">bêta</span> en
                avant-première :
              </label>
              <div className="flex gap-1">
                <input
                  data-theme="light"
                  type="text"
                  placeholder="Entrez votre mail"
                  className="input input-bordered"
                />
                <button data-theme="light" className="btn">M'inscrire</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
