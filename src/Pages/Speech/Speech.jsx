import React, { useEffect } from 'react';

const Speech = () => {
    useEffect(()=>{
        fetch('http://localhost:3000/speak')
        .then(res => console.log(res))
    },[])
    return (
        <div className="md:w-[500px] w-full mx-auto">
      <audio className="w-[100%]" controls>
  <source src="http://localhost:3000/uploads/audioFilestest.wav" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
    </div>
    );
};

export default Speech;