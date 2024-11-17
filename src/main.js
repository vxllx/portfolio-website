import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75,
});

const delay = 1500;

typewriter
    .typeString('Welcome to my Portfolio Website!')
    .pauseFor(delay)
    .deleteAll()
    .typeString('It`s made by vxllx.dev')
    .pauseFor(delay)
    .deleteAll()
    .typeString('Features are coming soon!')
    .pauseFor(delay)
    .start()
