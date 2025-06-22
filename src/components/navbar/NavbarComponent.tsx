'use client'

import React from 'react';
import Image from 'next/image';
import LogoImage from '@/assets/VehyxLogoWhite.png';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const NavbarComponent = () => {
  const route = useRouter()
  const pathName = usePathname()

  const handleRouteChange = (path: string) => {
    route.push(path)
  }
  return (
    <nav className="flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link href={'/'}>
          <Image src={LogoImage} alt="Vehyx Logo" width={120} height={40} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-12 text-white font-medium">
        <li className={clsx("hover:text-primary font-medium cursor-pointer", {
          "text-primary": pathName === '/'
        })} onClick={() => handleRouteChange('/')}>Home</li>
        <li className={clsx("hover:text-primary font-medium cursor-pointer", {
          "text-primary": pathName === '/report'
        })} onClick={() => handleRouteChange('/report')}>Services</li>
        <li className={clsx("hover:text-primary font-medium cursor-pointer", {
          "text-primary": pathName === '/lists'
        })} onClick={() => handleRouteChange('/lists')}>Marketplace</li>
        <li className={clsx("hover:text-primary font-medium cursor-pointer", {
          "text-primary": pathName === '/community'
        })} onClick={() => handleRouteChange('/community')}>Community</li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4 font-medium">
        <Link href="/auth/login">
          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Dealer login
          </button>
        </Link>
        <button className="px-6 py-3 bg-primary text-black rounded-full hover:bg-munsell hover:text-white transition">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
