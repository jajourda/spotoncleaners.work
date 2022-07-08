import * as React from 'react';

export interface ITitledCtaSectionProps {
    heading: string;
    line1: string;
    line2: string;
    linkText: string;
    linkHref: string;
    imgSrc: string;
    imgAlt: string;
}
const css = `
@media (min-width: 992px) {
    .rotate-lg-6 {
      transform: rotate(3deg);
    }
  }
`

export default function TitledCtaSection(props: ITitledCtaSectionProps) {
    return (
        // <!-- Section: Design Block -->
        <section className="mb-32 bg-richBlue text-gray-800 text-center">
            <style>
                {css}
            </style>

            <div className="px-6 py-12 md:px-12">
                <div className="container mx-auto xl:px-32">
                    <div className="grid lg:grid-cols-2 flex items-center">
                        <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                            <div
                                className="relative block bg-white rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                style={{
                                    // background: "hsla(0, 0%, 100%, 0.55)",
                                    // backdropFilter: "blur(30px)",
                                    zIndex: 1
                                }}>
                                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8">
                                    <div className='aquino text-richBlue text-7xl mb-4'>{props.heading}</div>
                                    {props.line1} <br /><span className="text-blue-600">{props.line2}</span>
                                </h2>
                                <a
                                    type="button"
                                    className="flex  items-center m-auto w-full sm:w-3/4  px-7 py-3 bg-richBlue text-yellow font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    href=''
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >

                                    <div className='item my-4 w-full  text-3xl font-bold'><svg className='inline -mt-3 mr-3 h-8 lg:h-10 fill-yellow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}<path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>{props.linkText}</div>
                                </a>
                            </div>
                        </div>
                        <div className="md:mb-12 lg:mb-0">
                            <img
                                src={props.imgSrc}
                                className="w-full rounded-lg shadow-lg rotate-lg-6"
                                alt={props.imgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!-- Section: Design Block -->
    );
}
