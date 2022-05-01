export default function Card({ title, children }) {
  return (
    <div className="min-h-min p-5 rounded-md shadow-md shadow-gray-500 bg-white border-2 border-blue-600">
      <h1 className="text-2xl">
        <span className="font-semibold">~$ </span>
        <span className="text-card-title-red">{title}</span>
      </h1>
      <div className="flex grow ">{children}</div>
    </div>
  );
}
