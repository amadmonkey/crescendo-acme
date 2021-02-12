import React, { useRef } from 'react';
import CarouselWrapper from '../CarouselWrapper';
import Insight from './Insight';
import insightImg1 from '../../img/insight1.png';
import insightImg2 from '../../img/insight2.png';
import insightImg3 from '../../img/insight3.png';
import './style.scss';

const Insights = () => {
    const refArray = useRef([]);

    const data = [
        {
            img: insightImg1,
            title: "Global Factor Investing Study",
            color: "#1450d2"
        },
        {
            img: insightImg2,
            title: "2019 Outlook",
            color: "#01a49c"
        },
        {
            img: insightImg3,
            title: "Capital Market Assumptions",
            color: "#009bfa"
        }
    ]

    return (
        <div className="insights">
            <CarouselWrapper title={<h1>ACME <span className="bold">Insights</span></h1>} desc="How are factors being used around the world?" refs={refArray}>
                {data.map((obj, i) => {
                    return <Insight key={i} data={obj} elemRef={el => refArray.current[i] = el} />
                })}
            </CarouselWrapper>
        </div>
    )
}

export default Insights
