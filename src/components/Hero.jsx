import Avatar from './Avatar';
import Subheading from './Subheading';
import SocialsList from './SocialsList';

export default function Hero({ children }) {
  return (
    <div
      className="
        flex flex-col bg-hero-pattern bg-center max-h-96 bg-opacity-75
        ml-5 mr-5 mb-5 p-2 border-2 min-h-100 rounded-md
        border-sol-blue-1 shadow-md shadow-sol-black-2
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
