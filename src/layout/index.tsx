import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-[1200px] mx-auto overflow-x-hidden">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main>
        <div className="bg-gray-100">{children}</div>
      </main>

      {/* Footer */}
      <footer>
        <div className="flex md:block lg:block"></div>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
