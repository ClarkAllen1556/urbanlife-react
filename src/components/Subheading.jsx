export default function Subheading({ children }) {
  return (
    <div className="flex flex-col rounded-md p-5 mt-5 bg-white bg-opacity-75">
      <div className="text-center">
        <p>Full Stack Engineer, Light Theme Advocate</p>
        <p>Weekend Cyclist, and Coffee Drinker</p>
      </div>

      {children}
    </div>
  );
}
