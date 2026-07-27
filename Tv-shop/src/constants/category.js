import {Tv, MonitorSmartphone, Gamepad2, Film,} from "lucide-react";
import TV5 from "../assets/images/hero-tv.png";
import Tv2 from "../assets/images/Tv2.png";
import tv3 from "../assets/images/tv3.png";
import tv4 from "../assets/images/tv4.png";

const categories = [
    {
        id:1,
        title: "OLED TVs",
        description: "Deep blacks & premium display",
        products: 24,
        image: Tv2,
        icon: Tv,

    },
    {
        id:2,
        title: "QLED TVs",
        description: "Vibrant colors & bright picture",
        products: 30,
        image: TV5,
        icon: MonitorSmartphone,
    },
    {
        id:3,
        title: "4K UHD",
        description: "Ultra high definition picture",
        products: 15,
        image: tv3,
        icon: Film,
    },
    {
        id:4,
        title: "Gaming",
        description: "Low input lag & smooth gameplay",
        products: 31,
        image: tv4,
        icon: Gamepad2,
    },
]

export default categories;