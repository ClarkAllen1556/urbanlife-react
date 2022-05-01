import { facts } from '../meta/About.json';

export default function About({ children }) {
  const Paragraph = ({ children }) => (
    <p className="mb-2 leading-tight">{children}</p>
  );

  return (
    <div className="text-left flex justify-between">
      <div className="w-1/2">
        <Paragraph>
          Hey there! My name is Allen Clark. I'm software engineer located in
          Tokyo, Japan. I'm enthusiastic about all things tech and open-source
          and currently, loving Elixir and Phoenix.{' '}
        </Paragraph>

        <Paragraph>
          I love playing around with new tools, exploring open-source projects,
          and self-hosting. I’m also an avid coffee drinker, weekend cyclist,
          and video game enthusiast.
        </Paragraph>
      </div>

      <ul className="text-right ml-4">
        {facts.map((fact, index) => (
          <li key={index}>
            {fact.title}:{' '}
            {fact.link ? (
              <a href={fact.link} target="_blank">
                {fact.fact}
              </a>
            ) : (
              fact.fact
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
