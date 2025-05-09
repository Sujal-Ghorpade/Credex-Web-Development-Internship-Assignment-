export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white py-6 text-sm mt-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="font-semibold text-lg mb-2">
            <span className="text-gray-100">SoftSell</span> - Your trusted
            partner
          </p>
          <p className="mb-4 text-gray-200">
            We help you grow your business with advanced solutions.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Support
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="text-center mt-4 text-gray-300">
          <p>
            Developed by <span className="font-bold">Sujal Ghorpade</span>. You
            can reach me at{" "}
            <span className="font-bold">sujalghorpade@example.com</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
