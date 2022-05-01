import Avatar from './Avatar';
import Subheading from './Subheading';
import SocialsList from './SocialsList';

export default function Hero({ children }) {
  return (
    <div
      className="flex flex-col bg-hero-pattern bg-center max-h-96 bg-opacity-75 ml-5 mr-5 mb-5 p-2 border-2
        rounded-md border-blue-600 min-h-100
      "
    >
      <Avatar />
      <Subheading>
        <SocialsList />
      </Subheading>

      {children}
    </div>
  );
}
