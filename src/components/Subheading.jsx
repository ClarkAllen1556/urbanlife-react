export default function Subheading({ children }) {
  return (
    <div className="bg-white bg-opacity-75 rounded-md p-5 mt-5 flex flex-col">
      <div className="text-center">
        <p>Full Stack Engineer, Light Theme Advocate</p>
        <p>Weekend Cyclist, and Coffee Drinker</p>
      </div>

      {children}
    </div>
  );
}
