 // Simple JavaScript Game Script


   const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Basic game loop (e.g., drawing a moving square)
    let x = 0;
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, 50, 50, 50);
        x = (x + 1) % canvas.width;
        requestAnimationFrame(gameLoop);
    }
    gameLoop();