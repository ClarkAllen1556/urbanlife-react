export default function Card({ title, children }) {
  return (
    <div className="min-h-min p-5 shadow-md shadow-gray-500 bg-white border-2 border-blue-600 rounded-md">
      <h1 className="text-2xl"> {title} </h1>
      <div className="flex grow ">{children}</div>
    </div>
  );
}
