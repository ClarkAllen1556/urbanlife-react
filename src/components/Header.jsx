export default function Header() {
  return (
    <div
      className="
        min-h-min items-center gap-5 mb-5 ml-5 mr-5 p-2 pl-5 border-2 border-t-0
        rounded-b-md text-3xl
        border-sol-blue-1 bg-sol-tan-1
      "
    >
      {/* <img className="scale-75" src={logUrl} /> */}
      <span className="text-card-title-red">TheAllenC@TheUrbanlife </span>
      <span className="font-semibold">~$</span>
    </div>
  );
}
