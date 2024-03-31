"use client"
import { useState } from "react";

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {

  const [active, setActive] = useState('');

  const handleFilter = (link: string) => {
    setActive(link);
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
        {links.map((link) => (
            <button
            key={link}
            onClick={() => handleFilter(link)}
            className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg capitalize px-8 py-2.5`}>
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters