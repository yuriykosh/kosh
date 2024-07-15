"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-10 border-white border-y bg-blue">
      <div className="flex flex-col gap-10 border-b border-white md:flex-row-reverse md:gap-0">
        <nav className="md:grow">
          <div className="p-5 border-b border-white">Menu:</div>
          <ul className="flex flex-col gap-8 p-5 ">
            <li>
              <Link
                href={"/"}
                className="flex gap-2 align-center text-[5.625rem] lg:text-[10rem] text-transparent text-stroke--white leading-[80%] tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-white before:w-10 before:h-10 before:my-auto"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                className="flex gap-2 align-center text-[5.625rem] lg:text-[10rem] leading-[75%] tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-white before:w-10 before:h-10 before:my-auto"
              >
                Work<sup className="text-sm -tracking-tight">(03...)</sup>
              </Link>
            </li>
            <li>
              <Link
                href={"/studio"}
                className="flex gap-2 align-center text-[5.625rem] lg:text-[10rem] leading-[75%] tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-white before:w-10 before:h-10 before:my-auto"
              >
                Studio
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex flex-col gap-5 border-t border-white md:border-t-0 md:border-r md:w-5/12 lg:w-4/12 xl:w-3/12">
          <li>
            <div className="p-5 border-b border-white">Project Inquires:</div>
            <div className="flex flex-col gap-5 p-5">
              <p className="leading-tight">
                <span className="block">Ready to work with us ?</span>
                <span className="block">
                  Reach out to discuss how we can help you build a strong
                  digital brand presence.
                </span>
              </p>
              <Link href={"mailto:hello@kosh.com"} className="underline">
                hello@kosh.com
              </Link>
            </div>
          </li>
          <li className="border-t border-white">
            <div className="p-5 border-b border-white">Networks:</div>
            <ul className="flex flex-col gap-5 p-5">
              <li>
                <Link href={"tel:+420776182501"} className="underline">
                  +420 776 182 501
                </Link>
              </li>
              <li>
                <Link href={"/"}>Instagram</Link>
              </li>
              <li>
                <Link href={"/"}>LinkedIn</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="md:flex md:flex-row-reverse">
        <div className="flex flex-col gap-10 px-5 md:flex-row-reverse md:grow md:justify-between md:items-end md:py-5">
          <address className="not-italic md:text-right">
            <ul className="leading-tight">
              <li>Stuttgart, DE</li>
              <li>Kremenchuk, UKR</li>
            </ul>
          </address>

          <div className="flex gap-1 py-1">
            <Link href={"/"} className="underline">
              Imprint
            </Link>
            &amp;
            <Link href={"/"} className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="p-5 md:self-end md:w-2/5 lg:w-1/3">
          <p>&copy; KOSH—All rights reserved. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
