// Set document language
document.documentElement.lang = 'en';

// Create head elements
document.title = 'Luxury Palm Tree Installations | Jacksonville, FL';

// Meta tags
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(metaViewport);

const metaDesc = document.createElement('meta');
metaDesc.name = 'description';
metaDesc.content = 'Premier palm tree installation and landscaping services in Jacksonville, FL. Transforming properties with luxury palms for residential, commercial, and new construction projects.';
document.head.appendChild(metaDesc);

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'palm tree installation, landscaping, Jacksonville, luxury palms, tropical landscaping, commercial landscaping, residential landscaping';
document.head.appendChild(metaKeywords);

const metaAuthor = document.createElement('meta');
metaAuthor.name = 'author';
metaAuthor.content = 'Luxury Palm Landworks';
document.head.appendChild(metaAuthor);

// Open Graph tags
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Luxury Palm Landworks | Jacksonville, FL';
document.head.appendChild(ogTitle);

const ogDesc = document.createElement('meta');
ogDesc.setAttribute('property', 'og:description');
ogDesc.content = 'Premier palm tree installation and landscaping services in Jacksonville, FL. Transform your property with our tropical designs.';
document.head.appendChild(ogDesc);

const ogImage = document.createElement('meta');
ogImage.setAttribute('property', 'og:image');
ogImage.content = 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758314610/IMG_5125.heic_c3bsli.jpg';
document.head.appendChild(ogImage);

const ogUrl = document.createElement('meta');
ogUrl.setAttribute('property', 'og:url');
ogUrl.content = 'https://www.luxurypalmsjax.com';
document.head.appendChild(ogUrl);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

// Twitter Card tags
const twitterCard = document.createElement('meta');
twitterCard.name = 'twitter:card';
twitterCard.content = 'summary_large_image';
document.head.appendChild(twitterCard);

const twitterTitle = document.createElement('meta');
twitterTitle.name = 'twitter:title';
twitterTitle.content = 'Luxury Palm Landworks | Jacksonville, FL';
document.head.appendChild(twitterTitle);

const twitterDesc = document.createElement('meta');
twitterDesc.name = 'twitter:description';
twitterDesc.content = 'Premier palm tree installation and landscaping services in Jacksonville, FL. Transform your property with our tropical designs.';
document.head.appendChild(twitterDesc);

const twitterImage = document.createElement('meta');
twitterImage.name = 'twitter:image';
twitterImage.content = 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758314610/IMG_5125.heic_c3bsli.jpg';
document.head.appendChild(twitterImage);

// External scripts and styles
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
tailwindScript.defer = true;
document.head.appendChild(tailwindScript);

const aosLink = document.createElement('link');
aosLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
aosLink.rel = 'stylesheet';
document.head.appendChild(aosLink);

const aosScript = document.createElement('script');
aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
aosScript.async = true;
document.head.appendChild(aosScript);

const featherScript = document.createElement('script');
featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
featherScript.defer = true;
document.head.appendChild(featherScript);

// Inline styles
const style = document.createElement('style');
style.textContent = `
    .hero-section {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1920/v1758314610/IMG_5125.heic_c3bsli.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .testimonial-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
    }
    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .palm-icon {
        color: #22c55e;
    }
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    #mobile-menu {
        transition: max-height 0.3s ease-in-out;
        max-height: 0;
        overflow: hidden;
    }
    #mobile-menu.open {
        max-height: 500px;
    }
`;
document.head.appendChild(style);

// Structured data
const structuredData = document.createElement('script');
structuredData.type = 'application/ld+json';
structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Luxury Palm Landworks",
    "image": "https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758314610/IMG_5125.heic_c3bsli.jpg",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jacksonville",
        "addressRegion": "FL",
        "addressCountry": "US"
    },
    "telephone": "(443) 487-1019",
    "email": "info@luxurypalmsjax.com",
    "url": "https://www.luxurypalmsjax.com",
    "description": "Premier palm tree installation and landscaping services in Jacksonville, FL.",
    "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-14:00"
    ]
});
document.head.appendChild(structuredData);

// Body
document.body.className = 'font-sans antialiased text-gray-800';

// Navigation
const nav = document.createElement('nav');
nav.className = 'bg-white shadow-lg fixed w-full z-50';
const navContainer = document.createElement('div');
navContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const navFlex = document.createElement('div');
navFlex.className = 'flex justify-between h-20 items-center';

