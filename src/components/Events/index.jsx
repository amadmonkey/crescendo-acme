import React, { useRef } from 'react';
import CarouselWrapper from '../CarouselWrapper';
import Event from './Event';

const Events = () => {

    const refArray = useRef([]);

    const data = [
        {
            date: { month: "JAN", date: "28" },
            name: "Insight Exchange Network",
            description: "Join us for this conference showcasing innovation.",
            button: "Get More Insight",
            location: <span><span className="bold">Chicago,</span> IL</span>
        },
        {
            date: { month: "JAN", date: "28" },
            name: "Insight Exchange Network",
            description: "Join us for this conference showcasing innovation.",
            button: "Get More Insight",
            location: <span><span className="bold">The Wagner,</span> New York</span>
        },
        {
            date: { month: "JAN", date: "28" },
            name: "Insight Exchange Network",
            description: "Join us for this conference showcasing innovation.",
            button: "Get More Insight",
            location: <span><span className="bold">London,</span> England</span>
        }
    ]

    return (
        <div className="events">
            <CarouselWrapper title={<h1 style={{ color: "#051a7b" }}>Upcoming <span className="bold">Events</span></h1>} desc="This needs a great tagline, but I'll fill it in later">
                {data.map((obj, i) => {
                    return <Event key={i} data={obj} elemRef={el => refArray.current[i] = el} />
                })}
            </CarouselWrapper>
        </div>
    )
}

export default Events
