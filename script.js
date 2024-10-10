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
});