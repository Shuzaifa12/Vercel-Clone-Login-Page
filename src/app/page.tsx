import Image from "next/image";

export default function Login_page (){
  return (
    <div>
      <div className="bg-[#0a0a0a] border-b border-b-[#24292e]">
        <header className="flex justify-between text-white ">
          <div className="mx-4 mt-2">
            <button>
            <Image src="/favicon.ico" alt="loading" width={50} height={80}></Image>
            </button>
          </div>
          <div className="flex items-center mx-4 my-2 space-x-1">
            <button className="w-20 h-fit p-1 text-[#555] font-bold">Contact</button>
            <button className="border border-[#24292e] rounded-lg w-20 h-fit p-1 font-bold hover:bg-[#555]">Sign Up</button>
          </div>
        </header>

        <div className="text-white my-8 text-center">

          <h1 className="text-3xl font-bold text-gray-200">Log in to Vercel</h1>

          <div className="flex flex-col items-center">

          <button className="bg-[#24292e] hover:bg-[#555] mt-4 p-3 font-bold rounded-lg w-80 border border-[#24292e] hover:border-[#555]">Continue with GitHub</button>

          <button className="bg-[#6b4fbb] hover:bg-[#8367D3] mt-2 p-3 font-bold rounded-lg w-80 border border-[#6b4fbb] hover:border-[#8367D3]">Continue with GitLab</button>

          <button className="bg-[#0052CC] hover:bg-[#1668E2] mt-2 p-3 font-bold rounded-lg w-80 border border-[#0052CC] hover:border-[#1668E2]">Continue with BitBucket</button>
          
          <hr className="mt-5 mb-4 w-80 border-[#24292e] "/>

          <button className=" hover:bg-[#555] mt-2 p-3 font-bold rounded-lg w-80 border border-[#24292e] hover:border-[#555]">Continue with SAML SSO</button>

          <button className=" hover:bg-[#555] mt-2 p-3 font-bold rounded-lg w-80 border border-[#24292e] hover:border-[#555]">Login with PassKey</button>

          <a href="" className="mt-5 mb-2 text-[#1668E2] hover:underline">Continue with Email?</a>

          </div>

        </div>
      </div>

      <div className="text-center border-b border-[#24292e]"> 
      <a href="" className=" text-[#1668E2] hover:underline py-10 block">Continue with Email?Sign Up</a>
      </div>
      
     <div className="text-white">
      <div className="mx-24 my-8 flex justify-between">
        <div className="flex space-x-3 p-1">
          <p>@ 2024</p>
          <button className="text-[#1668E2] hover:bg-[#24292e] hover:rounded-md"><li>All systems normal</li></button>
        </div>
        <div>
          <button className="hover:bg-[#24292e] hover:rounded-md text-[#555]">Command Menu</button>
        </div>
      </div>
      <div className="flex justify-between mx-24 my-5" >
        <div className="space-x-6">
          <button>git</button>
          <button>twit</button>
        </div>
        <div>
          <ul className="flex space-x-12">
          <li className="cursor-pointer text-[#555]  hover:text-white">Home</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Documentation</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Guides</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Help</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Contact Sale</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Blog</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Changelog</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Pricing</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Enterprise</li>
          <li className="cursor-pointer text-[#555]  hover:text-white">Legal</li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  )
}
