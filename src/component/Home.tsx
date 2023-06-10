import React from 'react'

const Home = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="mt-40">
        <h1 className="text-center text-[48px] font-semibold">
          Optimize Your Online Experience with Our
        </h1>
        <h1 className="text-center text-[48px] font-semibold">
          Advanced <span className="text-[#005AE2]">URL Shortening</span>{' '}
          Solution
        </h1>
      </div>
      <div className="mt-6">
        <p className="text-center font-medium text-[18px] leading-relaxed">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, <br />
          branded links, and domain customization options to reinforce your
          brand presence and <br />
          enhance user engagement.
        </p>
      </div>

      <div className="flex mt-10">
        <button className="bg-[#005AE2] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-2">
          Sign Up
        </button>
        <button className=" text-[#005AE2] font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Home
