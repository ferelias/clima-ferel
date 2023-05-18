import React from 'react'
import '../assets/css/navbar.css'
import logo from '../assets/img/logo.png'

const NavBar = () => {
  return (
    <div className="text-light contenedor-nav">
      <div className='menu-left'>
        <img src={logo} className='img-logo'/>
      </div>
      <div className='menu-right'>
        <a href="https://github.com/ferelias" className='enlace'>
          <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7179 39.9025C6.20513 43.0563 6.20513 34.6461 2 33.5948M31.4359 46.2102V38.0733C31.5148 37.0707 31.3793 36.0628 31.0385 35.1166C30.6978 34.1704 30.1595 33.3076 29.4595 32.5856C36.0615 31.8497 43 29.3476 43 17.8676C42.9995 14.9321 41.8703 12.1091 39.8462 9.983C40.8046 7.41473 40.7369 4.57594 39.6569 2.05633C39.6569 2.05633 37.1759 1.32044 31.4359 5.16813C26.6168 3.86206 21.537 3.86206 16.7179 5.16813C10.9779 1.32044 8.49692 2.05633 8.49692 2.05633C7.417 4.57594 7.34923 7.41473 8.30769 9.983C6.26847 12.1249 5.13812 14.9734 5.15385 17.9307C5.15385 29.3266 12.0923 31.8286 18.6944 32.6486C18.0026 33.3635 17.4691 34.2159 17.1286 35.1505C16.7881 36.0851 16.6482 37.081 16.7179 38.0733V46.2102" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a href="https://openweathermap.org/api" className='enlace'>
          <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6516 15.4572C33.9734 15.4572 43.1516 12.3978 43.1516 8.62388C43.1516 4.84994 33.9734 1.79055 22.6516 1.79055C11.3298 1.79055 2.15161 4.84994 2.15161 8.62388C2.15161 12.3978 11.3298 15.4572 22.6516 15.4572Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M43.1516 24.5683C43.1516 28.3495 34.0405 31.4017 22.6516 31.4017C11.2627 31.4017 2.15161 28.3495 2.15161 24.5683" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.15161 8.62389V40.5128C2.15161 44.2939 11.2627 47.3461 22.6516 47.3461C34.0405 47.3461 43.1516 44.2939 43.1516 40.5128V8.62389" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </a>
        <a href="https://www.instagram.com/ferel.studio/?igshid=ZGUzMzM3NWJiOQ%3D%3D" className='enlace'>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.75 2H12.25C6.58908 2 2 6.58908 2 12.25V32.75C2 38.4109 6.58908 43 12.25 43H32.75C38.4109 43 43 38.4109 43 32.75V12.25C43 6.58908 38.4109 2 32.75 2Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.7 21.2085C30.953 22.9146 30.6616 24.6571 29.8672 26.188C29.0728 27.7189 27.8159 28.9604 26.2753 29.7358C24.7347 30.5113 22.9888 30.7812 21.2859 30.5072C19.5831 30.2332 18.01 29.4292 16.7904 28.2096C15.5708 26.99 14.7668 25.4169 14.4928 23.714C14.2188 22.0112 14.4887 20.2653 15.2642 18.7247C16.0396 17.1841 17.2811 15.9272 18.812 15.1328C20.3429 14.3384 22.0854 14.047 23.7915 14.3C25.5318 14.5581 27.1429 15.369 28.387 16.613C29.631 17.8571 30.4419 19.4682 30.7 21.2085Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M33.7749 11.225H33.7954" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NavBar
