import { facts } from '../meta/About.json';

export default function About({ children }) {
  console.log(facts);

  return (
    <div className="text-left">
      <ul className="list-disc ml-4">
        {facts.map((fact, index) => (
          <li key={index}>
            {' '}
            {fact.title}: {fact.fact}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
