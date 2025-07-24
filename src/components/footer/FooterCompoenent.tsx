import LogoImage from "@/assets/VehyxLogoWhite.png";
import Image from "next/image";
import InstagramIcon from "@/assets/InstagramIcon.png";
import XIcon from "@/assets/XIcon.png";
import LinkedInIcon from "@/assets/LinkedInIcon.png";

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-mixture text-white py-10 px-6 md:px-20 rounded-5xl m-8">
      <div className="mx-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm pb-16">
        <div>
          <Image src={LogoImage} alt="Vehyx Logo" width={120} height={40} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Product</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Used Cars for Sale
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Car Care
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Value
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Reports
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Sell My Car
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Car Research
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Recalls
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Find a Dealer
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Service Shop
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Sample Report
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Resources
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">About us</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:opacity-75 transition-all">
              About Vehyx
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Blog
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Press Room
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Careers We&apos;re Hiring!
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Help Center
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Learn more</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Marketplace
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Info
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Vehyx Community
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Customer Support
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all">
              Dealer Support
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={20}
              height={20}
              className="rounded-md"
            />
            <Image
              src={XIcon}
              alt="Twitter"
              width={20}
              height={20}
              className="rounded-md"
            />
            <Image
              src={LinkedInIcon}
              alt="LinkedIn"
              width={20}
              height={20}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