const logoDiv = document.createElement('div');
logoDiv.className = 'flex-shrink-0 flex items-center';
const palmIcon = document.createElement('i');
palmIcon.setAttribute('data-feather', 'palm-tree');
palmIcon.className = 'palm-icon h-8 w-8';
const logoSpan = document.createElement('span');
logoSpan.className = 'ml-2 text-xl font-bold text-gray-900';
logoSpan.textContent = 'Luxury Palm Landworks';
logoDiv.append(palmIcon, logoSpan);

const desktopMenu = document.createElement('div');
desktopMenu.className = 'hidden md:block';
const desktopMenuInner = document.createElement('div');
desktopMenuInner.className = 'ml-10 flex items-center space-x-4';
const navLinks = [
    { href: '#', text: 'Home', class: 'text-green-600 px-3 py-2 rounded-md text-sm font-medium' },
    { href: '#services', text: 'Services', class: 'text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium' },
    { href: '#gallery', text: 'Gallery', class: 'text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium' },
    { href: '#testimonials', text: 'Testimonials', class: 'text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium' },
    { href: '#contact', text: 'Get a Quote', class: 'bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300' }
];
navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = link.class;
    a.textContent = link.text;
    desktopMenuInner.appendChild(a);
});
desktopMenu.appendChild(desktopMenuInner);

const mobileMenuButtonDiv = document.createElement('div');
mobileMenuButtonDiv.className = 'md:hidden';
const mobileMenuButton = document.createElement('button');
mobileMenuButton.type = 'button';
mobileMenuButton.className = 'inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none';
mobileMenuButton.setAttribute('aria-controls', 'mobile-menu');
mobileMenuButton.setAttribute('aria-expanded', 'false');
mobileMenuButton.id = 'mobile-menu-button';
const menuIcon = document.createElement('i');
menuIcon.setAttribute('data-feather', 'menu');
mobileMenuButton.appendChild(menuIcon);
mobileMenuButtonDiv.appendChild(mobileMenuButton);

const mobileMenu = document.createElement('div');
mobileMenu.id = 'mobile-menu';
mobileMenu.className = 'md:hidden';
const mobileMenuInner = document.createElement('div');
mobileMenuInner.className = 'px-2 pt-2 pb-3 space-y-1 sm:px-3';
navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = link.class.replace('px-3', 'block px-3').replace('text-sm', 'text-base');
    a.textContent = link.text;
    mobileMenuInner.appendChild(a);
});
mobileMenu.appendChild(mobileMenuInner);

navFlex.append(logoDiv, desktopMenu, mobileMenuButtonDiv);
navContainer.append(navFlex, mobileMenu);
nav.appendChild(navContainer);
document.body.appendChild(nav);

// Hero Section
const heroSection = document.createElement('section');
heroSection.className = 'hero-section h-screen flex items-center justify-center text-white pt-20';
const heroContainer = document.createElement('div');
heroContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center';
heroContainer.setAttribute('data-aos', 'fade-up');
const heroH1 = document.createElement('h1');
heroH1.className = 'text-4xl md:text-6xl font-bold mb-6';
heroH1.textContent = 'Transform Your Property With Luxury Palms';
const heroP = document.createElement('p');
heroP.className = 'text-xl md:text-2xl mb-8 max-w-3xl mx-auto';
heroP.textContent = "Jacksonville's premier palm tree installation specialists creating tropical paradises for homes and businesses.";
const heroButtons = document.createElement('div');
heroButtons.className = 'flex flex-col sm:flex-row justify-center gap-4';
const heroButton1 = document.createElement('a');
heroButton1.href = '#contact';
heroButton1.className = 'bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-medium transition duration-300';
heroButton1.textContent = 'Request a Consultation';
const heroButton2 = document.createElement('a');
heroButton2.href = '#services';
heroButton2.className = 'bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-md text-lg font-medium transition duration-300';
heroButton2.textContent = 'Our Services';
heroButtons.append(heroButton1, heroButton2);
heroContainer.append(heroH1, heroP, heroButtons);
heroSection.appendChild(heroContainer);
document.body.appendChild(heroSection);

