import { CanvasAnimation } from "./CanvasAnimation"
import { Countdown } from "./Countdown"

export const Hero = () => {
  return (
    <section className="mt-10 flex flex-nowrap justify-center">
      <div className="main-text basis-1/2 ps-20 flex flex-col items-end pe-20">
        <h1 className="text-7xl font-black" style={{ width: "30rem" }}>
          Transformez votre idée en réalité avec le no-code
        </h1>
        <p className="text-xl pt-3 text-purple-100" style={{ width: "30rem" }}>
          Créez votre site web, même si vous n'avez jamais codé auparavant.
        </p>
      </div>
      <div className="main-animation basis-1/2">
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
