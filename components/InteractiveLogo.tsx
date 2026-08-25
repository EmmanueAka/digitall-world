"use client";

import React, { useRef, Suspense } from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";

interface AnimatedSphereProps {
	isHovered: React.MutableRefObject<boolean>;
}

function AnimatedSphere({ isHovered }: AnimatedSphereProps) {
	const meshRef = useRef<Mesh>(null);

	// 1. Next.js loads assets from the public folder.
	// CRITICAL: Ensure your image file is exactly named "digital-logo.png" inside your /public directory!
	const colorMap = useLoader(TextureLoader, "/digitally-logo.png");

	const { viewport } = useThree()

	useFrame((state) => {
		if (!meshRef.current) return;

		let targetX = 0;
		let targetY = 0;

		if (isHovered.current) {
			targetX = state.pointer.x * 0.6;
			targetY = state.pointer.y * 0.6;
		}

		meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.08;
		meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.08;
	});

	const radius = Math.min(viewport.width, viewport.height) * 0.45;

	return (
		<mesh ref={meshRef} scale={[radius, radius, radius]}>
			<sphereGeometry args={[0.9, 32, 32]} />
			<meshBasicMaterial
				map={colorMap}
				transparent={true}
				alphaTest={0.05}
			/>
		</mesh>
	);
}

// 2. Simple fallback visual indicator so your layout layout doesn't break while loading
function LogoFallback() {
	return (
		<div className="w-10 h-10 rounded-full border-2 border-dashed border-[#00A8E8] animate-spin" />
	);
}

export default function InteractiveLogo() {
	const isHovered = useRef<boolean>(false);

	return (
		<div
			className="w-12 h-12 relative flex items-center justify-center"
			onMouseEnter={() => { isHovered.current = true; }}
			onMouseLeave={() => { isHovered.current = false; }}
		>
			<Canvas
				camera={{ position:[0,0,4], fov: 45 }}
				gl={{ alpha: true }}
			>
				<ambientLight intensity={1.5} />
				{/* 3. Wrap your async 3D elements inside Suspense to handle texture loading */}
				<Suspense fallback={null}>
					<AnimatedSphere isHovered={isHovered} />
				</Suspense>
			</Canvas>
		</div>
	);
}
