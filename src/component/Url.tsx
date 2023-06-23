import React from 'react'
import '../App.css'


function Url() {
    

    return (
        <>
       <div className="2xl:container h-auto m-auto url-bg">
     
      <div className="relative mx-auto lg:w-6/12 bg-white rounded-md max-w-lg">
        <div className="m-auto py-4 px-6 xl:w-10/12">

          <form action="" className="space-y-6 py-6">
          <div>
              <input
                type="text" placeholder='Paste URL here ...'
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] text-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>
            <div className="flex justify-between gap-5">
                
              <div>
                <input
                  type="text" placeholder='Choose Domain'
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div>
                <input
                  type="text" placeholder='Type Alias here'
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-[#005AE2] bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
            </div>
          


            <div>
            <button className="w-full px-6 py-3 rounded-full bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Trim URL</span>
              </button>
             
            <p className="text-center text-sm text-[#005AE2] mt-4 w-">
                  By clicking TrimURL, I agree to the
        
                  <span className="text-[#005AE2] font-bold">
                    Terms of Service, Privacy Policy
                  </span>{' '}
                  and <span className="text-[#005AE2]">Use of Cookies</span>
                              
                </p>{' '}

              
            </div>
          </form>
        </div>
      </div>
    </div>
            
        </>
    )
}

export default Url