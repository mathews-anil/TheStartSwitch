
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Header = () => {
    return (
        <section className="bg-[#CD623B] fixed top-0 w-full min-h-[40px] z-50 flex justify-center items-center">
            <div className='max-w-[1300px] mx-auto flex justify-center items-center gap-[10px] '>
                <h3 className='text-sm font-semibold playfair text-white uppercase '>Stuck in your head?</h3>
                <Link href="https://www.amazon.com/dp/B0FH41DL25" target='_blank' rel="noopener">
                    <button className='hover:bg-[#CD623B] transition w-[140px] cursor-pointer h-[30px] p-2.5 font-semibold rounded-[28px] md:rounded-[30px] bg-[#151515] border border-[#FFFFFF] playfair text-[13px]  text-[#FFFFFF] flex justify-between items-center'>
                        Read the book
                        <span className='w-[20px]  h-[20px] rounded-full bg-[#CD623B] text-white flex items-center justify-center'><GoArrowUpRight /></span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Header
