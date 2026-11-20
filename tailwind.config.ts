import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
 theme:{extend:{colors:{ivory:"#F7F6F2",charcoal:"#20211F",graphite:"#41423F",stone:"#D9D5CC",taupe:"#B9AD9A",olive:"#48564A"},
 fontFamily:{serif:["Poppins","system-ui","sans-serif"],sans:["Poppins","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
