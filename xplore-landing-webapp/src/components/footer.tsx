import React from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, Logo } from "./icons";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left section */}
        <div className="md:w-1/2">
          {/* Logo */}
          <Logo />

          {/* Menu */}
          <div className="mb-6 mt-5">
            <h3 className="font-semibold text-lg mb-2">MENU</h3>
            <hr className="border-white mb-4 w-32" />
            <div className="grid grid-cols-2 gap-y-1">
              <a href="#" className="text-sm hover:underline">HOME</a>
              <a href="#" className="text-sm hover:underline">CONTACT US</a>
              <a href="#" className="text-sm hover:underline">ABOUT</a>
            </div>
          </div>

          {/* Input and FAQs */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-2">INPUT AND FAQS</h3>
            <hr className="border-white mb-4 w-32" />
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end">
          {/* Social icons */}
          <div className="flex gap-4 mb-6">
            <Link isExternal href={siteConfig.links.facebook} title="facebook">
              <FacebookIcon />
            </Link>
            <Link isExternal href={siteConfig.links.instagram} title="instagram">
              <InstagramIcon />
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} title="linkedin">
              <LinkedInIcon />
            </Link>
          </div>

          {/* Download App */}
          <div className="bg-[#7B75E0] p-6 rounded-3xl w-full max-w-md">
            <h3 className="font-semibold mb-2">DOWNLOAD OUR APPLICATION</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary-500 text-[#6A63D9] font-semibold py-4 px-6 rounded-full flex items-center gap-2">
              <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_652_362)">
                <path d="M2.89196 24.5589C3.90895 26.0229 5.29949 28.0247 7.09357 28.0247V28.0212H7.18498C7.86984 27.9777 8.53946 27.7985 9.15543 27.4938H9.17267C9.95229 27.1126 10.8069 26.9128 11.6735 26.9091C12.5034 26.9182 13.3208 27.1135 14.0664 27.4808H14.0716C14.6946 27.797 15.38 27.9686 16.0774 27.983H16.1792C17.9841 27.956 19.1378 26.4391 20.3451 24.6093C21.1739 23.4142 21.8163 22.0984 22.25 20.7076V20.7006C21.5704 20.4123 20.9494 20 20.4184 19.4843C19.832 18.9268 19.3666 18.2531 19.0513 17.5055C18.7361 16.7579 18.578 15.9525 18.5868 15.1403C18.6038 14.0861 18.8836 13.0531 19.4003 12.1361C19.9169 11.2192 20.654 10.4478 21.5438 9.89272C20.9766 9.07776 20.2289 8.40699 19.3599 7.93351C18.4909 7.46002 17.5245 7.1968 16.537 7.16468C16.3724 7.14991 16.2249 7.14209 16.0989 7.14209C15.0096 7.21105 13.9425 7.48387 12.9523 7.9466H12.9316C12.4223 8.19534 11.8757 8.3574 11.3139 8.42618C10.7214 8.36295 10.1448 8.1944 9.61074 7.92836H9.59177C8.73578 7.51905 7.80992 7.2787 6.86419 7.22029H6.78658C5.63538 7.25676 4.51323 7.5933 3.52964 8.19705C2.54603 8.8008 1.73459 9.65114 1.17449 10.6651C0.0454163 12.9 -0.282374 15.4595 0.246607 17.91C0.663483 20.2825 1.5618 22.5428 2.88536 24.5494L2.89196 24.5589Z" fill="#F2F2F2"/>
                <path d="M11.1 6.844C11.1889 6.85197 11.2781 6.85546 11.3674 6.85443C12.0995 6.81719 12.8157 6.62494 13.4691 6.29023C14.1225 5.9555 14.6987 5.48583 15.1599 4.91178C16.1822 3.68276 16.6844 2.09846 16.5586 0.5C15.0035 0.663702 13.5668 1.41196 12.535 2.59555C11.5165 3.76402 11.0004 5.29218 11.1 6.844Z" fill="#F2F2F2"/>
                </g>
                <defs>
                <clipPath id="clip0_652_362">
                <rect width="23" height="28" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
              <span>APP STORE</span>
              </button>
              <button className="bg-secondary-500 text-[#6A63D9] font-semibold py-4 px-6 rounded-full flex items-center gap-2">
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_652_368)">
                  <path d="M16.5186 16.0951L13.066 12.636L1.64111 24.2387C1.75032 24.1974 1.85619 24.1478 1.95776 24.0902L16.5186 16.0951Z" fill="#F2F2F2"/>
                  <path d="M0.00850522 1.44011C0.0144238 2.85543 0.107148 21.7237 0.116026 22.9134C0.0902982 23.1611 0.125802 23.4113 0.219399 23.642C0.312996 23.8725 0.4618 24.0765 0.652648 24.2357L12.5668 12.1372L0.600367 0.143555C0.393848 0.285546 0.229684 0.481195 0.125431 0.709572C0.0211803 0.937949 -0.0192362 1.19047 0.00850522 1.44011Z" fill="#F2F2F2"/>
                  <path d="M17.1585 8.48145L13.561 12.1345L17.1625 15.7421L22.1124 13.0234C22.7043 12.6957 23.3336 11.8604 22.1124 11.1923L17.1585 8.48145Z" fill="#F2F2F2"/>
                  <path d="M1.95772 0.159347C1.7996 0.0753001 1.62738 0.0212781 1.44971 0L13.0631 11.6343L16.5156 8.12869L1.95772 0.159347Z" fill="#F2F2F2"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_652_368">
                  <rect width="23" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <span>PLAY STORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-white opacity-30" />
      <p className="text-sm text-center">All rights reserved</p>
    </footer>
  );
};

export default Footer;
