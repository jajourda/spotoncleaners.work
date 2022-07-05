import * as React from 'react';

export interface ILandingPageHeaderProps {
}

export default function LandingPageHeader() {
    return (
        // <!-- Container for demo purpose -->
        <div className="bg-richBlue w-full px-6 py-8 mx-auto md:px-20 xl:px-40">

            {/* <!-- Section: Design Block --> */}
            <section className="mb-10  text-gray-800 text-center lg:text-left">

                <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-tight">
                            <div className='aquino text-8xl text-yellow mb-2'>oops</div>
                            Got a mess <br />
                            <span className="text-blue-600">that you want cleaned up?</span>
                        </h2>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <p className="uppercase text-yellow font-bold mb-4">Learn more</p>
                        <p className="text-white text-lg">
                            We can't wait to team up. Our cleaning systems and partial offerings put you in the driver's seat with your clean. We can do as much or as little as you need done. End of story.
                        </p>
                    </div>
                </div>

            </section>
            {/* <!-- Section: Design Block --> */}

        </div>
        // <!-- Container for demo purpose -->
    );
}