// Services Section
const servicesSection = document.createElement('section');
servicesSection.id = 'services';
servicesSection.className = 'py-20 bg-gray-50';
const servicesContainer = document.createElement('div');
servicesContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const servicesHeader = document.createElement('div');
servicesHeader.className = 'text-center mb-16';
servicesHeader.setAttribute('data-aos', 'fade-up');
const servicesH2 = document.createElement('h2');
servicesH2.className = 'text-3xl font-bold text-gray-900 mb-4';
servicesH2.textContent = 'Our Premium Services';
const servicesP = document.createElement('p');
servicesP.className = 'text-lg text-gray-600 max-w-3xl mx-auto';
servicesP.textContent = 'Specializing in palm tree installations with comprehensive landscaping solutions for every property type.';
servicesHeader.append(servicesH2, servicesP);

const servicesGrid = document.createElement('div');
servicesGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
const services = [
    {
        imgSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315440/IMG_4893.heic_d7vp0z.jpg',
        webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315440/IMG_4893.heic_d7vp0z.webp',
        alt: 'Luxury Backyard Palm Oasis',
        icon: 'palm-tree',
        title: 'Palm Tree Installation',
        desc: 'Expert installation of premium palm varieties including Royal, Queen, and Pygmy Date palms for instant tropical appeal.',
        delay: '100'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315439/IMG_4899.heic_bm6gcw.jpg',
        webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315439/IMG_4899.heic_bm6gcw.webp',
        alt: 'Luxury Poolside Palms',
        icon: 'home',
        title: 'Commercial Landscaping',
        desc: 'Elevate your business property with our comprehensive commercial landscaping services featuring signature palm designs.',
        delay: '200'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315448/IMG_5186.heic_pcahcu.jpg',
        webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315448/IMG_5186.heic_pcahcu.webp',
        alt: 'Tropical Backyard Retreat',
        icon: 'layers',
        title: 'Complete Landscaping',
        desc: 'From rock beds to hedges and irrigation systems, we create cohesive outdoor spaces centered around majestic palms.',
        delay: '300'
    }
];
services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', service.delay);
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = service.webpSrc;
    source.type = 'image/webp';
    const img = document.createElement('img');
    img.src = service.imgSrc;
    img.alt = service.alt;
    img.className = 'w-full h-64 object-cover';
    img.loading = 'lazy';
    picture.append(source, img);
    const cardContent = document.createElement('div');
    cardContent.className = 'p-6';
    const flexDiv = document.createElement('div');
    flexDiv.className = 'flex items-center mb-4';
    const icon = document.createElement('i');
    icon.setAttribute('data-feather', service.icon);
    icon.className = 'palm-icon h-6 w-6 mr-2';
    const h3 = document.createElement('h3');
    h3.className = 'text-xl font-semibold';
    h3.textContent = service.title;
    flexDiv.append(icon, h3);
    const p = document.createElement('p');
    p.className = 'text-gray-600';
    p.textContent = service.desc;
    cardContent.append(flexDiv, p);
    card.append(picture, cardContent);
    servicesGrid.appendChild(card);
});
servicesContainer.append(servicesHeader, servicesGrid);
servicesSection.appendChild(servicesContainer);
document.body.appendChild(servicesSection);

// Gallery Section
const gallerySection = document.createElement('section');
gallerySection.id = 'gallery';
gallerySection.className = 'py-20 bg-white';
const galleryContainer = document.createElement('div');
galleryContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const galleryHeader = document.createElement('div');
galleryHeader.className = 'text-center mb-16';
galleryHeader.setAttribute('data-aos', 'fade-up');
const galleryH2 = document.createElement('h2');
galleryH2.className = 'text-3xl font-bold text-gray-900 mb-4';
galleryH2.textContent = 'Our Palm Tree Portfolio';
const galleryP = document.createElement('p');
galleryP.className = 'text-lg text-gray-600 max-w-3xl mx-auto';
galleryP.textContent = "See how we've transformed properties across Jacksonville with our signature palm installations.";
galleryHeader.append(galleryH2, galleryP);

