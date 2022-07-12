import * as React from 'react';
import FeatureSectionIcon from './FeatureSectionIcon';

export interface FeatureSectionPoints {
    title: string;
    description: string;
}

export interface IFeatureSectionProps {
    bg: string;
    title: string;
    subTitle: string;
    imgSrc: string;
    imgOrder?: string;
    imgHeading: string;
    imgText: string;
    features: FeatureSectionPoints[];

}

export default function FeatureSection(props: IFeatureSectionProps) {
    console.log(props, 'feature')
    return (
        // <!-- Section: Design Block -->
        <section className={`w-full text-white bg-${props.bg} py-16 px-8`}>
            <h2 className={`w-full text-6xl sm:text-8xl font-bold mb-12 text-center text-${props.bg === 'richBlue' ? "yellow" : "richBlue"} aquino`}>{props.title}
                <div className={`text-${props.bg === 'richBlue' ? "white" : "black"} oswald text-4xl sm:text-6xl`}>{props.subTitle}</div>
            </h2>

            <div className="flex flex-wrap items-center">
                <div className={`grow-0 ${props.imgOrder ? "order-" + props.imgOrder : ""} shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6`}>
                    <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
                        data-mdb-ripple-color="light" style={{ backgroundPosition: "50%" }}>
                        <img src={props.imgSrc} className="w-full" />
                        <a href="#!">
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                            >
                                <div className="flex justify-center items-center h-full">
                                    <div className="px-6 py-12 md:px-12 text-white text-center">
                                        <h3 className="text-3xl text-black uppercase font-bold mb-6">
                                            {props.imgHeading}
                                        </h3>
                                        <p className='text-black'>
                                            {props.imgText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
                    {props.features && props.features.length ? (
                        props.features.map((item: any, i) => (
                            <div key={i} className="flex testing mb-12">
                                <div className="shrink-0">
                                    <FeatureSectionIcon bg={props.bg} />
                                </div>
                                <div className="grow ml-4">
                                    <p className={`font-bold mb-1 uppercase text-${props.bg === 'richBlue' ? "yellow" : "richBlue"} text-2xl`}>{item.title}</p>
                                    <p className={`text-${props.bg === 'richBlue' ? "white" : "black"}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li>Error: do not forget to setup your env variables 👇</li>
                    )}

                </div>
            </div>
        </section >
        // <!-- Section: Design Block -->
    );
}
