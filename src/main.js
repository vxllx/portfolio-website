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
                addOutput(' List of all available commands: \n  help Lists all available commands\n echo Prints the input\n clear Clears the terminal \n ');
                break;
            case 'clear':
                clearOutput();
                break;
            default:
                if (command.startsWith('    echo ')) {
                    addOutput(command.slice(5)); // Gibt den Text nach "echo " aus
                } else {
                    addOutput(` Unbekannter Befehl: ${command}\n `);
                }
        }
    }

    function addOutput(text) {
        const line = document.createElement('div');
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight; // Scrollt nach unten
    }

    function clearOutput() {
        output.innerHTML = '';
    }
});
