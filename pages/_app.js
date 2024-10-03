import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  const isAbout = router.pathname === '/About';

  return (
    <div>
      {!isAbout && <Navbar />}
      <Component {...pageProps} />
      {!isAbout && <Footer />}
    </div>
  );
}
