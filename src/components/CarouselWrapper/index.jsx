import React, { useState } from 'react';
import './style.scss';

const CarouselWrapper = (props) => {
    let p = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [swipeX, setSwipeX] = useState(0);

    const childrenWithProps = React.Children.map(p.children, (child, i) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { active: activeIndex === i ? true : false });
        }
        return child;
    });

    const onTouchStart = (e) => window.innerWidth < 1366 && setSwipeX(e.touches[0].clientX);

    const onTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        if (Math.abs(touch.clientX - swipeX) > 50)
            setActiveIndex(touch.clientX < swipeX ? (activeIndex < (React.Children.count(p.children) - 1) ? activeIndex + 1 : 0) : activeIndex === 0 ? (React.Children.count(p.children) - 1) : activeIndex - 1);
    }

    return (
        <div className="carousel-container">
            <div className="content">
                <h1>{p.title}</h1>
                <p>{p.desc}</p>
                <div className="carousel" onTouchStart={onTouchStart} onTouchEnd={swipeX ? onTouchEnd : undefined}>
                    <div className="rotator" style={{ left: window.innerWidth < 1366 ? `calc(0% - ${415 * activeIndex}px)` : "0" }}>
                        {childrenWithProps}
                    </div>
                </div>
                <nav>
                    {
                        [...Array(React.Children.count(p.children))].map((_, i) => {
                            return <button key={i} type="button" className={`yep ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)} />
                        })
                    }
                </nav>
            </div>
        </div>
    )
}

export default CarouselWrapper
