'use client';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <main className="grow mt-32">{children}</main>
      <Footer border={true} />
    </div>
  );
}
