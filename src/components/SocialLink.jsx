export default function SocialLink({ social, children }) {
  return (
    <a
      className="w-min flex justify-center py-2 px-4 border mb-auto grow-0
        border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
      text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500
      "
      href={social.link}
      title={social.tag}
      target="_blank"
    >
      {children}
    </a>
  );
}
