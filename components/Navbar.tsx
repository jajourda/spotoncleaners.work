import * as React from 'react';

export interface INavbarProps {
}

export default function Navbar() {
    return (
        <header className='w-full'>
            {/* <!-- Navbar --> */}
            <nav
                className="navbar navbar-expand-md shadow-lg py-2 bg-richBlue relative flex items-center w-full justify-between"
            >
                <div className="px-6">
                    <button
                        className="navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-yellow hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="w-5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                        <a className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
                            <img src="/logo-yellow.svg" style={{ height: '45px', fill: 'white' }} alt=""
                                loading="lazy" />
                        </a>
                        <ul className="navbar-nav mr-auto flex flex-col md:flex-row">
                            <li className="nav-item">
                                <a
                                    className="nav-link block p-2 text-yellow hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                                    href="#!"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >Services</a
                                >
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link block p-2 text-yellow hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                                    href="#!"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >Why Spot On</a
                                >
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link block p-2 text-yellow hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                                    href="#!"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >Deals</a
                                >
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link block p-2 text-yellow hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                                    href="#!"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >Neighbors</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar --> */}

            {/* <!-- Background image --> */}
            <div
                className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/handnew.jpg')",
                    height: "500px"
                }}
            >
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"

                >
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white">
                            <figure>
                                <img src="/logo.svg" alt="" width={500} />
                            </figure>
                            <h2 className="font-semibold text-black text-4xl mb-4">Your cleaning sidekick.</h2>
                            <h4 className="font-light text-xl text-black mb-6">We'll spot you bro.</h4>
                            <a
                                className="inline-block px-7 py-3 mb-1 border-2 border-richBlue text-richBlue font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >Call to action</a
                            >
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Background image --> */}
        </header>
    );
}
