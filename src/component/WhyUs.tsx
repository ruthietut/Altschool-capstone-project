import link_round from "../assets/images/link-round.png";
import custom_urls from "../assets/images/custom_urls.png";
import qr_codes from "../assets/images/qr_codes.png";
import data_analytics from "../assets/images/data_analytics.png";

const WhyUs = () => {
  return (
    <div className='w-full'>
        <div className='bg-[#F9FBFD] flex flex-row justify-between py-12 px-36'>
            <div>
                <h1 className='text-3xl font-bold'>One Stop. <br />Four <span className='text-[#005AE2]'>Possibilities.</span> </h1>
            </div>
            <div className='flex flex-row gap-16'>
                <div className='w-28'>
                    <h1 className='text-3xl font-semibold'>3M</h1>
                    <p className='text-md'>Active users</p>
                </div>
                <div className='w-36'>
                    <h1 className='text-3xl font-semibold'>60M</h1>
                    <p>Links & QR codes created</p>
                </div>  
                <div className='w-36'>
                    <h1 className='text-3xl font-semibold'>1B</h1>
                    <p>Clicked & Scanned connections</p>
                </div>
                <div className='w-36'>
                    <h1 className='text-3xl font-semibold'>300K</h1>
                    <p>App Integations</p>
                </div>
            </div>
        </div>
        <div className='bg-white px-28 py-28 flex flex-row'>
            <div>
                <h1 className='text-3xl font-bold'>Why Choose <span className='text-[#005AE2]'>Scissors</span></h1>
                <p className='mt-3 text-sm font-normal w-[70%] leading-relaxed text-justify'>
                Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. 
                </p>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-12">
                    <div className='flex flex-col justify-between'>
                        <img src={link_round} className="w-10 mb-5" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl leading-wider mb-1">URL Shortening</h1>
                            <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <img src={custom_urls} className="w-10 mb-5" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl leading-wider mb-1">Custom URLs</h1>
                            <p>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <img src={qr_codes} className="w-10 mb-5" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl leading-wider mb-1">QR Codes</h1>
                            <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <img src={data_analytics} className="w-10 mb-5" alt="" />
                        <div>
                            <h1 className="font-bold text-2xl leading-wider mb-1">Data Analytics</h1>
                            <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs