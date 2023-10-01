import Layout from "@/layout";
import { SessionProvider } from "next-auth/react";

const profilePage: React.FC = () => {
  return (
    <SessionProvider>
      <Layout>
        <div className="mt-24 w-[90%] mx-auto pb-24">salom alek</div>
      </Layout>
    </SessionProvider>
  );
};

export default profilePage;
