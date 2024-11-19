const animateBubbles = function() {
    const headSec = document.querySelector(".head");

    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('bubbleCanvas'));
    const ctx = canvas.getContext('2d');
    canvas.width = headSec.offsetWidth;
    canvas.height = headSec.offsetHeight;
    const bubbles = [];
    
    class Bubble {
      constructor(x, y, radius, speed, r, g, b, width, blur) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.r = r;
        this.g = g;
        this.b = b;
        this.width = width;
        this.blur = blur;
      }
    
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fill();
        ctx.strokeStyle =`rgb(${this.r},${this.g},${this.b})`;
        ctx.lineWidth = this.width;
        ctx.filter = `blur(${this.blur}px)`;
        ctx.stroke();
        ctx.closePath();
        ctx.filter = 'none';
      }
    
      update() {
        this.y -= this.speed;
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width + 20;
          this.r = Math.floor(Math.random() * 256);
          this.g = Math.floor(Math.random() * 256);
          this.b = Math.floor(Math.random() * 256);
          this.width = Math.floor(Math.random() * 3 );
          this.blur = Math.floor(Math.random() * 5 );
        //   this.speed = Math.random() * canvas.width;
        }
        this.draw();
      }
    }
    
    function init() {
      for (let i = 0; i < 15; i++) {
        const radius = Math.random() * 100 + 50;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * canvas.width / 500;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const width = Math.floor(Math.random() * 3 );
        const blur = Math.floor(Math.random() * 5 );
        bubbles.push(new Bubble(x, y, radius, speed, r, g, b, width, blur));
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgb(21, 21, 21)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      bubbles.forEach(bubble => bubble.update());
    
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    window.addEventListener('resize', () => {
      canvas.width = headSec.offsetWidth;
      canvas.height = headSec.offsetHeight;
      bubbles.forEach(bubble => {
        bubble.x = Math.random() * canvas.width;
        bubble.y = Math.random() * canvas.height;
      });
    });
}

export {animateBubbles};