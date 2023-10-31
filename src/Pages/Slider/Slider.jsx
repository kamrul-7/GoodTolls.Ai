import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ButtonSlider() {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (visibleStartIndex < 2) setVisibleStartIndex((prevIndex) => prevIndex + 1);
    },
    onSwipedRight: () => {
      if (visibleStartIndex > 0) setVisibleStartIndex((prevIndex) => prevIndex - 1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="flex items-center" {...handlers}>
      <button onClick={() => setVisibleStartIndex((prevIndex) => Math.max(prevIndex - 1, 0))}>←</button>
      <div className="overflow-hidden whitespace-nowrap">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            className={`inline-block m-2 ${index < visibleStartIndex || index >= visibleStartIndex + 6 ? 'hidden' : ''}`}
          >
            Button {index + 1}
          </button>
        ))}
      </div>
      <button onClick={() => setVisibleStartIndex((prevIndex) => Math.min(prevIndex + 1, 2))}>→</button>
    </div>
  );
}

export default ButtonSlider;
