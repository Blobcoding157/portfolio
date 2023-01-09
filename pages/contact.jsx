import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              you can contact me, you should try it!
            </p>
            <ul className="contact-links">
              <li className="contact-item">
                Email: patrik.nuernberger@gmail.com
              </li>
              <li className="contact-item">Phone: +43 699 1928 2991</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
