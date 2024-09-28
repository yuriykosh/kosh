"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItemActive from "./nav-item/NavItemActive";
import NavItem from "./nav-item/NavItem";
import NavItemDropdownlist from "./nav-item/NavItemDropdownlist";
import NavItemDropdownlistActive from "./nav-item/NavItemDropdownlistActive";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      id="footer"
      className="relative flex flex-col gap-10 border-white border-y bg-blue"
    >
      <div className="flex flex-col gap-10 border-b border-white md:flex-row-reverse md:gap-0">
        <nav className="md:grow">
          <div className="p-5 border-b border-white">Menu:</div>
          <ul className="flex flex-col gap-8 p-5 ">
            <li>
              {pathname === "/" ? (
                <NavItemActive url={"/"}>Home</NavItemActive>
              ) : (
                <NavItem url={"/"}>Home</NavItem>
              )}
            </li>
            <li>
              {pathname === "/work" ? (
                <NavItemDropdownlistActive />
              ) : (
                <NavItemDropdownlist />
              )}
            </li>
            <li>
              {pathname === "/studio" ? (
                <NavItemActive url={"/studio"}>Studio</NavItemActive>
              ) : (
                <NavItem url={"/studio"}>Studio</NavItem>
              )}
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

        <div className="p-5 md:self-end md:w-2/5 lg:w-1/3 xl:w-3/12">
          <p>&copy; KOSH—All rights reserved. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
