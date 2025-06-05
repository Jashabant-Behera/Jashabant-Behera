import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Get In Touch
        </h2>
        
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 md:p-8 rounded-xl shadow-lg border border-white/50 backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-bold mb-5 text-purple-800">
            Contact Information
          </h3>
          
          <ul className="space-y-4">
            <li className="flex items-start bg-white/70 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-md mr-3 shadow-sm">
                <FaPhone className="text-white text-base md:text-4xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 text-sm md:text-base">Phone</h4>
                <p className="text-gray-900 font-medium text-base md:text-lg">
                  8118006481 / 7735872336
                </p>
              </div>
            </li>
            
            <li className="flex items-start bg-white/70 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-md mr-3 shadow-sm">
                <FaEnvelope className="text-white text-base md:text-4xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 text-sm md:text-base">Email</h4>
                <p className="text-gray-900 font-medium text-base md:text-lg">
                  jeetbehera143@gmail.com
                </p>
              </div>
            </li>
            
            <li className="flex items-start bg-white/70 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-md mr-3 shadow-sm">
                <FaMapMarkerAlt className="text-white text-base md:text-4xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 text-sm md:text-base">Address</h4>
                <p className="text-gray-900 font-medium text-base md:text-lg">
                  Amin Line, Koraput, Odisha 764020
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6 md:mt-8 bg-white/70 p-3 md:p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
              Connect with me
            </h4>
            <a
              href="https://linkedin.com/in/jashabant-behera-34bbb4b6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base shadow-sm hover:shadow-md transition-all"
            >
              <FaLinkedin className="mr-2 text-base md:text-lg" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}