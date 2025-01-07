import React from "react";
import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="dark:bg-neutral-900 bg-black">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src={logo1}
                class="h-20 w-20"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Game Heaven
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <a href="home" class="mb-8 text-sm font-semibold uppercase text-white">
                Link
              </a>
              <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-2 mt-4">
                <li >
                  <a class="hover:underline">
                  Home
                  </a>
                </li>
                <li>
                  <a class="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a class="hover:underline">
                    Top game
                  </a>
                </li>
                <li>
                  <Link to='/allReviews' class="hover:underline">
                    All reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                Follow us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link
                    href="https://github.com/TanvirMain49"
                    class="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.com/"
                    class="hover:underline"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link href="#" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="https://game-heaven-1117d.web.app/" class="hover:underline">
              Game Heaven™
            </Link>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0 text-xl">
            <Link
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook />
              <span class="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDiscord />
              <span class="sr-only">Discord community</span>
            </Link>
            <Link
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />
              <span class="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span class="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
