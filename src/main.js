document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input'); // Eingabefeld
    const output = document.getElementById('output'); // Ausgabecontainer

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim(); // Eingegebener Befehl
            handleCommand(command); // Befehl verarbeiten
            input.value = ''; // Eingabefeld leeren
        }
    });

    function handleCommand(command) {
        if (command === '') return;

        // Zeige den eingegebenen Befehl im Output
        addOutput(`visitor@portfolio WEBX ~/vxllx.dev/portfolio-website \n$ ${command}`);

        // Befehlsverarbeitung
        switch (command.toLowerCase()) {
            case 'help':
                addOutput('help');
                break;
            case 'about':
                addOutput('This website is about my software engineering projects.\n ');
                break;
            case 'whois':
                addOutput('Hey I´m Valentin!\nI am an 21 y.o. dual Student at Nordakademie Elmshorn in cooperation with MaibornWolff Hamburg. On this Website you get a look of my experience in software engineering!\n ');
                break;
            case 'projects':
                addOutput('projects');
                break;
            default:
                addOutput(`Unbekannter Befehl: ${command}\n `);
        }
    }

    const commands = [
        '~ about        Description about this website.',
        '~ help         List all available commands.',
        '~ whois        Description about myself.',
        '~ projects     List of my projects. \n ',
    ];

    const projects = [
        '- Calculator           An calculator application build with Java.',
        '- WeatherApp           An weather web application build with HTML, JavaScript and CSS.',
        '- Game-Collection      One Application which contains Pong, TicTacToe and Snake, build with Java. \n '
    ];

    function addOutput(text) {

        if (text === 'help') {
            commands.forEach(command => {
                const line = document.createElement('div');
                line.textContent = command;
                output.appendChild(line);
                output.scrollTop = output.scrollHeight;
            });
        } else if (text === 'projects') {
            projects.forEach(project => {
                const line = document.createElement('div');
                line.textContent = project;
                output.appendChild(line);
                output.scrollTop = output.scrollHeight;
            });
        } else {
        const line = document.createElement('div');
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
        };
    }
});
