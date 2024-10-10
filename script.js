document.addEventListener('DOMContentLoaded', () => {
    const accessPopup = document.getElementById('access-popup');
    const grantAccessBtn = document.getElementById('grant-access');
    const loadingBar = document.querySelector('.loading-bar');
    const loadingText = document.querySelector('.loading-text');
    const body = document.body;

    // Show popup and disable scrolling
    body.style.overflow = 'hidden';
    accessPopup.style.display = 'flex';

    // Simulate terminal typing
    const terminalWindow = document.querySelector('.terminal-window');
    const terminalLines = terminalWindow.querySelectorAll('p');
    
    terminalLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        let charIndex = 0;

        setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    line.textContent += text[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    if (index === terminalLines.length - 1) {
                        startLoadingAnimation();
                    }
                }
            }, 50);
        }, index * 1500);
    });

    function startLoadingAnimation() {
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += 1;
            loadingBar.style.width = `${progress}%`;
            loadingText.textContent = `SYSTEM LOADING: ${progress}%`;

            if (progress >= 100) {
                clearInterval(loadingInterval);
                loadingText.textContent = 'SYSTEM READY';
                grantAccessBtn.style.display = 'block';
            }
        }, 50);
    }

    // Grant access button functionality
    grantAccessBtn.addEventListener('click', () => {
        accessPopup.style.opacity = '0';
        setTimeout(() => {
            accessPopup.style.display = 'none';
            body.style.overflow = 'auto';
        }, 1000);

        // Trigger matrix rain effect
        initMatrixRain();
    });

    // ... rest of the existing JavaScript code ...

    // Matrix rain effect
    function initMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';

        const columns = canvas.width / 20;
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0f0';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.floor(Math.random() * 128));
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Typing effect for terminal
    const terminalResponses = document.querySelectorAll('.terminal-response');
    terminalResponses.forEach((response, index) => {
        const text = response.textContent;
        response.textContent = '';
        let i = 0;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                if (i < text.length) {
                    response.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50);
        }, index * 1000);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulated form submission
        alert('Message transmitted successfully!');
        form.reset();
    });

    // Glitch effect on hover for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = `translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px)`;
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translate(0, 0)';
        });
    });

    // Matrix rain effect in the background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';

    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 128));
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);

    const grantAccessButton = document.getElementById('grant-access');
    const hackerTerminal = document.getElementById('hacker-terminal');
    const terminalClose = document.querySelector('.terminal-button.close');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.querySelector('.terminal-output');

    grantAccessButton.addEventListener('click', () => {
        document.getElementById('access-popup').style.display = 'none';
        setTimeout(() => {
            hackerTerminal.style.display = 'block';
            initializeTerminal();
        }, 1000);
    });

    terminalClose.addEventListener('click', () => {
        hackerTerminal.style.display = 'none';
    });

    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            processCommand(command);
            terminalInput.value = '';
        }
    });

    function showWelcomeMessage() {
        appendToTerminal('Welcome to M0SK4N0R\'s Hacking Terminal', 'system');
        appendToTerminal('Type "help" for available commands', 'system');
        appendToTerminal('');
        // We don't need to add an extra prompt here
    }

    function appendToTerminal(text, type = 'command') {
        const p = document.createElement('p');
        if (type === 'command') {
            p.innerHTML = `<span class="terminal-prompt">moskanor@hackbox:~$</span> ${text}`;
        } else {
            p.innerHTML = text;
        }
        p.classList.add(type);
        terminalOutput.appendChild(p);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function initializeTerminal() {
        showWelcomeMessage();
        updatePrompt();
    }

    function updatePrompt() {
        const promptSpan = document.querySelector('.terminal-prompt');
        if (promptSpan) {
            promptSpan.textContent = '';
        } else {
            const promptLine = document.createElement('p');
            promptLine.innerHTML = '<span class="terminal-prompt">moskanor@hackbox:~$</span>';
            terminalOutput.appendChild(promptLine);
        }
        terminalInput.focus();
    }

    function processCommand(command) {
        appendToTerminal(command);

        switch (command) {
            case 'help':
                appendToTerminal('Available commands:', 'output');
                appendToTerminal('  help     - Show this help message', 'output');
                appendToTerminal('  whoami   - Display current user', 'output');
                appendToTerminal('  ls       - List directory contents', 'output');
                appendToTerminal('  cat      - Read file contents', 'output');
                appendToTerminal('  nmap     - Network exploration tool', 'output');
                appendToTerminal('  clear    - Clear the terminal', 'output');
                break;
            case 'whoami':
                appendToTerminal('moskanor - Ethical hacker and cybersecurity specialist', 'output');
                break;
            case 'ls':
                appendToTerminal('projects/  tools/  secrets.txt  backdoor.sh', 'output');
                break;
            case 'cat secrets.txt':
                appendToTerminal('Access denied. Nice try, hacker!', 'error');
                break;
            case 'nmap':
                simulateNmap();
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                break;
            default:
                appendToTerminal(`Command not found: ${command}. Type "help" for available commands.`, 'error');
        }
    }

    function simulateNmap() {
        const nmapOutput = [
            'Starting Nmap 7.92 ( https://nmap.org ) at 2024-03-15 12:00 UTC',
            'Nmap scan report for target.com (203.0.113.1)',
            'Host is up (0.015s latency).',
            'Not shown: 997 closed tcp ports',
            'PORT   STATE SERVICE',
            '22/tcp open  ssh',
            '80/tcp open  http',
            '443/tcp open  https',
            '',
            'Nmap done: 1 IP address (1 host up) scanned in 0.5 seconds'
        ];

        let i = 0;
        const nmapInterval = setInterval(() => {
            if (i < nmapOutput.length) {
                appendToTerminal(nmapOutput[i], 'output');
                i++;
            } else {
                clearInterval(nmapInterval);
            }
        }, 300);
    }
});