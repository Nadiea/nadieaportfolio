import  { useRef } from 'react';
import Lottie from 'lottie-react';
import lottie_contact from '../../src/component/contactlottie.json';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const notifySuccess = () => toast.success('Email sent successfully!');
  const notifyError = () => toast.error('Email sending failed. Please try again.');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5h69r75', 'template_3v6tkja', form.current, 'ODJkUvVYDaTCPfjgi')
      .then((result) => {
        console.log(result.text);
        notifySuccess(); // Show success toast notification
      })
      .catch((error) => {
        console.error(error.text);
        notifyError(); // Show error toast notification
      });
  };



  return (
    <div className=" font-Quick" id="Contact">


<h1 className="  text-fuchsia-100 text-3xl  flex justify-center font-Quick">
        Contact Me
        </h1>
        <div className=" md:grid grid-cols-12 ">


            <div  data-aos="fade-down" className=" col-span-6">

        
            <Lottie
              animationData={lottie_contact}
              className=" mt-5   "
              loop={true}
            />
            </div>
            <div className=" col-span-6 md:p-16 p-2">


            <section className="bg-black  ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
     
      <form ref={form} action="#" className="space-y-6" data-aos="fade-right" onSubmit={sendEmail}>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium  text-fuchsia-200">Your email</label>
              <input type="email" id="email" name="form_email" className="shadow-sm  bg-fuchsia-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium  text-fuchsia-200">Your Name</label>
              <input type="text" id="subject" name="form_name"  className="block p-3 w-full text-sm text-gray-900  bg-fuchsia-200 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900  bg-fuchsia-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  bg-purple-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
            </div>




        </div>
        <Toaster />
        
    </div>
  )
}

