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
          className="
            border-2 rounded-md p-2 w-full focus:outline-none
            focus:border-sol-yellow-1 border-sol-grey-2
          "
        />
      </div>

      <div className="mt-2">
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="
            border-2 rounded-md w-full p-2 h-48 resize-none focus:outline-none
            focus:border-sol-yellow-1 border-sol-grey-2
          "
        />
      </div>

      <button
        type="submit"
        className="
          p-2 mt-2 ml-auto w-20 rounded-md shadow-sm hover:shadow-none
          text-white bg-sol-blue-1 focus:bg-sol-yellow-1 shadow-sol-black-2
        "
      >
        Send
      </button>
    </form>
  );
}
