import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[1200px] mx-auto">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
