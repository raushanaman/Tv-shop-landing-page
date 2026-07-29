import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Container from "../../components/ui/Container";
import footerData from "../../constants/footerData";
import FooterColumn from "./FooterColumn";

const Footer = ()=>{
    return (

        <footer className="bg-slate-950 py-20">
            <Container>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    <div>

                        <h2 className="text-3xl font-bold text-white">
                            {footerData.company.title}
                        </h2>

                        <p className="mt-5 leading-7 text-slate-400">
                            {footerData.company.description}
                        </p>
                    <div className="mt-6 flex gap-4">
                        {footerData.socialLinks.map((social)=>{
                            const Icon = social.icon;
                            
                            return (
                                <a 
                                key={social.id}
                                href={social.url}
                                className="
                                rounded-full
                                bg-slate-800
                                p-3
                                transition-all
                                duration-300
                                hover:bg-slate-600"
                                >
                                    <Icon
                                     size={20}
                                     className="text-white"
                                     />
                                </a>
                            )
                        })}
                        </div>
                    </div>
                     <FooterColumn
            title="Quick Links"
            items={footerData.quickLinks}
          />

          <FooterColumn
            title="Categories"
            items={footerData.categories}
          />

          <FooterColumn
            title="Contact"
            items={footerData.contact}
          />
          <div
          className="
            mt-16
            border-t
            border-slate-800
            pt-8
            text-center
            text-slate-500
          "
        >
          © {new Date().getFullYear()} TV Shop.
          All Rights Reserved.
        </div>

                </div>

            </Container>
        </footer>
    )
}

export default Footer;