import { socials } from '../meta/Socials.json';
import SocialLink from './SocialLink';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function SocialsList() {
  return (
    <div className="flex justify-center gap-2 mt-5">
      <SocialLink social={socials.linkedin}>
        <FaLinkedinIn />
      </SocialLink>
      <SocialLink social={socials.github}>
        <FaGithub />
      </SocialLink>
    </div>
  );
}
