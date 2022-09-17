export function People() {

  const count=1
  return <div className="flex flex-row">
    <div className="relative flex  items-center">
    <svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21.4" cy="21.4" r="19.78" fill="#FFB057" stroke="white" strokeWidth="2.76" />
    </svg>

    {!!count && <span className=" absolute text-sm  w-[43px] h-[43px] font-semibold text-center flex items-center justify-center text-white">
      {count}+</span>}
      </div>

      <div className="relative flex  items-center">
    <svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21.4" cy="21.4" r="19.78" fill="#FFB057" stroke="white" strokeWidth="2.76" />
    </svg>

    {!!count && <span className=" absolute text-sm  w-[43px] h-[43px] font-semibold text-center flex items-center justify-center text-white">
      {count}+</span>}
      </div>

  </div>;
}
