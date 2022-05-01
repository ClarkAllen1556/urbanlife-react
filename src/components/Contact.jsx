export default function Contact() {
  return (
    <form
      className="w-full flex flex-col"
      action="https://formspree.io/f/mpzdwlzp"
      method="POST"
    >
      <div className="mt-2">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="border-2 rounded-md p-2 w-full"
        />
      </div>

      <div className="mt-2">
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="border-2 rounded-md w-full p-2 h-48 resize-none"
        />
      </div>

      <button
        type="submit"
        className="p-2 mt-2 ml-auto w-20 border-2 rounded-md border-blue-400 bg-blue-300"
      >
        Send
      </button>
    </form>
  );
}
