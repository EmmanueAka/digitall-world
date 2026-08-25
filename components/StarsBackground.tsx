"use client";

import React, { useEffect, useRef } from "react";

interface MatrixPoint {
	x: number;
	y: number;
	baseX: number;
	baseY: number;
	phase: number;
	speed: number;
}

interface MatrixSectionProps {
	children?: React.ReactNode;
	className?: string; // Allows you to pass unique padding, height or margin styles
}

export default function MatrixSection({ children, className = "" }: MatrixSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const canvas = canvasRef.current;
		if (!container || !canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let points: MatrixPoint[][] = [];
		const spacing = 40; // Grid spacing density
		let time = 0;

		// 1. Core adjustment: Scale canvas strictly to parent box bounds instead of window
		const resizeCanvas = () => {
			const rect = container.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
			initGrid(rect.width, rect.height);
		};

		const initGrid = (width: number, height: number) => {
			points = [];
			const cols = Math.ceil(width / spacing) + 1;
			const rows = Math.ceil(height / spacing) + 1;

			for (let r = 0; r < rows; r++) {
				const rowPoints: MatrixPoint[] = [];
				for (let c = 0; c < cols; c++) {
					const baseX = c * spacing;
					const baseY = r * spacing;
					rowPoints.push({
						x: baseX,
						y: baseY,
						baseX: baseX,
						baseY: baseY,
						phase: Math.random() * Math.PI * 2,
						speed: 0.01 + Math.random() * 0.02,
					});
				}
				points.push(rowPoints);
			}
		};

		const draw = () => {
			if (!canvas || !ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			time += 0.005;

			const rows = points.length;
			if (rows === 0) return;
			const cols = points[0].length;

			// 2. Compute dynamic dark-adapted Beamer center coordinate vectors
			const beamerX = canvas.width / 2 + Math.sin(time * 1.2) * (canvas.width * 0.25);
			const beamerY = canvas.height / 2 + Math.cos(time * 0.7) * (canvas.height * 0.15);
			// Fluid radius calculation ensures it scales safely inside short or tall containers
			const beamerRadius = Math.max(canvas.width * 0.3, 250);

			// Waving physics distortion loop
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					const p = points[r][c];
					p.phase += p.speed;
					p.x = p.baseX + Math.sin(p.phase + time) * 6;
					p.y = p.baseY + Math.cos(p.phase * 0.5 + time) * 6;
				}
			}

			// 3. Render horizontal dark-adapted grid wire links
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols - 1; c++) {
					const p1 = points[r][c];
					const p2 = points[r][c + 1];

					const distToBeamer = Math.hypot((p1.x + p2.x) / 2 - beamerX, (p1.y + p2.y) / 2 - beamerY);

					ctx.beginPath();
					ctx.moveTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);

					if (distToBeamer < beamerRadius) {
						const intensity = (1 - distToBeamer / beamerRadius) * 0.3;
						ctx.strokeStyle = `rgba(0, 168, 232, ${intensity})`; // Bright Sky Blue inside spotlight envelope
						ctx.lineWidth = 0.9;
					} else {
						ctx.strokeStyle = "rgba(108, 117, 125, 0.04)"; // Deep fainted gray trace outside the light paths
						ctx.lineWidth = 0.5;
					}
					ctx.stroke();
				}
			}

			// 4. Render vertical dark-adapted grid wire links
			for (let r = 0; r < rows - 1; r++) {
				for (let c = 0; c < cols; c++) {
					const p1 = points[r][c];
					const p2 = points[r + 1][c];

					const distToBeamer = Math.hypot((p1.x + p2.x) / 2 - beamerX, (p1.y + p2.y) / 2 - beamerY);

					ctx.beginPath();
					ctx.moveTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);

					if (distToBeamer < beamerRadius) {
						const intensity = (1 - distToBeamer / beamerRadius) * 0.3;
						ctx.strokeStyle = `rgba(0, 168, 232, ${intensity})`;
						ctx.lineWidth = 0.9;
					} else {
						ctx.strokeStyle = "rgba(108, 117, 125, 0.04)";
						ctx.lineWidth = 0.5;
					}
					ctx.stroke();
				}
			}

			// 5. Draw bright node intersections inside the cloud beam envelope
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					const p = points[r][c];
					const distToBeamer = Math.hypot(p.x - beamerX, p.y - beamerY);

					if (distToBeamer < beamerRadius) {
						const intensity = (1 - distToBeamer / beamerRadius);
						ctx.beginPath();
						ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
						ctx.fillStyle = `rgba(0, 168, 232, ${intensity * 0.5})`; // Shining sky blue point tips
						ctx.fill();
					}
				}
			}

			animationFrameId = requestAnimationFrame(draw);
		};

		// Use ResizeObserver for highly performant component-level size tracking
		const resizeObserver = new ResizeObserver(() => resizeCanvas());
		resizeObserver.observe(container);

		resizeCanvas();
		draw();

		return () => {
			resizeObserver.disconnect();
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		// Isolate container relative layout position, applying your dark corporate brand baseline color (#001F3F)
		<div
			ref={containerRef}
			className={`relative w-full overflow-hidden bg-[#001F3F] ${className}`}
		>
			{/* Absolute background layers locked underneath component child children contents */}
			<canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

			{/* Dark Volumetric Cloud spotlight radial aura blending gradient */}
			<div className="absolute inset-0 bg-radial-dark-cloud opacity-50 mix-blend-screen pointer-events-none" />

			{/* Content wrapper layer */}
			<div className="relative z-10 w-full h-full">
				{children}
			</div>
		</div>
	);
}
