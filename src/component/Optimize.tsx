import '../App.css'
import { Link } from 'react-router-dom'

function Optimize() {
  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center optimize ">
        <div className="mt-20 "  >

          <h1 className=" text-[50px] font-semibold text-white">
            Revolutionizing  Link Optimization
          </h1>
        </div>

        <div className="flex mt-5 mb-10">
            <Link
				to='/signup'
				className="bg-[#005AE2] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-2"
			>
				Get Started
			</Link>
        </div>
      
      </div>
    </>
  )
}

export default Optimize
