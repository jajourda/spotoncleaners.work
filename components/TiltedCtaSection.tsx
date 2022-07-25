import * as React from 'react';

export interface ITitledCtaSectionProps {
    heading: string;
    line1: string;
    line2: string;
    linkText: string;
    linkHref: string;
    imgSrc: string;
    imgAlt: string;
    icon: React.ReactElement[];
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
                                    href={props.linkHref}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >

                                    <div className='item my-4 w-full  text-3xl font-bold'>{props.icon}{props.linkText}</div>
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
