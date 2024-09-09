import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg"
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/Button";


export const Header = () => {
  return <header className="py-4   border-b border-white/15" >
          <div className="container ">
            <div className="flex justify-between items-center border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto ">
              <div >
                <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
                <LogoIcon className="w-8 h-8 "/>
              </div>
              </div>
              <nav className="flex gap-8 items-center  ">
                <a href="#" className="text-white/70 hover:text-white transition">Features</a>
                <a href="#" className="text-white/70 hover:text-white transition">Features</a>
                <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              </nav>
              <div className="flex gap-4 items-center ">
              <Button>Sign Up</Button>
              <MenuIcon className=""/>
              </div>
            </div>
          </div>
          
        </header>
};