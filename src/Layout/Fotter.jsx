import React from 'react';
import { Link } from 'react-router-dom';

function Fotter() {
    return (
        <div className='flex justify-center items-center p-6 bg-gray-800 text-white border-t border-gray-700 flex-col gap-5'>
            <div className='flex w-full justify-around md:justify-center md:gap-20'>
                <div id='facebook' className='transition transform hover:scale-110 animate-scaleUp'>
                    <Link to='https://www.facebook.com/people/Abhilash-Sarma/pfbid0RtcR9JVs1mdtfNywCUQ6uDEXzvhC3efyxsTnscL73QHs464QsmMZi79irrtLoAkol/?mibextid=rS40aB7S9Ucbxw6v'>
                        <svg
                            stroke="currentColor"
                            fill="#1877F2"
                            strokeWidth="0"
                            viewBox="0 0 320 512"
                            className="icon1"
                            height="35px"
                            width="35px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                    </Link>
                </div>
                <div id='twitter' className='transition transform hover:scale-110 animate-scaleUp'>
                    <Link to='https://x.com/i/flow/login?redirect_after_login=%2Fasarma346'>
                        <svg
                            stroke="currentColor"
                            fill="#1DA1F2"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="icon2"
                            height="35px"
                            width="35px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M459.4 151.7c.32 4.54.32 9.1.32 13.66 0 138.72-105.58 298.56-298.56 298.56-59.5 0-114.68-17.22-161.11-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <span className="text-sm text-gray-600 text-center block mt-5">
                &copy; {new Date().getFullYear()} || All rights are reserved to @Abhilash
            </span>
        </div>
    );
}

export default Fotter;
