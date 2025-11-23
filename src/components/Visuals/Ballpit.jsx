import React, { useEffect, useRef } from 'react';

const Ballpit = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let balls = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Ball {
            constructor(x, y, radius, color, velocity) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.velocity = velocity;
                this.gravity = 0.5;
                this.friction = 0.8;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                if (this.y + this.radius + this.velocity.y > canvas.height) {
                    this.velocity.y = -this.velocity.y * this.friction;
                } else {
                    this.velocity.y += this.gravity;
                }

                if (this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
                    this.velocity.x = -this.velocity.x;
                }

                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.draw();
            }
        }

        const init = () => {
            balls = [];
            const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'];
            for (let i = 0; i < 50; i++) {
                const radius = Math.random() * 20 + 10;
                const x = Math.random() * (canvas.width - radius * 2) + radius;
                const y = Math.random() * (canvas.height - radius * 2) + radius;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const velocity = {
                    x: (Math.random() - 0.5) * 4,
                    y: (Math.random() - 0.5) * 4
                };
                balls.push(new Ball(x, y, radius, color, velocity));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => ball.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-30" />;
};

export default Ballpit;
