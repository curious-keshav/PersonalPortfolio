import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Skill = ({ name, x, y, hidden }) => {
  return (
    <motion.div
      className={`${
        hidden ? "hidden" : ""
      } flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [isSmScreen, setIsSmScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skillsData = [
    { name: "DSA", x: "0vw", y: "0vw", xSm: "0vw", ySm: "0vw" },
    { name: "C++", x: "-5vw", y: "-10vw", xSm: "-3vw", ySm: "-12vw" },
    { name: "Python", x: "23vw", y: "6vw", xSm: "18vw", ySm: "2vw" },
    { name: "Javascript", x: "0vw", y: "12vw", xSm: "-25vw", ySm: "15vw" },
    { name: "CSS", x: "-15vw", y: "-16vw", xSm: "-12vw", ySm: "-18vw" },
    { name: "HTML", x: "15vw", y: "-12vw", xSm: "12vw", ySm: "-14vw" },
    { name: "NodeJS", x: "0vw", y: "-18vw", xSm: "2vw", ySm: "-36vw" },
    { name: "Firebase", x: "18vw", y: "0vw", xSm: "15vw", ySm: "29vw" },
    { name: "MySQL", x: "-16vw", y: "-6vw", xSm: "-28vw", ySm: "-8vw" },
    { name: "NextJS", x: "-12vw", y: "2vw", xSm: "-20vw", ySm: "0vw" },
    { name: "Figma", x: "25vw", y: "-12vw", xSm: "30vw", ySm: "-14vw" },
    { name: "Tailwind CSS", x: "10vw", y: "9vw", xSm: "22vw", ySm: "17vw" },
    { name: "Bootstrap", x: "-10vw", y: "15vw", xSm: "-13vw", ySm: "44vw" },
    { name: "ReactJS", x: "8vw", y: "-5vw", xSm: "-10vw", ySm: "33vw" },
    { name: "Tableau", x: "32vw", y: "-5vw", xSm: "30vw", ySm: "-27vw" },
    { name: "Photoshop", x: "-25vw", y: "-12vw", xSm: "-22vw", ySm: "-14vw", hidden: isSmScreen },
    { name: "Canva", x: "-32vw", y: "0vw", xSm: "-28vw", ySm: "-2vw", hidden: isSmScreen },
    { name: "R language", x: "-20vw", y: "9vw", xSm: "-18vw", ySm: "7vw", hidden: isSmScreen },
    { name: "Informatica", x: "15vw", y: "-20vw", xSm: "-29vw", ySm: "-30vw"},
    { name: "Microsoft Office", x: "-37vw", y: "-7vw", xSm: "-34vw", ySm: "-9vw", hidden: isSmScreen },
  ];

  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div
        className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm  '
      >
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            x={isSmScreen ? skill.xSm : skill.x}
            y={isSmScreen ? skill.ySm : skill.y}
            hidden={skill.hidden}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
