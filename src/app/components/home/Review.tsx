import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Review = () => {
    return (
        <section className='max-w-[1300px] w-[95%] mx-auto px-[39px] py-[50px] md:py-[99px] flex flex-col md:w-full items-center rounded-[24px] md:rounded-none justify-start review_bg min-h-[550px] md:min-h-[750px]'>
            <div className='flex flex-col gap-[16px] md:gap-[32px] '>
                <h2 className='text-[32px] leading-[32px] text-center md:text-[64px] md:leading-[75px] font-medium playfair text-white'>
                    Leave a review → <br />
                    Get my next book free
                </h2>
                <p className='text-center text-base md:text-lg font-normal lato text-[#FFFFFF]'>If The Start Switch helped you, leave a short honest review and send me proof.</p>
                <p className='text-center text-lg font-bold lato text-[#FFFFFF]'>I'll personally send you a free early copy of my next book - The Hustle Delusion- before it launches.</p>
                <div className='w-full md:w-[566px] bg-white mx-auto py-[16px] px-[32px] md:py-[20px] h-[56px] md:h-[64px] flex items-center gap-[10px] rounded-[90px]'>
                    <img src="/images/email.png" alt="" />
                    <input type="email" placeholder='Qwerty99@gmail.com' />
                </div>
                <div className='flex justify-center items-center gap-2.5 md:gap-3 flex-wrap'>
                    <button className='w-[153px] h-[50px] md:w-[183px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] md:border-none playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#FFFFFF] flex justify-between items-center'>
                        Send Proof
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                    </button>
                    <button className='w-[154px] h-[50px] md:w-[185px] md:h-[60px] p-2.5 pl-[22px] md:p-3 md:pl-[26px] rounded-[28px] md:rounded-[30px] bg-[#FFFFFF] border border-[#CD623B] md:border-none playfair text-[15px] md:text-lg leading-[21px] md:leading-[26px] text-[#0C0407] flex justify-between items-center'>
                        Select a file
                        <span className='w-[30px] md:w-9 h-[30px] md:h-9 rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Review
