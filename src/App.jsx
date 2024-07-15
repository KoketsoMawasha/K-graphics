import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <div className=''>
        <div className=' text-black py-4 px-8  grid grid-cols-2 justify-between w-full '>
          <div className="w-28
          "><img src="logo-graphics.png" alt="K Graphics Logo" /></div>
          <div className="flex justify-end align-middle invisible md:visible">
            <div className="w-28">About Us</div>
            <div className="w-28">Portfolio</div>
            <div className="w-28">Contact</div>
          </div>
        </div>
        {/* Hero Section  */}
        <div className="hero-section h-fit grid gap-6 grid-cols-1 md:grid-cols-2 md-grid-cols-2 p-8 place-items-center">
          <div>
            <p className="text-3xl font-bold text-black py-3">Graphics & accessories</p>
            <p className="text-md  text-black">At K Graphics, we specialize in transforming ordinary vehicles into extraordinary showcases of personality and style. Our custom car decals and stickers aren't just decorative; they're a powerful tool for self-expression and branding.</p>
          </div>
          <div>
          <img src="logo-graphics.png" alt="K Graphics"  className='w-1/2 mx-auto'/>
          </div>
        </div>

        {/* About Us Section  */}
        <div className='px-8 py-20 text-black mx-auto text-justify'>
          <p className='text-2xl mb-4 font-bold '>What We Do</p>
          <p className='mb-8 text-md'>Imagine your vehicle turning heads with unique designs that reflect your individuality or promote your business with striking, professional branding. Our high-quality decals are crafted to withstand the elements, ensuring your message stays vibrant and clear for years to come.
            <br /> <br />
          Whether you're looking to make a bold statement, advertise your business, or simply add a personal touch to your ride, our team of skilled designers will work with you to create custom solutions tailored to your vision. With our exceptional craftsmanship and attention to detail, you'll experience the true value of personalized, durable, and eye-catching decals.
          <br /> <br />
          Step into K Graphics and discover how we can help you stand out on the road. Your journey to unique and impactful vehicle branding starts here.
          </p> 
          <a href='https://wa.me/+27670957766' className="text-md border border-green-600 w-fit py-2 px-4 bg-green-500 text-gray-800">Enquire on WhatsApp</a>
        </div>

        {/* Portfolio Section  */}
        <div className="p-8 text-black">
          <p className="text-2xl mb-8 font-bold text-left ">Portfolio of Work</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            <img src="img-11.jpg" alt="" className='w-full h-72 object-cover' />
            <img src="portfolio-2.jpg" alt="" className='w-full h-72 object-cover' />
            <img src="portfolio-1.jpg" alt="" className='w-full h-72 object-cover' />
            <img src="img-10.jpg" alt="" className='w-full h-72 object-cover' />
            <img src="img-9.jpg" alt="" className='w-full h-72 object-cover' />
            <img src="img-8.jpg" alt="" className='w-full h-72' />
          </div>
        </div>

        {/* Contact Us Section  */} 
        <div className='px-8 py-20 text-left text-black'>
          <p className='text-2xl mb-4 font-bold'>Contact Us</p>
          <p className='mb-4'>K Graphics is open to serve you throughout the week. Visit us Monday through Saturday, from 8:00 AM to 4:00 PM, for all your custom car branding needs. We look forward to helping you add a unique touch to your vehicles!</p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <p className="text-xl font-semibold py-2">Contact</p>
              <p className="text-lg">067 095 7766</p>
              <p className="text-lg">078 506 9330</p>
            </div>
            <div className='text-left'>
              <p className="text-xl font-semibold py-2">Email</p>
              <p className="text-lg font-light">khulie503@gmail.com</p>
            </div>
            <div className='text-left'>
              <p className="text-xl font-semibold">Address</p>
              <p className="text-lg">Erasmus street, Bramley View, Johannesburg</p>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 px-8 py-20 text-left text-black '>
          <div className='place-content-center'><p className="text-lg font-bold ">Social Media Links</p></div>
          <a href='https://www.instagram.com/mr_decals_za/' className='place-self-start'>
          <svg className='w-16' width="58" height="58" viewBox="0 0 198 199" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.97 99.5763C197.97 149.468 160.997 190.715 112.968 197.408C108.477 198.031 103.882 198.357 99.2181 198.357C93.8346 198.357 88.5479 197.928 83.3997 197.097C36.3732 189.525 0.459839 148.742 0.459839 99.5763C0.459839 45.019 44.6769 0.78894 99.2112 0.78894C153.746 0.78894 197.97 45.019 197.97 99.5763Z" fill="#1877F2"/>
          <path d="M112.968 80.1055V101.625H139.581L135.367 130.614H112.968V197.402C108.477 198.025 103.882 198.35 99.2181 198.35C93.8346 198.35 88.5479 197.921 83.3996 197.09V130.614H58.8553V101.625H83.3996V75.2949C83.3996 58.9595 96.637 45.7112 112.975 45.7112V45.7251C113.023 45.7251 113.064 45.7112 113.113 45.7112H139.588V70.7819H122.288C117.147 70.7819 112.975 74.9557 112.975 80.0986L112.968 80.1055Z" fill="white"/>
          </svg>
          <p className="text-sm font-bold py-2">Instagram</p>
          </a>
          <a href='https://www.instagram.com/mr_decals_za/' className='place-self-start'>
          <svg width="auto" height="58" viewBox="0 0 198 199" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M99.2815 0.78894H98.8317C44.4151 0.78894 0.301758 44.9153 0.301758 99.3479V99.7978C0.301758 154.23 44.4151 198.357 98.8317 198.357H99.2815C153.698 198.357 197.811 154.23 197.811 99.7978V99.3479C197.811 44.9153 153.698 0.78894 99.2815 0.78894Z" fill="url(#paint0_linear_1_360)"/>
          <path d="M129.618 40.9837H68.5025C51.6184 40.9837 37.8828 54.7234 37.8828 71.6125V127.54C37.8828 144.429 51.6184 158.169 68.5025 158.169H129.618C146.502 158.169 160.237 144.429 160.237 127.54V71.6125C160.237 54.7234 146.502 40.9837 129.618 40.9837ZM48.6845 71.6125C48.6845 60.683 57.5763 51.7886 68.5025 51.7886H129.618C140.544 51.7886 149.436 60.683 149.436 71.6125V127.54C149.436 138.47 140.544 147.364 129.618 147.364H68.5025C57.5763 147.364 48.6845 138.47 48.6845 127.54V71.6125Z" fill="white"/>
          <path d="M99.0602 128.059C114.761 128.059 127.542 115.282 127.542 99.5695C127.542 83.8571 114.768 71.0795 99.0602 71.0795C83.3524 71.0795 70.5786 83.8571 70.5786 99.5695C70.5786 115.282 83.3524 128.059 99.0602 128.059ZM99.0602 81.8913C108.81 81.8913 116.74 89.8237 116.74 99.5764C116.74 109.329 108.81 117.262 99.0602 117.262C89.3103 117.262 81.3803 109.329 81.3803 99.5764C81.3803 89.8237 89.3103 81.8913 99.0602 81.8913Z" fill="white"/>
          <path d="M130.178 75.6824C134.406 75.6824 137.852 72.2423 137.852 68.0062C137.852 63.7701 134.413 60.33 130.178 60.33C125.943 60.33 122.504 63.7701 122.504 68.0062C122.504 72.2423 125.943 75.6824 130.178 75.6824Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_1_360" x1="29.157" y1="169.493" x2="168.997" y2="29.7008" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FAAD4F"/>
          <stop offset="0.35" stop-color="#DD2A7B"/>
          <stop offset="0.62" stop-color="#9537B0"/>
          <stop offset="1" stop-color="#515BD4"/>
          </linearGradient>
          </defs>
          </svg>
          <p className="text-sm font-bold py-2">Instagram</p>
          </a>
        </div>

    </div>
  )
}

export default App