const galleryGrid = document.createElement('div');
galleryGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
const galleryItems = [
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315437/IMG_4774.heic_vutjsa.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315437/IMG_4774.heic_vutjsa.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315437/IMG_4774.heic_vutjsa.webp 800w', alt: 'Luxury Backyard Oasis', delay: '' },
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315436/IMG_4563.heic_mfrtze.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315436/IMG_4563.heic_mfrtze.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315436/IMG_4563.heic_mfrtze.webp 800w', alt: 'Resort-Style Backyard', delay: '100' },
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315432/IMG_3818.heic_dxv4cv.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315432/IMG_3818.heic_dxv4cv.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315432/IMG_3818.heic_dxv4cv.webp 800w', alt: 'Palm-Lined Pool Area', delay: '200' },
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315432/placeholder_image.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758315432/placeholder_image.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758315432/placeholder_image.webp 800w', alt: 'Luxury Outdoor Living Space', delay: '' },
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758307365/IMG_7625_yvjdpf.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758307365/IMG_7625_yvjdpf.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758307365/IMG_7625_yvjdpf.webp 800w', alt: 'Tropical Backyard Paradise', delay: '100' },
    { src: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758307366/IMG_7662_jesc7o.jpg', webpSrc: 'https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_1200/v1758307366/IMG_7662_jesc7o.webp 1200w, https://res.cloudinary.com/dxghmamh0/image/upload/q_auto,f_auto,w_800/v1758307366/IMG_7662_jesc7o.webp 800w', alt: 'Premium Palm Oasis', delay: '200' }
];
galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'rounded-lg overflow-hidden shadow-lg';
    div.setAttribute('data-aos', 'zoom-in');
    if (item.delay) div.setAttribute('data-aos-delay', item.delay);
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = item.webpSrc;
    source.type = 'image/webp';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.className = 'w-full h-80 object-cover hover:scale-105 transition duration-500';
    img.loading = 'lazy';
    picture.append(source, img);
    div.appendChild(picture);
    galleryGrid.appendChild(div);
});
const galleryLink = document.createElement('div');
galleryLink.className = 'text-center mt-12';
const galleryA = document.createElement('a');
galleryA.href = '#';
galleryA.className = 'inline-flex items-center text-green-600 font-medium';
galleryA.textContent = 'View Full Gallery';
const galleryArrow = document.createElement('i');
galleryArrow.setAttribute('data-feather', 'arrow-right');
galleryArrow.className = 'ml-2';
galleryA.appendChild(galleryArrow);
galleryLink.appendChild(galleryA);
galleryContainer.append(galleryHeader, galleryGrid, galleryLink);
gallerySection.appendChild(galleryContainer);
document.body.appendChild(gallerySection);

// Testimonials Section
const testimonialsSection = document.createElement('section');
testimonialsSection.id = 'testimonials';
testimonialsSection.className = 'py-20 bg-gray-50';
const testimonialsContainer = document.createElement('div');
testimonialsContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const testimonialsHeader = document.createElement('div');
testimonialsHeader.className = 'text-center mb-16';
testimonialsHeader.setAttribute('data-aos', 'fade-up');
const testimonialsH2 = document.createElement('h2');
testimonialsH2.className = 'text-3xl font-bold text-gray-900 mb-4';
testimonialsH2.textContent = 'What Our Clients Say';
const testimonialsP = document.createElement('p');
testimonialsP.className = 'text-lg text-gray-600 max-w-3xl mx-auto';
testimonialsP.textContent = 'Hear from property owners who transformed their spaces with our palm tree installations.';
testimonialsHeader.append(testimonialsH2, testimonialsP);

const testimonialsGrid = document.createElement('div');
testimonialsGrid.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';
const testimonials = [
    {
        quote: 'The palm trees installed by Luxury Palms JAX completely transformed our beachfront property. Their attention to detail and knowledge of palm varieties was impressive.',
        author: 'Michael R.',
        location: 'Ponte Vedra Beach',
        delay: '100'
    },
    {
        quote: "Our hotel's curb appeal increased dramatically after Luxury Palms JAX installed mature royal palms at our entrance. Professional from start to finish.",
        author: 'Sarah L.',
        location: 'Jacksonville Beach Resort',
        delay: '200'
    },
    {
        quote: 'The team installed 15 palm trees at our new construction site with precision and care. Their follow-up maintenance program keeps our investment thriving.',
        author: 'David K.',
        location: 'New Construction Developer',
        delay: '300'
    }
];
testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card p-8 rounded-lg shadow-md';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', testimonial.delay);
    const starsDiv = document.createElement('div');
    starsDiv.className = 'flex items-center mb-4';
    const starsInner = document.createElement('div');
    starsInner.className = 'flex-shrink-0';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.setAttribute('data-feather', 'star');
        star.className = 'text-yellow-400 fill-current';
        starsInner.appendChild(star);
    }
    starsDiv.appendChild(starsInner);
    const p = document.createElement('p');
    p.className = 'text-gray-700 mb-6';
    p.textContent = `"${testimonial.quote}"`;
    const authorDiv = document.createElement('div');
    authorDiv.className = 'flex items-center';
    const authorInner = document.createElement('div');
    authorInner.className = 'ml-4';
    const h4 = document.createElement('h4');
    h4.className = 'text-lg font-semibold';
    h4.textContent = testimonial.author;
    const loc = document.createElement('p');
    loc.className = 'text-gray-600';
    loc.textContent = testimonial.location;
    authorInner.append(h4, loc);
    authorDiv.appendChild(authorInner);
    card.append(starsDiv, p, authorDiv);
    testimonialsGrid.appendChild(card);
});
testimonialsContainer.append(testimonialsHeader, testimonialsGrid);
testimonialsSection.appendChild(testimonialsContainer);
document.body.appendChild(testimonialsSection);

