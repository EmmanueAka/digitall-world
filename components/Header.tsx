'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link";
import InteractiveLogo from "@/components/InteractiveLogo";

export default function Header() {
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
	const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null)

	const [isVisible, setIsVisible] = useState<boolean>(true)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)
	const lastScrollY = useRef<number>(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY > 20) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}

			if (currentScrollY < 10) {
				setIsVisible(true)
				lastScrollY.current = currentScrollY
				return
			}

			if (currentScrollY > lastScrollY.current) {
				setIsVisible(false)
				setDropdownOpen(false)
			} else {
				setIsVisible(true)
			}
			lastScrollY.current = currentScrollY
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleMobileSection = (section: string) => {
		setActiveMobileSection(activeMobileSection === section ? null : section)
	}

	return (
		<>
			<header
				className={`w-full fixed top-0 left-0 z-50 font-sans px-4 md:px-12 pt-4 transition-all duration-300 ease-in-out ${
					isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
				}`}
			>
				<div
					className={`rounded-full border flex flex-row justify-between w-full items-center px-4 md:px-6 py-3 transition-all duration-300 ${
						isScrolled
							? 'bg-surface-bright/80 backdrop-blur-md shadow-lg border-[#6c757d]/20 scale-[0.99]'
							: 'bg-surface-bright border-[#6c757d]/10 shadow-sm scale-100'
					}`}
				>
					{/* LOGO CONTAINER */}
					<div className='flex items-center group'>
						<Link href='/' className='w-10 h-10 md:w-12 md:h-12 flex items-center bg-gray-900 rounded-full relative overflow-hidden'>
							<InteractiveLogo/>
						</Link>
						<div className='ml-2 md:ml-3 select-none'>
							<span className='text-base md:text-lg font-black tracking-wider uppercase text-black group-hover:text-[#e2881c] transition-colors duration-200 mr-1 md:mr-2'>DigitAll</span>
							<span className='text-[10px] md:text-xs font-bold tracking-[0.25rem] uppercase text-[#445d80]'>World</span>
						</div>
					</div>
					{/* DESKTOP NAVIGATION */}
					<nav className='hidden md:flex items-center gap-8 font-bold flex-row text-sm text-black'>
						<div className='relative'
						     onMouseEnter={() => setDropdownOpen(true)}
						     onMouseLeave={() => setDropdownOpen(false)}
						>
							<button className='flex items-center ml-2 gap-2 hover:text-[#001c3a] py-2 transition-colors focus:outline-none'>
								Services
								<svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#e2881c]' : ''}`} fill='none' stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
								</svg>
							</button>

							<div className={`absolute px-6 py-6 top-full left-1/2 -translate-x-1/2 mt-2 w-[740px] bg-surface-bright rounded-xl shadow-xl grid grid-cols-2 gap-6 border border-[#6c757d]/10 backdrop-blur-md transition-all duration-300 ease-out transform ${
								dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'
							}`}>
								<div>
									<h4 className='text-xs rounded-sm font-bold bg-primary px-2 py-1 uppercase tracking-widest text-white mb-2'>Publishing</h4>
									<ul className='space-y-1.5 font-medium text-sm text-on-secondary-container'>
										<li><Link href='/services/publishing/fiction' className='hover:text-[#445d80] transition-colors block'>Fiction & Novels</Link></li>
										<li><Link href="/services/publishing/non-fiction" className="hover:text-[#445d80] transition-colors block">Non-Fiction Structure</Link></li>
									</ul>
								</div>
								<div>
									<h4 className='text-xs px-2 py-1 rounded-sm bg-tertiary-fixed-dim font-bold uppercase tracking-widest text-black mb-2'>Web Engineering</h4>
									<ul className="space-y-1.5 text-sm font-medium text-on-secondary-container">
										<li><Link href="/services/web/ecommerce" className="hover:text-[#445d80] transition-colors block">E-Commerce Stores</Link></li>
										<li><Link href="/services/web/corporate" className="hover:text-[#445d80] transition-colors block">Corporate Systems</Link></li>
									</ul>
								</div>
								<div>
									<h4 className='text-xs px-2 rounded-sm py-1 bg-on-surface-variant font-bold uppercase tracking-widest text-white mb-2'>Mobile App Design</h4>
									<ul className="space-y-1.5 text-sm text-on-secondary-container font-medium">
										<li><Link href="/services/mobile/native" className="hover:text-[#445d80] transition-colors block">Native iOS & Android</Link></li>
										<li><Link href="/services/mobile/cross-platform" className="hover:text-[#445d80] transition-colors block">Cross-Platform UI</Link></li>
									</ul>
								</div>
								<div>
									<h4 className='text-xs px-2 py-1 rounded-sm bg-inverse-on-surface font-bold uppercase tracking-widest text-black mb-2'>Graphics Design</h4>
									<ul className="space-y-1.5 text-sm text-on-secondary-container font-medium">
										<li><Link href="/services/graphics/branding" className="hover:text-[#445d80] transition-colors block">Branding & Logo Assets</Link></li>
										<li><Link href="/services/graphics/uiux" className="hover:text-[#445d80] transition-colors block">UI/UX Graphic Deliverables</Link></li>
									</ul>
								</div>
							</div>
						</div>

						<Link href='/portfolio' className='hover:text-[#e2881c] transition-colors'>Portfolio</Link>
						<Link href='/about' className='hover:text-[#e2881c] transition-colors'>About</Link>
						<Link href='/bookstore' className='hover:text-[#e2881c] transition-colors'>Book Store</Link>
						<Link href='/contact' className='hover:text-[#e2881c] transition-colors'>Contact</Link>
					</nav>

					{/* ACTIONS & HAMBURGER */}
					<div className='flex items-center gap-2 md:gap-4 text-black'>
						<Link href='/cart' className='relative p-2 bg-on-primary-container/10 rounded-full text-black hover:text-[#445d80] transition-colors'>
							<svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
							</svg>
							<span className="absolute -top-1 -right-1 bg-[#e2881c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
						</Link>
						<Link href='/quote' className='hidden sm:inline-block bg-[#e2881c] hover:bg-[#e2881c]/90 text-white font-bold text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all'>
							Get a Quote
						</Link>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="md:hidden p-2 text-black hover:text-[#e2881c] focus:outline-none z-50"
							aria-label="Toggle Menu"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{mobileMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</header>

			{/* MOBILE DRAWER */}
			<div className={`fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300 ${
				mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
			}`} onClick={() => setMobileMenuOpen(false)} />

			<div className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-surface-bright z-50 md:hidden shadow-2xl p-6 pt-24 overflow-y-auto flex flex-col justify-between font-sans transition-transform duration-300 ease-in-out transform text-black ${
				mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
			}`}>
				<nav className="flex flex-col gap-4 font-bold text-base">
					<Link href='/' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#e2881c]">Home</Link>

					<div className="flex flex-col border-b border-[#6c757d]/10 pb-2">
						<button
							onClick={() => toggleMobileSection('services')}
							className="flex items-center justify-between w-full text-left py-1 hover:text-[#e2881c]"
						>
							<span>Services</span>
							<svg className={`w-4 h-4 transform transition-transform duration-200 ${activeMobileSection === 'services' ? 'rotate-180 text-[#e2881c]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						<div className={`transition-all overflow-hidden duration-300 ${activeMobileSection === 'services' ? 'max-h-[400px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
							<div className="pl-4 flex flex-col gap-3 font-medium text-sm text-on-secondary-container">
								<div>
									<p className="text-xs font-bold text-[#e2881c] uppercase tracking-wider mb-1">Publishing</p>
									<Link href="/services/publishing/fiction/fiction" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">Fiction & Novels</Link>
								</div>
								<div>
									<p className="text-xs font-bold text-black uppercase tracking-wider mb-1">Web Engineering</p>
									<Link href="/services/web/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">E-Commerce Stores</Link>
								</div>
							</div>
						</div>
					</div>

					<Link href='/portfolio' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#e2881c]">Portfolio</Link>
					<Link href='/bookstore' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#e2881c]">Book Store</Link>
					<Link href='/contact' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#e2881c]">Contact</Link>
					<Link href='/quote' onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-[#e2881c] text-white font-bold py-3 rounded-xl shadow-md">
						Get a Quote
					</Link>
				</nav>
			</div>
		</>
	)
}
