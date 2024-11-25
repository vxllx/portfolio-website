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
                addOutput('List of all available commands: \nabout\nhelp\nprojects\nwhois\n ');
                break;
            case 'about':
                addOutput('This website is about my software engineering projects.\n ');
                break;
            case 'whois':
                addOutput('Hey I´m Valentin!\nI am an 21 y.o. dual Student at Nordakademie Elmshorn in cooperation with MaibornWolff Hamburg. \nOn this Website you get a look of my experience in software engineering!\n ');
                break;
            case 'projects':
                addOutput('This is a list of my projects.\n ');
                break;
            default:
                addOutput(`Unbekannter Befehl: ${command}\n `);
        }
    }

    function addOutput(text) {
        const line = document.createElement('div');
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
});
