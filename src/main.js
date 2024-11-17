import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('Welcome to my terminal.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Explore my projects.')
    .start();
