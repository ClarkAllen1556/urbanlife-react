export default function SocialLink({ social, children }) {
  return (
    <a
      className="w-min flex justify-center py-2 px-4 mb-auto grow-0
       text-sm font-medium rounded-md focus:outline-none shadow-sm hover:shadow-none
      text-white bg-sol-blue-1 focus:bg-sol-yellow-1 shadow-sol-black-2
      "
      href={social.link}
      title={social.tag}
      target="_blank"
    >
      {children}
    </a>
  );
}
