import React from 'react';
import Image from 'next/image';
import LogoImage from '@/assets/VehyxLogoWhite.png';
import Link from 'next/link';

const NavbarComponent = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* Logo */}
      <div>
        <Image src={LogoImage} alt="Vehyx Logo" width={120} height={40} />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-12 text-white font-medium">
        <li className="text-primary font-medium cursor-pointer">Home</li>
        <li className="hover:text-primary cursor-pointer">Services</li>
        <li className="hover:text-primary cursor-pointer">Marketplace</li>
        <li className="hover:text-primary cursor-pointer">Community</li>
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
