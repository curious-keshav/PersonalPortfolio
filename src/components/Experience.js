import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a target="_blank" className='text-primary capitalize dark:text-primaryDark' href={companyLink}>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'> {time} | {address}</span>
            <p className='font-medium w-full md:text-sm'> {work}</p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    console.log('scrollYProgress:', scrollYProgress);

    return (
        <div className='my-32 mt-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'> Experience</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'  />
                <ul className='w-full flex flex-col items-start justify-between ml-4  xs:ml-2 '>
                    <Details position="Graphic Team Head" company="GeeksForGeeks-LPU" companyLink="https://www.linkedin.com/in/keshav-verma-4331091b7/" time="August 2021 - August 2022" address="LPU Punjab" work="Coordinate 10+ Events | 30+ Event Posters | 5+ PPTs | Led Graphic Team | Contributed In Official GFG-LPU Website." />
                    <Details position="Freelancer" company="Photo Video Editing" companyLink="https://www.linkedin.com/in/keshav-verma-4331091b7/" time="June 2020 - June 2022" address="Remote" work="@Curious_editor | Photo-Video Editing | 300+ Happy Customers | Exploring Adobe Photoshop, Adobe Premiere Pro, And Some More Editing Apps" />
                    <Details position="Event Manager" company="TedX-LPU" companyLink="https://www.ted.com/" time="December 2021 - June 2022" address="LPU Punjab" work="Coordinate 3+ Events | 5+ Event Poster | 7+ Brochures | 5+ Posters | Event Marketing" />
                    <Details position="Google IT Support Professional Certified" company="Google" companyLink="https://www.coursera.org/professional-certificates/google-it-support" time="October 2020 - March 2021" address="Remote" work="During The Program, I Have Completed 100+ Google Qwiklabs To Complete The Milestone And Received Swags From Google." />
                </ul>
            </div>
        </div>
    )
}

export default Experience
