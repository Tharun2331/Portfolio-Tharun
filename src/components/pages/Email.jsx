import { useState } from "react";
import emailjs from "emailjs-com";

export const Email = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => console.error("Email error:", err));
  };

  return (
    <div className="w-full max-w-[90vw] mx-auto p-3 sm:max-w-[40vw] sm:p-6 bg-terminal-gray-900 text-white rounded border border-terminal-green shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <span className="text-terminal-green font-mono text-lg sm:text-xl">$ compose-email</span>
        <button className="text-white hover:text-terminal-red text-xl" onClick={closeModal}>×</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label className="text-terminal-green block mb-1 font-mono text-sm sm:text-base">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-terminal-gray-800 border border-terminal-gray-700 text-terminal-gray-300 rounded outline-none text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="text-terminal-green block mb-1 font-mono text-sm sm:text-base">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-terminal-gray-800 border border-terminal-gray-700 text-terminal-gray-300 rounded outline-none text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="text-terminal-green block mb-1 font-mono text-sm sm:text-base">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={3}
            className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-terminal-gray-800 border border-terminal-gray-700 text-terminal-gray-300 rounded outline-none resize-none text-sm sm:text-base"
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <button
            type="submit"
            className="bg-terminal-green text-black px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-green-500 transition w-full sm:w-auto text-sm sm:text-base"
          >
            Send Message
          </button>
          <button
            type="button"
            onClick={() => setFormData({ name: "", email: "", message: "" })}
            className="bg-terminal-gray-300 text-black px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-white transition w-full sm:w-auto text-sm sm:text-base"
          >
            Cancel
          </button>
        </div>

        {isSent && (
          <p className="text-terminal-green font-mono text-xs sm:text-sm mt-2">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
};