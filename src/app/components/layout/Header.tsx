
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  



export default function Header(){
    return(
        <header className="flex justify-between py-4 px-4 bg-slate-300 font-bold text-xl max-w-screen-2xl mx-auto">
<h1><b>AFSHAN AHMAR</b></h1>
        {/*logo*/}
        <div></div>
        {/*Navbuttons*/}
            <ul className="hidden md:block">
            <Sheet>
  <SheetTrigger>Menu</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



                <li className="space-x-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                </li>
            </ul>

            
        </header>
    )
}