"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { formUrlQuery } from "@/sanity/utils";

const links = ["All", "Frontend", "Backend", "Programming languages", "Core subjects", "Other"];

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = "";

    if (active === link) {
      setActive("");

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full py-12 whitespace-normal sm:max-w-2xl mr-48 ml-16">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-6 py-2.5`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
