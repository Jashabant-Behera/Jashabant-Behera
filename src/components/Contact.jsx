import { PhoneIcon, MapPinIcon, Mail, LinkedinIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="mr-2"/>
                <span>8118006481 / 7735872336</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2"/>
                <span>jeetbehera143@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="mr-2"/>
                <span>Amin Line, Koraput, Odisha 764020</span>
              </li>
            </ul>
            
            {/* <div className="mt-6 flex space-x-4">
              <a href="https://linkedin.com/in/jashabant-behera-34bbb4b6" target="_blank">
                <LinkedinIcon className="text-blue-600 hover:text-blue-800"/>
              </a>
            </div> */}
          </div>
          
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg"/>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg"/>
            <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}