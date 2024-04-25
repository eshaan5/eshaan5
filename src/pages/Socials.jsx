import React from "react";
import { FaInstagram, FaLinkedinIn, FaMediumM, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";

const Socials = () => {
  return (
    <section className="max-container w-[100vw] gap-10">
      <div className="flex gap-10">
        <div className="md:flex flex-col gap-10 mt-20 xs:hidden">
          <a href="https://www.instagram.com/code.hearted.voyager/" target="_blank">
            <FaInstagram size={30} color="#d62976" />
          </a>
          <a href="https://www.linkedin.com/in/eshaanbagga/" target="_blank">
            <FaLinkedinIn size={30} color="#0077B5" />
          </a>
          <a href="https://twitter.com/Esh_tastic" target="_blank">
            <FaXTwitter size={30} />
          </a>
        </div>
        <div className="flex gap-10 w-[80vw] md:flex-row xs:flex-col">
          <iframe src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25401785" frameborder="0" className="xs:w-[100%] md:w-[50%]" height="500"></iframe>
          <iframe src="https://widgets.sociablekit.com/medium-publication-feed/iframe/25401822" frameborder="0" className="xs:w-[100%] md:w-[50%]" height="500"></iframe>
        </div>
        <div className="md:flex flex-col gap-10 mt-20 xs:hidden">
          <a href="https://github.com/eshaan5" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://medium.com/@eshaanbagga" target="_blank">
            <FaMediumM size={30} />
          </a>
          {/* <a href="https://leetcode.com/eshaanbagga/" target="_blank">
            <SiLeetcode size={30} color="#48D1CC" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/eshaanbagga/" target="_blank">
            <SiGeeksforgeeks size={30} color="green" />
          </a>
          <a href="https://www.naukri.com/code360/profile/b39092f7-9be1-49e1-b11e-d9c8660ecded" target="_blank">
            <SiCodingninjas size={30} color="orange" />
          </a> */}
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-24 gap-16 sm:hidden">
        <a href="https://www.instagram.com/code.hearted.voyager/" target="_blank">
          <FaInstagram size={30} color="#d62976" />
        </a>
        <a href="https://www.linkedin.com/in/eshaanbagga/" target="_blank">
          <FaLinkedinIn size={30} color="#0077B5" />
        </a>
        <a href="https://twitter.com/Esh_tastic" target="_blank">
          <FaXTwitter size={30} />
        </a>
        <a href="https://medium.com/@eshaanbagga" target="_blank">
          <FaMediumM size={30} />
        </a>
        <a href="https://github.com/eshaan5" target="_blank">
          <FaGithub size={30} />
        </a>
        {/* <a href="https://leetcode.com/eshaanbagga/" target="_blank">
          <SiLeetcode size={30} color="#48D1CC" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/eshaanbagga/" target="_blank">
          <SiGeeksforgeeks size={30} color="green" />
        </a>
        <a href="https://www.naukri.com/code360/profile/b39092f7-9be1-49e1-b11e-d9c8660ecded" target="_blank">
          <SiCodingninjas size={30} color="orange" />
        </a> */}
      </div>
    </section>
  );
};

export default Socials;
