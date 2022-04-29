import { socials } from '../meta/Socials.json';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialsList() {
  console.log(socials);
  return (
    <div className="flex">
      <div className="bg-green-200 rounded-md">
        <a
          className="min-w-fit"
          href={socials.github.link}
          title={socials.github.tag}
        >
          {socials.github.tag}
        </a>
      </div>
    </div>
  );
}
