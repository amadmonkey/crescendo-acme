import React, { useState, useEffect } from 'react';
import './style.scss';

const CarouselWrapper = (props) => {
    let p = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const childrenWithProps = React.Children.map(p.children, (child, i) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { active: activeIndex === i ? true : false });
        }
        return child;
    });

    return (
        <div className="carousel-container">
            <div className="content">
                <h1>{p.title}</h1>
                <p>{p.desc}</p>
                <div className="carousel">
                    <div className="rotator" style={{ left: `-${415 * activeIndex}px` }}>
                        {/* {p.children} */}
                        {childrenWithProps}
                    </div>
                </div>
                <nav>
                    {
                        [...Array(React.Children.count(p.children))].map((_, i) => {
                            return <button type="button" className={`yep ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)} />
                        })
                    }
                </nav>
            </div>
        </div>
    )
}

export default CarouselWrapper
