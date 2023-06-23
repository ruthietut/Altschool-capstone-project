import React from 'react'
import checkIcon from "../assets/images/check-circle.png"

function Price() {
    

    return (
        <>
          <div className='text-center bg-slate-400'>
            <h1 className='font-bold text-4xl'>A <span className='text-[#005AE2]'>price perfect</span> for your needs</h1>
            <p className='text-sm p-2'>From catering for your personal, business, events, social needs, you can be <br></br>rest assured we have you in mind in our pricing.</p>

            <div className='grid grid-cols-3 mt-10 mb-10'>
                <div className='w-30 bg-red-300 '>
                    <p>Basic</p>
                    <h3>Free</h3>
                    <p>Free  plan for all users</p>
                    <ul>
                        <li><span><img src={checkIcon} alt="" /></span>Unlimited URL Shortening</li>
                        <li><span><img src={checkIcon} alt="" /></span>Basic Link Analytics</li>
                        <li><span><img src={checkIcon} alt="" /></span>Customizable Short Links</li>
                        <li><span><img src={checkIcon} alt="" /></span>Standard Support</li>
                        <li><span><img src={checkIcon} alt="" /></span>Ad-supported</li>
                    </ul>
                </div>
                <div className=' bg-orange-200 h-96'>
                    <p>Professional</p>
                    <h3>$15/Month </h3>
                    <p>Ideal for business creators</p>
                    <ul>
                        <li><span><img src={checkIcon} alt="" /></span>Enhanced Link Analytics</li>
                        <li><span><img src={checkIcon} alt="" /></span>Custom Branded Domains</li>
                        <li><span><img src={checkIcon} alt="" /></span>Advanced Link Customization</li>
                        <li><span><img src={checkIcon} alt="" /></span>Priority Support</li>
                        <li><span><img src={checkIcon} alt="" /></span>Ad-free Experirnce</li>
                    </ul>
                </div>
                <div className='bg-orange-800'>
                    <p>Teams</p>
                    <h3>$25/Month</h3>
                    <p>Share with up to 10 users</p>
                    <ul>
                        <li><span><img src={checkIcon} alt="" /></span>Team Collaboration</li>
                        <li><span><img src={checkIcon} alt="" /></span>Users Roles and Permissions</li>
                        <li><span><img src={checkIcon} alt="" /></span>Enhanced Security</li>
                        <li><span><img src={checkIcon} alt="" /></span>API Access</li>
                        <li><span><img src={checkIcon} alt="" /></span>Dedicated Account Manager</li>
                    </ul>
                </div>
            </div>

            <button className=" px-6 py-3 rounded-full bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Select Pricing</span>
              </button>            </div>  
        </>
    )
}

export default Price
