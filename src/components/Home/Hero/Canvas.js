import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const minDist = 10;
    const maxDist = 30;
    const initialWidth = 8; // Reducido
    const maxLines = 50; // Menos líneas
    const initialLines = 5; // Menos líneas iniciales
    const speed = 4; // Más lento

    const lines = [];
    let timeSinceLast = 0;

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [0.7, 0.7],
      [0.7, -0.7],
      [-0.7, 0.7],
      [-0.7, -0.7]
    ];

    // Función para determinar la posición y del starter
    const getStarterY = () => (h >= 800 ? 0.375 * h : h / 2);

    const starter = {
      x: w / 2,
      y: getStarterY(),
      vx: 0,
      vy: 0,
      width: initialWidth,
    };

    const init = () => {
      lines.length = 0;

      for (let i = 0; i < initialLines; i++) {
        lines.push(new Line(starter));
      }

      ctx.fillStyle = '#001111'; // Fondo negro
      ctx.fillRect(0, 0, w, h);
    };

    const getColor = (x) => {
      return `#007777`; // Azul eléctrico
    };

    const anim = () => {
      requestAnimationFrame(anim);

      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,0,0,0.02)'; // Deja una estela más tenue
      ctx.fillRect(0, 0, w, h);
      ctx.shadowBlur = 5;

      for (let i = 0; i < lines.length; ++i) {
        if (lines[i].step()) {
          lines.splice(i, 1);
          --i;
        }
      }

      ++timeSinceLast;

      if (lines.length < maxLines && timeSinceLast > 20 && Math.random() < 0.5) {
        timeSinceLast = 0;
        lines.push(new Line(starter));

        ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
        ctx.beginPath();
        ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    function Line(parent) {
      this.x = parent.x | 0;
      this.y = parent.y | 0;
      this.width = parent.width / 1.25;

      do {
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        this.vx = dir[0];
        this.vy = dir[1];
      } while (
        (this.vx === -parent.vx && this.vy === -parent.vy) ||
        (this.vx === parent.vx && this.vy === parent.vy)
      );

      this.vx *= speed;
      this.vy *= speed;

      this.dist = Math.random() * (maxDist - minDist) + minDist;
    }

    Line.prototype.step = function () {
      let dead = false;
      const prevX = this.x;
      const prevY = this.y;

      this.x += this.vx;
      this.y += this.vy;

      --this.dist;

      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) dead = true;

      if (this.dist <= 0 && this.width > 1) {
        this.dist = Math.random() * (maxDist - minDist) + minDist;

        if (lines.length < maxLines) lines.push(new Line(this));
        if (lines.length < maxLines && Math.random() < 0.5) lines.push(new Line(this));

        if (Math.random() < 0.2) dead = true;
      }

      ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
      ctx.beginPath();
      ctx.lineWidth = this.width;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(prevX, prevY);
      ctx.stroke();

      return dead;
    };

    // Inicializar la posición y llamar a init y anim
    init();
    anim();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      starter.x = w / 2;
      starter.y = getStarterY(); // Actualizar y según la nueva altura
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
