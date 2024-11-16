'use client';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`container z-30 w-full max-w-screen-lg backdrop-blur-2xl border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-4 md:py-4 md:gap-0 relative">
        <div className="relative z-20 w-full flex justify-between md:w-max md:px-0">
          {/* Logo */}
          <Link
            href="/"
            aria-label="logo"
            className="flex items-center ml-4 md:ml-0"
          >
            <Logo />
          </Link>

          {/* Hamburger button */}
          <div className="relative flex items-center md:hidden max-h-10">
            <label
              aria-label="hamburger"
              id="hamburger"
              className="relative p-4"
              onClick={toggleMenu}
            >
              <div
                aria-hidden="true"
                id="line"
                className={`m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className={`m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        <div
          onClick={toggleMenu}
          aria-hidden="true"
          className={`fixed z-10 inset-0 h-screen w-screen md:hidden bg-white/70 backdrop-blur-2xl origin-top transition duration-500 ${
            isMenuOpen ? 'scale-y-100' : 'scale-y-0'
          } md:hidden dark:bg-gray-900/70`}
        ></div>

        {/* Menu */}
        <div
          className={`z-20 gap-6 rounded-3xl shadow-2xl shadow-gray-600/10 justify-end w-full transition-all duration-300 scale-95 origin-top ${
            isMenuOpen
              ? 'mt-8 md:mt-0 p-8 md:p-0  opacity-100 visible'
              : 'mt-0 h-0 p-0 invisible opacity-0 md:visible md:opacity-100'
          } md:relative md:scale-100 md:flex md:flex-row md:items-center md:gap-0 md:p-0 md:bg-transparent md:w-max md:shadow-none dark:shadow-none dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
        >
          <div className="md:flex md:flex-row md:items-center">
            {/* Menu options */}
            <div className={`md:pr-4 md:w-auto w-full md:pt-0`}>
              <ul className="tracking-wide font-medium md:text-sm flex-col flex md:flex-row gap-6 md:gap-0">
                <li>
                  <Link
                    href={`/#gioi-thieu`}
                    className={`block md:px-4 transition hover:text-primary`}
                  >
                    <span>Giới thiệu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#dich-vu`}
                    className={`block md:px-4 transition hover:text-primary`}
                  >
                    <span>Dịch vụ</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#du-an-tieu-bieu`}
                    className={`block md:px-4 transition hover:text-primary`}
                  >
                    <span>Dự án tiêu biểu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#doi-ngu`}
                    className={`block md:px-4 transition hover:text-primary`}
                  >
                    <span>Đội ngũ</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#lien-he`}
                    className={`block md:px-4 transition hover:text-primary`}
                  >
                    <span>Liên hệ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Locale and Theme switchers */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <div className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900">
            Gọi ngay
          </div>
        </div>
      </div>
    </nav>
  );
}
