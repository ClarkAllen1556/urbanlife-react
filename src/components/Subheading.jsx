export default function Subheading({ children }) {
  return (
    <div className="bg-white bg-opacity-75 rounded-md p-5 mt-5 flex flex-wrap justify-center">
      <p className="text-center w-80">
        Full Stack Engineer, Light Theme Advocate, Weekend Cyclist, and Coffee
        Drinker
      </p>

      {children}
    </div>
  );
}
