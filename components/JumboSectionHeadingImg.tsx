import * as React from 'react';

export interface IJumboSectionHeadingImgProps {
    line1: string;
    line2: string;
    imgSrc?: string;
    imgAlt?: string;

}

export default function JumboSectionHeadingImg(props: IJumboSectionHeadingImgProps) {
    return (
        <div>
            <h2 className="text-[100px] leading-[125px] md:text-[150px] md:leading-[175px] lg:text-[200px] lg:leading-[225px] mb-8  text-richBlue font-bold tracking-tight aquino">{props.line1} <br />{props.line2}</h2>
        </div>
    );
}
