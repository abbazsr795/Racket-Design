import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./{components}/footer";
import Header from "./{components}/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Racket Design",
  description: "Functional and Minimal Components by Racket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {/* The App class allows the footer to permanently reside at the bottom of the page */}
        <div className="App">
          {/* This div component horizontally centers with a top margin */}
          <div className="flex flex-row justify-center mt-32">
            {children}
          </div>
        </div>
        {/* The Footer component */}
        <Footer/>
      </body>
    </html>
  );
}