// CTA Section
const ctaSection = document.createElement('section');
ctaSection.className = 'py-20 bg-green-700 text-white';
const ctaContainer = document.createElement('div');
ctaContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center';
const ctaH2 = document.createElement('h2');
ctaH2.className = 'text-3xl font-bold mb-6';
ctaH2.setAttribute('data-aos', 'fade-up');
ctaH2.textContent = 'Ready to Elevate Your Property?';
const ctaP = document.createElement('p');
ctaP.className = 'text-xl mb-8 max-w-3xl mx-auto';
ctaP.setAttribute('data-aos', 'fade-up');
ctaP.setAttribute('data-aos-delay', '100');
ctaP.textContent = 'Schedule your complimentary palm tree consultation today.';
const ctaButtons = document.createElement('div');
ctaButtons.className = 'flex flex-col sm:flex-row justify-center gap-4';
ctaButtons.setAttribute('data-aos', 'fade-up');
ctaButtons.setAttribute('data-aos-delay', '200');
const ctaButton1 = document.createElement('a');
ctaButton1.href = '#contact';
ctaButton1.className = 'bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-md text-lg font-medium transition duration-300';
ctaButton1.textContent = 'Get a Free Quote';
const ctaButton2 = document.createElement('a');
ctaButton2.href = 'tel:4434871019';
ctaButton2.className = 'border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-md text-lg font-medium transition duration-300';
const ctaPhoneIcon = document.createElement('i');
ctaPhoneIcon.setAttribute('data-feather', 'phone');
ctaPhoneIcon.className = 'inline mr-2';
ctaButton2.append(ctaPhoneIcon, '(443) 487-1019');
ctaButtons.append(ctaButton1, ctaButton2);
ctaContainer.append(ctaH2, ctaP, ctaButtons);
ctaSection.appendChild(ctaContainer);
document.body.appendChild(ctaSection);

// Contact Section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.className = 'py-20 bg-white';
const contactContainer = document.createElement('div');
contactContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const contactGrid = document.createElement('div');
contactGrid.className = 'lg:grid lg:grid-cols-2 lg:gap-16';
const contactInfo = document.createElement('div');
contactInfo.className = 'mb-12 lg:mb-0';
contactInfo.setAttribute('data-aos', 'fade-right');
const contactH2 = document.createElement('h2');
contactH2.className = 'text-3xl font-bold text-gray-900 mb-6';
contactH2.textContent = 'Request a Consultation';
const contactP = document.createElement('p');
contactP.className = 'text-lg text-gray-600 mb-8';
contactP.textContent = 'Complete the form to schedule your free palm tree installation consultation. Our experts will assess your property and provide recommendations tailored to your vision.';
const contactDetails = document.createElement('div');
contactDetails.className = 'space-y-6';
const contactItems = [
    { icon: 'map-pin', title: 'Service Area', desc: 'Jacksonville and surrounding areas including Ponte Vedra, St. Augustine, and Amelia Island' },
    { icon: 'clock', title: 'Business Hours', desc: 'Monday - Friday: 8am - 6pm<br>Saturday: 9am - 2pm<br>Sunday: Closed' },
    { icon: 'phone', title: 'Contact', desc: 'Phone: (443) 487-1019<br>Email: info@luxurypalmsjax.com' }
];
contactItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'flex items-start';
    const iconDiv = document.createElement('div');
    iconDiv.className = 'flex-shrink-0';
    const icon = document.createElement('i');
    icon.setAttribute('data-feather', item.icon);
    icon.className = 'palm-icon h-6 w-6';
    iconDiv.appendChild(icon);
    const textDiv = document.createElement('div');
    textDiv.className = 'ml-3';
    const h3 = document.createElement('h3');
    h3.className = 'text-lg font-medium text-gray-900';
    h3.textContent = item.title;
    const p = document.createElement('p');
    p.className = 'text-gray-600';
    p.innerHTML = item.desc;
    textDiv.append(h3, p);
    div.append(iconDiv, textDiv);
    contactDetails.appendChild(div);
});
contactInfo.append(contactH2, contactP, contactDetails);

