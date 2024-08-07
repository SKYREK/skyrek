import { Logo } from "../header/logo";

export function Footer(){
    return(
        <div className="bg-black text-white py-16 px-8 grid md:grid-cols-2 lg:grid-cols-12">
            <div className="flex flex-col gap-2 col-span-2 lg:col-span-4 mb-10 lg:mb-0 items-center lg:items-start">
                <Logo />
                <div className="flex flex-col gap-2 mt-2 items-center lg:items-start">
                    <p>hello@softzap.com</p>
                    <p>(239) 555-0108</p>
                    <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 items-center lg:items-start">
                <p className="font-bold text-sm tracking-wider text-gray-400 mb-2">Product</p>
                <a href="#">Overview</a>
                <a href="#">Features</a>
                <a href="#">Solutions</a>
                <a href="#">Tutorials</a>
                <a href="#">Pricing</a>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 items-center lg:items-start">
                <p className="font-bold text-sm tracking-wider text-gray-400 mb-2">Company</p>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">News</a>
                <a href="#">Media Kit</a>
                <a href="#">Contact</a>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 items-center lg:items-start mt-10 lg:mt-0">
                <p className="font-bold text-sm tracking-wider text-gray-400 mb-2">Collaborate</p>
                <a href="#">Partners</a>
                <a href="#">Partners Program</a>
                <a href="#">Affiliate Program</a>
                <a href="#">Community</a>
                <a href="#">HR Partner Program</a>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 items-center lg:items-start mt-10 lg:mt-0">
                <p className="font-bold text-sm tracking-wider text-gray-400 mb-2">Resources</p>
                <a href="#">Blog</a>
                <a href="#">Help Center</a>
                <a href="#">Tutorials</a>
                <a href="#">Tutorials</a>
                <a href="#">Support</a>            
            </div>
        </div>
    )
}