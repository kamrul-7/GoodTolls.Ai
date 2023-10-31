import React from 'react';

const Speech = () => {
    return (
        <div className="md:w-[500px] w-full mx-auto">
      <audio className="w-[100%]" controls>
  <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
    </div>
    );
};

export default Speech;