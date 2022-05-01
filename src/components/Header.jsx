export default function Header() {
  const Cursor = () => (
    <div className="animate-cursor w-4 h-8 rounded-md bg-sol-black-1" />
  );

  return (
    <div
      className="
        flex min-h-min items-center gap-2 mb-5 ml-5 mr-5 p-2 pl-5 border-2 border-t-0
        rounded-b-md text-3xl
        border-sol-blue-1 bg-sol-tan-1
      "
    >
      <div>
        <span className="text-card-title-red">TheAllenC@TheUrbanlife </span>
        <span className="font-semibold">~$</span>
      </div>
      <Cursor />
    </div>
  );
}
