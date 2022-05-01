import { socials } from '../meta/Socials.json';
import SocialLink from './SocialLink';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialsList() {
  return (
    <div className="flex">
      <SocialLink social={socials.linkedin}>
        <FiLinkedin />
      </SocialLink>
      <SocialLink social={socials.github}>
        <FiGithub />
      </SocialLink>
    </div>
  );
}
