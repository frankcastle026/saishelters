import {cva,type VariantProps} from "class-variance-authority";import {cn} from "@/lib/utils";import Link from "next/link";
const v=cva("inline-flex items-center justify-center gap-2 px-7 py-4 text-[13px] font-semibold transition-colors",{variants:{variant:{solid:"bg-charcoal text-ivory hover:bg-olive",outline:"border border-charcoal hover:bg-charcoal hover:text-ivory",light:"bg-ivory text-charcoal hover:bg-stone"}},defaultVariants:{variant:"solid"}});
export function ButtonLink({href,variant,className,children}:{href:string;className?:string;children:React.ReactNode}&VariantProps<typeof v>){return <Link href={href} className={cn(v({variant}),className)}>{children}</Link>}
export {v as buttonVariants};