const contactFormDiv = document.createElement('div');
contactFormDiv.setAttribute('data-aos', 'fade-left');
const form = document.createElement('form');
form.id = 'contact-form';
form.action = 'https://formspree.io/f/xzzjbgja';
form.method = 'POST';
form.className = 'space-y-6';
const formFields = [
    { label: 'Full Name', id: 'name', type: 'text', name: 'name' },
    { label: 'Email Address', id: 'email', type: 'email', name: 'email' },
    { label: 'Phone Number', id: 'phone', type: 'tel', name: 'phone' },
];
formFields.forEach(field => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.htmlFor = field.id;
    label.className = 'block text-sm font-medium text-gray-700';
    label.textContent = field.label;
    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.name = field.name;
    input.className = 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-green-500 focus:border-green-500';
    input.required = true;
    div.append(label, input);
    form.appendChild(div);
});
const propertyTypeDiv = document.createElement('div');
const propertyLabel = document.createElement('label');
propertyLabel.htmlFor = 'property-type';
propertyLabel.className = 'block text-sm font-medium text-gray-700';
propertyLabel.textContent = 'Property Type';
const select = document.createElement('select');
select.id = 'property-type';
select.name = 'property-type';
select.className = 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-green-500 focus:border-green-500';
['Residential', 'Commercial', 'New Construction', 'Other'].forEach(opt => {
    const option = document.createElement('option');
    option.textContent = opt;
    select.appendChild(option);
});
propertyTypeDiv.append(propertyLabel, select);
const messageDiv = document.createElement('div');
const messageLabel = document.createElement('label');
messageLabel.htmlFor = 'message';
messageLabel.className = 'block text-sm font-medium text-gray-700';
messageLabel.textContent = 'Project Details';
const textarea = document.createElement('textarea');
textarea.id = 'message';
textarea.name = 'message';
textarea.rows = '4';
textarea.className = 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-green-500 focus:border-green-500';
textarea.required = true;
messageDiv.append(messageLabel, textarea);
const submitDiv = document.createElement('div');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = 'w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300';
submitButton.textContent = 'Submit Request';
submitDiv.appendChild(submitButton);
const formMessage = document.createElement('div');
formMessage.id = 'form-message';
formMessage.className = 'text-center text-red-600 hidden';
form.append(propertyTypeDiv, messageDiv, submitDiv, formMessage);
contactFormDiv.appendChild(form);
contactGrid.append(contactInfo, contactFormDiv);
contactContainer.appendChild(contactGrid);
contactSection.appendChild(contactContainer);
document.body.appendChild(contactSection);

