export const Countdown = () => {
    return <div className="countdown-container bg-purple-1000 p-3 rounded border border-purple-300 border-opacity-30 text-purple-100 w-fit">
    <p className="uppercase text-xs font-bold mb-2 text-nowrap">
      Profitez d'un <span className="text-sm">site offert</span>
    </p>
    <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
      <div className="flex flex-col rounded-box items-center uppercase">
        <span className="countdown text-xl">
          <span style={{ "--value": 8 }} className="font-bold"></span>
        </span>
        <span className="text-xs font-medium">jours</span>
      </div>
      <div className="flex flex-col rounded-box items-center uppercase">
        <span className="countdown text-xl">
          <span
            style={{ "--value": 15 }}
            className="font-bold"
          ></span>
        </span>
        <span className="text-xs font-medium">heures</span>
      </div>
      <div className="flex flex-col rounded-box items-center uppercase">
        <span className="countdown text-xl">
          <span
            style={{ "--value": 15 }}
            className="font-bold"
          ></span>
        </span>
        <span className="text-xs font-medium">min</span>
      </div>
      <div className="flex flex-col rounded-box items-center uppercase">
        <span className="countdown text-xl">
          <span
            style={{ "--value": 15 }}
            className="font-bold"
          ></span>
        </span>
        <span className="text-xs font-medium">sec</span>
      </div>
    </div>
  </div>
}