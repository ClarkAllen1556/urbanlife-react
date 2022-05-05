import { socials } from '../meta/Socials.json';
import SocialLink from './SocialLink';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';

export default function SocialsList() {
  return (
    <div className="flex justify-center gap-2 mt-5">
      <SocialLink social={socials.linkedin}>
        <FaLinkedinIn />
      </SocialLink>

      <SocialLink social={socials.github}>
        <FaGithub />
      </SocialLink>

      <SocialLink social={socials.matrix}>
        <SiMatrix />
      </SocialLink>
    </div>
  );
}
