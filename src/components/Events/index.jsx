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
            location: "Chicago, IL"
        },
        {
            date: { month: "JAN", date: "28" },
            name: "Insight Exchange Network",
            description: "Join us for this conference showcasing innovation.",
            button: "Get More Insight",
            location: "The Wagner, New York"
        },
        {
            date: { month: "JAN", date: "28" },
            name: "Insight Exchange Network",
            description: "Join us for this conference showcasing innovation.",
            button: "Get More Insight",
            location: "London, England"
        }
    ]

    return (
        <div className="events">
            <CarouselWrapper title="Upcoming Events" desc="This needs a great tagline, but I'll fill it in later">
                {data.map((obj, i) => {
                    return <Event key={i} data={obj} elemRef={el => refArray.current[i] = el} />
                })}
            </CarouselWrapper>
        </div>
    )
}

export default Events
