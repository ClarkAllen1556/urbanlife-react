export default function Card({ children }) {
  return (
    <div className="flex grow rounded-md p-5 shadow-md shadow-gray-500 bg-white border-2 border-blue-600">
      {children}
    </div>
  );
}
