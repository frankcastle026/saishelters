import type {Metadata} from "next";import "./globals.css";import Header from "@/components/Header";import Footer from "@/components/Footer";
export const metadata:Metadata={title:{default:"Sai Shelters | Building Trust, Creating Spaces",template:"%s | Sai Shelters"},description:"Sai Shelters: foundation built on trust and excellence.",openGraph:{title:"Sai Shelters",description:"Foundation built on trust and excellence.",type:"website"}};
export default function Root({children}:{children:React.ReactNode}){return(<html lang="en"><head>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/></head>
<body><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-ivory focus:p-3">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>)}
