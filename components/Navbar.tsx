import Image from "next/image"
import logo from "/assets/images/logo.png"

export const Navbar = () => {
    return <nav className="p-5">
        <Image src={logo} alt="hey" width={100} height={100}/>
    </nav>
} 