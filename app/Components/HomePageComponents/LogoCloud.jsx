// import React from "react";

// const LogoCloud = () => {
//   return (
//     <div>
//       <section className="bg-yellowGray-500">
//         <div className="container lg:max-w-[80%] mx-auto">
//           <div className="flex flex-wrap pt-10 pb-0 px-8 md:px-16 bg-white rounded-3xl">
//             <div className="w-full lg:w-1/2 px-4 my-auto">
//               <h4 className="sm:max-w-xs text-4xl font-extrabold leading-snug mb-10">
//                 Trusted by 400+ global brands
//               </h4>
//             </div>
//             <div className="w-full lg:w-1/2 px-4">
//               <div className="grid grid-cols-3 gap-5 items-center justify-center">
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/google.png"
//                     alt="Google"
//                   />
//                 </div>
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/apple.png"
//                     alt="Apple"
//                   />
//                 </div>
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/cisco.png"
//                     alt="Cisco"
//                   />
//                 </div>
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/amazon.png"
//                     alt="Amazon"
//                   />
//                 </div>
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/microsoft.png"
//                     alt="Microsoft"
//                   />
//                 </div>
//                 <div className="bg-gray-100">
//                   <img
//                     className="block mx-auto h-28 p-5"
//                     src="/pmi.png"
//                     alt="PMI"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LogoCloud;








import React from 'react'

const LogoCloud = () => {
  return (
    <div>
      <section className="py-26 bg-white relative overflow-hidden">
        {/* <img className="absolute top-0 right-0 w-1/2 md:h-full" src="https://static.shuffle.dev/components/preview/1e2964f9-c424-4ff6-bd7b-63756d5060ca/assets/public/nigodo-assets/background-elements/pattern-dots-2-indigo-light-right.svg" alt="" />
        <img className="absolute top-0 left-0 w-1/2 md:h-full" src="https://static.shuffle.dev/components/preview/1e2964f9-c424-4ff6-bd7b-63756d5060ca/assets/public/nigodo-assets/background-elements/pattern-dots-2-indigo-light-left.svg" alt="" /> */}
        <div className="container p-6 py-10 mx-auto relative">
          <h2 className="text-center text-3xl font-[lato] font-extrabold mb-6">Trusted by popular marketing brands</h2>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/google.png" alt="google" className='h-16' />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/apple.png" alt="apple" className='h-16' />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/cisco.png" alt="cisco" className='h-16' />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/amazon.png" className='h-16' alt="amazon" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/microsoft.png" className='h-16' alt="microsoft" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/pmi.png" className='h-16' alt="pmi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogoCloud