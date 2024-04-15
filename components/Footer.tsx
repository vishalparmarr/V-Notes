import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between text-left body-text w-full border-t border-black-400 bg-black-100 px-14 py-5 heading3 max-md: heading2 flex-between space-x-3 sm:gap-y-10 flex-row mb-0">
      <p className="text-sm text-left sm:text-lg">Copyright @ 2024 V Notes | All Rights Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms">Terms & Condition</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