// Footer
const footer = document.createElement('footer');
footer.className = 'bg-gray-900 text-white py-12';
const footerContainer = document.createElement('div');
footerContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const footerGrid = document.createElement('div');
footerGrid.className = 'grid grid-cols-1 md:grid-cols-4 gap-8';
const footerSections = [
    {
        content: () => {
            const div = document.createElement('div');
            const flex = document.createElement('div');
            flex.className = 'flex items-center';
            const icon = document.createElement('i');
            icon.setAttribute('data-feather', 'palm-tree');
            icon.className = 'palm-icon h-8 w-8';
            const span = document.createElement('span');
            span.className = 'ml-2 text-xl font-bold';
            span.textContent = 'Luxury Palm Landworks';
            flex.append(icon, span);
            const p = document.createElement('p');
            p.className = 'mt-4 text-gray-400';
            p.textContent = "Jacksonville's premier palm tree installation specialists creating tropical paradises since 2010.";
            div.append(flex, p);
            return div;
        }
    },
    {
        title: 'Services',
        items: [
            { href: '#', text: 'Palm Tree Installation' },
            { href: '#', text: 'Commercial Landscaping' },
            { href: '#', text: 'Residential Landscaping' },
            { href: '#', text: 'Maintenance Services' }
        ]
    },
    {
        title: 'Quick Links',
        items: [
            { href: '#services', text: 'Our Services' },
            { href: '#gallery', text: 'Gallery' },
            { href: '#testimonials', text: 'Testimonials' },
            { href: '#contact', text: 'Contact' }
        ]
    },
    {
        title: 'Contact Us',
        items: [
            { icon: 'map-pin', text: 'Jacksonville, FL' },
            { icon: 'phone', text: '(443) 487-1019' },
            { icon: 'mail', text: 'mjjg2288@gmail.com' }
        ],
        social: [
            { href: '#', icon: 'facebook' },
            { href: '#', icon: 'instagram' },
            { href: '#', icon: 'twitter' }
        ]
    }
];
footerSections.forEach(section => {
    const div = document.createElement('div');
    if (section.content) {
        div.appendChild(section.content());
    } else {
        const h3 = document.createElement('h3');
        h3.className = 'text-lg font-semibold mb-4';
        h3.textContent = section.title;
        const ul = document.createElement('ul');
        ul.className = 'space-y-2';
        section.items.forEach(item => {
            const li = document.createElement('li');
            if (item.icon) {
                li.className = 'flex items-center';
                const icon = document.createElement('i');
                icon.setAttribute('data-feather', item.icon);
                icon.className = 'h-5 w-5 text-gray-400 mr-2';
                const span = document.createElement('span');
                span.className = 'text-gray-400';
                span.textContent = item.text;
                li.append(icon, span);
            } else {
                const a = document.createElement('a');
                a.href = item.href;
                a.className = 'text-gray-400 hover:text-white transition duration-300';
                a.textContent = item.text;
                li.appendChild(a);
            }
            ul.appendChild(li);
        });
        div.appendChild(h3);
        div.appendChild(ul);
        if (section.social) {
            const socialDiv = document.createElement('div');
            socialDiv.className = 'mt-4 flex space-x-4';
            section.social.forEach(social => {
                const a = document.createElement('a');
                a.href = social.href;
                a.className = 'text-gray-400 hover:text-white transition duration-300';
                const icon = document.createElement('i');
                icon.setAttribute('data-feather', social.icon);
                icon.className = 'h-6 w-6';
                a.appendChild(icon);
                socialDiv.appendChild(a);
            });
            div.appendChild(socialDiv);
        }
    }
    footerGrid.appendChild(div);
});
const footerCopy = document.createElement('div');
footerCopy.className = 'mt-12 pt-8 border-t border-gray-800 text-center text-gray-400';
const copyP = document.createElement('p');
copyP.textContent = '© 2023 Luxury Palms JAX. All rights reserved.';
footerCopy.appendChild(copyP);
footerContainer.append(footerGrid, footerCopy);
footer.appendChild(footerContainer);
document.body.appendChild(footer);

// JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // AOS initialization
    aosScript.addEventListener('load', () => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    });

    // Feather Icons and Mobile Menu
    featherScript.addEventListener('load', () => {
        feather.replace();
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');
            mobileMenuButton.setAttribute('aria-expanded', isOpen);
            mobileMenuButton.querySelector('i').setAttribute('data-feather', isOpen ? 'x' : 'menu');
            feather.replace();
        });
    });

    // Form validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !phone || !message) {
            formMessage.textContent = 'Please fill out all required fields.';
            formMessage.classList.remove('hidden');
            return;
        }

        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.remove('hidden');
            return;
        }

        formMessage.classList.add('hidden');
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                'property-type': document.getElementById('property-type').value,
                message,
            }),
        })
            .then(response => {
                if (response.ok) {
                    formMessage.textContent = 'Form submitted successfully!';
                    formMessage.classList.remove('hidden', 'text-red-600');
                    formMessage.classList.add('text-green-600');
                    form.reset();
                } else {
                    formMessage.textContent = 'Error submitting form. Please try again.';
                    formMessage.classList.remove('hidden');
                }
            })
            .catch(() => {
                formMessage.textContent = 'Error submitting form. Please try again.';
                formMessage.classList.remove('hidden');
            });
    });
});
