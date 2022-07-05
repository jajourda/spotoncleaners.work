import * as React from 'react';

export interface IExtrasProps {
}

export default function Extras() {
    return (
        <div>

            <h1 className="text-6xl font-bold">
                Website coming{' '}
                <a className="text-blue" href="https://nextjs.org">
                    soon!
                </a>
            </h1>





            {/* expereiment with tw elements */}


            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%' }}>
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg" className="block w-full" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%' }}>
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" className="block w-full" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%' }}>
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" className="block w-full" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="flex flex-wrap justify-center space-x-2 items-end">
                <span
                    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                    <img className="rounded-full w-9 h-9 max-w-none" alt="A"
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                    <span className="flex items-center px-3 py-2">
                        John Doe
                    </span>
                    <button className="bg-transparent hover focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                            className="w-3 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512">
                            <path fill="currentColor"
                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                            </path>
                        </svg>
                    </button>
                </span>

                <span
                    className="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                    <img className="rounded-full w-11 h-11 max-w-none" alt="A"
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                    <span className="flex items-center px-3 py-2">
                        John Doe
                    </span>
                    <button className="bg-transparent hover focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                            className="w-3 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512">
                            <path fill="currentColor"
                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                            </path>
                        </svg>
                    </button>
                </span>

                <span
                    className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                    <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                    <span className="flex items-center px-3 py-2">
                        John Doe
                    </span>
                    <button className="bg-transparent hover focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                            className="w-3 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512">
                            <path fill="currentColor"
                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                            </path>
                        </svg>
                    </button>
                </span>
            </div>


            <div
                className="flex w-full p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                style={{
                    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
                    height: "400px"
                }}
            >
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                >
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white">
                            <h2 className="font-semibold text-4xl mb-4">Heading</h2>
                            <h4 className="font-semibold text-xl mb-6">Subheading</h4>
                            <a
                                className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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


            <button type="button" className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            Modal body text goes here.
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
}
