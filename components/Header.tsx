"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wrapper } from "./Wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  return (
    <header className="bg-gradient-to-r from-[#F6411B]/5 to-blue-500/5 backdrop-blur-sm border-b border-[#F6411B]/10 sticky top-0 z-50">
      <Wrapper>
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className={`text-xl font-bold ${
                pathname === "/swap" 
                  ? "bg-black" 
                  : "bg-[#F6411B] hover:text-[#F6411B] hover:bg-[#F6411B]/5"
              } bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-2`}
          >
            <img
              src="/patty.png"
              alt="Patty"
              className={`w-6 h-6 $`}
            />
            SoloPatty
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/swap" 
              className={`px-4 py-2 rounded-xl transition-all ${
                pathname === "/swap" 
                  ? "bg-[#F6411B]/10 text-[#F6411B] font-medium" 
                  : "text-gray-500 hover:text-[#F6411B] hover:bg-[#F6411B]/5"
              }`}
            >
              Swap
            </Link>
            
            <ConnectButton
              showBalance={false}
              accountStatus="address"
              label="Connect"
            />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export { Header };
