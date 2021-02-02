import Typewriter from 'typewriter-effect';

import React from 'react'

const typewriter = () => {
    return (
        <Typewriter
            options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default typewriter;


