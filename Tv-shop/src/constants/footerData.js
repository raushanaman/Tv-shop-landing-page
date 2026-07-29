import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footerData = {
  company: {
    title: "TV Shop",
    description:
      "Premium Smart TVs for every home. Discover the latest technology from top brands.",
  },

  quickLinks: [
    "Home",
    "Products",
    "Categories",
    "About",
  ],

  categories: [
    "OLED TVs",
    "QLED TVs",
    "4K UHD",
    "Gaming TVs",
  ],

  contact: [
    "+91 9876543210",
    "support@tvshop.com",
    "New Delhi, India",
  ],

  socialLinks: [
    {
      id: 1,
      icon: FaFacebook,
      url: "#",
    },
    {
      id: 2,
      icon: FaInstagram,
      url: "#",
    },
    {
      id: 3,
      icon: FaTwitter,
      url: "#",
    },
    {
      id: 4,
      icon: FaYoutube,
      url: "#",
    },
  ],
};

export default footerData;