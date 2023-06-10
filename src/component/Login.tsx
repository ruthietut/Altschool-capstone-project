import React from "react";

const Login = () => {
    <div className="2xl:container h-screen m-auto">
        
        <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
        <div className="relative h-full ml-auto lg:w-6/12">
            <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                <div className="space-y-4">
                    
                    <p className="font-medium text-lg text-gray-600">Login in with:</p>
                </div>
                
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                        <div className="flex gap-4 justify-center">
                            <img src="../src/assets/images/google icon" className="w-5" alt=""/>
                            <span className="block w-max font-medium tracking-wide text-sm text-blue-700"> Google</span>
                        </div>
                    </button>
                    <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                        <div className="flex gap-4 items-center justify-center text-white">
                        <img src="../src/assets/images/apple icon" alt="Image" className="w-5"/>

                            <span className="block w-max font-medium tracking-wide text-sm text-white">Apple</span>
                        </div>
                    </button>
                </div>

                <div role="hidden" className="mt-12 border-t">
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                </div>

                <form action="" className="space-y-6 py-6">
                    <div>
                        <input 
                                type="email" 
                                placeholder="Your Email"
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                    </div>

                    <div className="flex flex-col items-end">
                        <input 
                                type="password" 
                                placeholder="What's the secret word ?"
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                        <button type="reset" className="w-max p-3 -mr-3">
                            <span className="text-sm tracking-wide text-blue-600">Forgot password ?</span>
                        </button>
                    </div>

                    <div>
                        <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                            <span className="font-semibold text-white text-lg">Login</span>
                        </button>
                        <a href="#" type="reset" className="w-max p-3 -ml-3">
                            <span className="text-sm tracking-wide text-blue-600">Create new account</span>
                        </a>
                    </div>
                </form>

                <div className="border-t pt-12">
                    <div className="space-y-2 text-center">
                        <img src="../public/images/logo.svg" className="w-40 m-auto grayscale" alt=""/>
                        <span className="block text-sm tracking-wide text-gray-500">Get +50 modern blocks for free next month.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login