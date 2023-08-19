import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { EarthCanvas, StarsCanvas } from '../components/canvas'
import Layout from '@/components/Layout';
// import { slideIn } from '@/components/Motion';
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
// import { GithubIcon,AddressIcon, ContactIcon , GmailIcon, PhoneIcon} from '@/components/Icons';
import contactdark from '../../public/images/contact/contactdark.png'
import Image from 'next/image';

//N-OJvPJtQyf6yQhXo
//template_bhiIg5q
//service_4co9lca

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_4co9lca',
                'template_bhilg5q',
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "sujata@jsmastery.pro",
                    message: form.message,
                },
                'N-OJvPJtQyf6yQhXo'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (<>

        <Head>
            <title> Keshav Verma | Contact Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />

<main className='overflow-hidden flex'>
        <Layout className={`xl:mt-12  flex !flex-row xl:flex-row  gap-10 overflow-hidden justify-center flex-wrap`}>
            {/* Left Side - Contact Form */}
            {/* <motion.div className='text-dark dark:text-light flex flex-col self-center pr-32 p-8'>
                <div className='flex flex-row mb-4'>
                    <div className='w-6 mx-3 sm:mx-1 mr-20 mt-1'>
                        <ContactIcon/>
                    </div>
                    <div>
                        <h1 className='text-2xl text-dark dark:text-light mb-1 '>Address</h1>
                        <h3 style={{ fontFamily: 'var(--second-font)' }} className='text-md text-dark/75 dark:text-light/75 '>Dhuri , Punjab(IN)</h3>
                    </div>
                </div>
                <div className='flex flex-row my-4'>
                    <div className='w-6 mx-3 sm:mx-1 mr-20 mt-1'>
                        <ContactIcon />
                    </div>
                    <div>
                        <h1 className='text-2xl text-dark dark:text-light mb-1 '>Student</h1>
                        <h3 style={{ fontFamily: 'var(--second-font)' }} className='text-md text-dark/75 dark:text-light/75'>LPU , Jalandhar , Punjab(IN)</h3>
                    </div>
                </div>
                <div className='flex flex-row my-4 '>
                    <div className='w-6 mx-3 sm:mx-1 mr-20 mt-1'>
                        <GmailIcon />
                    </div>
                    <div>
                        <h1 className='text-2xl text-dark dark:text-light mb-1 '>Email</h1>
                        <h3 style={{ fontFamily: 'var(--second-font)' }} className='text-md text-dark/75 dark:text-light/75'>keshavverma532@gmail.com</h3>
                    </div>
                </div>
                <div className='flex flex-row mt-4'>
                    <div className='w-6 mx-3 sm:mx-1 mr-20 mt-1'>
                        <PhoneIcon />
                    </div>
                    <div>
                        <h1 className='text-2xl text-dark dark:text-light mb-1 '>Phone</h1>
                        <h3 style={{ fontFamily: 'var(--second-font)' }} className='text-md text-dark/75 dark:text-light/75'>7973068960</h3>
                    </div>
                </div>

            </motion.div> */}
            
            <Image src={contactdark} alt="contact"  className=" dark:invert " priority sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,50vw' ></Image>
            <motion.div
                className="flex-[0.75] border border-solid p-8 rounded-2xl border-dark "
            >
                <p className="sm:text-[18px] text-[14px] text-dark uppercase tracking-wider dark:text-light">
                    Get in touch
                </p>
                <h3 className="text-dark font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] dark:text-light">
                    Contact Me
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-4 "
                >
                    {/* Input Fields */}
                    {/* Your Name */}
                    <label className="flex flex-col">
                        <span className="text-dark font-medium mb-2 dark:text-white">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-dark py-3 px-6 placeholder:text-sm placeholder:text-secondary sm:placeholder:text-xs text-white rounded-lg outline-none border-none font-medium dark:bg-light dark:text-dark"
                        />
                    </label>
                    {/* Your Email */}
                    <label className="flex flex-col">
                        <span className="text-dark font-medium mb-2 dark:text-white">
                            Your Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-dark py-3 px-6 placeholder:text-sm placeholder:text-secondary sm:placeholder:text-xs text-white rounded-lg outline-none border-none font-medium dark:bg-light dark:text-dark"
                        />
                    </label>
                    {/* Your Message */}
                    <label className="flex flex-col">
                        <span className="text-dark font-medium mb-2 dark:text-white">
                            Your Message
                        </span>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-dark py-3 px-6 placeholder:text-sm placeholder:text-secondary text-white sm:placeholder:text-xs rounded-lg outline-none border-none font-medium dark:bg-light dark:text-dark"
                        />
                    </label>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-fit flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-md font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            
            {/* Right Side - EarthCanvas Component */}
            {/* <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1  xl:h-auto md:h-[550px] h-[250px] justify-center self-center 
                "
            >
                <EarthCanvas />
            </motion.div> */}

        </Layout>
        </main>
    </>
    )
}

export default Contact
