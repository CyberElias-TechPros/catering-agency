import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Menu, X, Instagram, Minus, Plus, MessageCircle } from 'lucide-react';
import './styles.css';

const whatsappLink = (message = "Hello Neomy's Pot! I'd love to plan an event with you.") =>
  `https://wa.me/2349036235070?text=${encodeURIComponent(message)}`;

const services = [
  { number: '01', title: 'Weddings', desc: 'For the kind of love worth gathering everyone for.', image: '/images/wedding.png', tag: 'A LOVE STORY, BEAUTIFULLY SERVED' },
  { number: '02', title: 'Corporate events', desc: 'Good food makes for even better business.', image: '/images/corporate.png', tag: 'MEANINGFUL MOMENTS, MADE BETTER' },
  { number: '03', title: 'Private gatherings', desc: 'Big celebrations or just because. We’re there.', image: '/images/private.png', tag: 'YOUR PEOPLE, OUR TABLE' },
];

function Logo({light = false}) { return <a className={'logo '+(light?'logo-light':'')} href="#home" aria-label="Neomy’s Pot home">Neomy’s Pot<span>✳</span><small>NIGERIAN CATERING</small></a> }
function Star({className=''}) { return <span aria-hidden="true" className={'star '+className}>✳</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => {document.body.style.overflow = ''}; }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const faqs = [
    ['Where do you cater?', 'We’re based in Lagos and love bringing the Neomy’s Pot experience to gatherings across Nigeria. Tell us where you’re celebrating and let’s talk.'],
    ['How far in advance should I book?', 'The earlier the better! We recommend reaching out as soon as you have a date, especially for weddings and larger celebrations.'],
    ['Can you create a custom menu?', 'Absolutely. Every gathering is different, and we’ll work with you to create a menu that feels just right for your people.'],
  ];
  return <>
    <div className="announcement">GOOD FOOD. GOOD PEOPLE. GOOD TIMES. <span>✳</span> MADE WITH LOVE IN LAGOS, NIGERIA</div>
    <header className="header" id="home">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#story">OUR STORY</a><a href="#services">WHAT WE DO</a><a href="#menu">THE MENU</a><a href="#love">KIND WORDS</a></nav>
      <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <ArrowUpRight size={15}/></a>
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu/></button>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="line"></span> A TASTE OF HOME, WHEREVER YOU ARE</div>
          <h1>Come hungry.<br/><em>Leave happy.</em></h1>
          <p>We bring people together over soulful Nigerian food and unforgettable experiences. Because the best memories are made around a table.</p>
          <div className="hero-actions"><a className="button button-dark" href={whatsappLink()} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <MessageCircle size={17}/></a><a className="text-link" href="#story">GET TO KNOW US <ArrowDown size={15}/></a></div>
          <div className="hero-note"><span className="little-flower">✳</span><div><strong>MADE FOR GATHERING</strong><br/><span>Rooted in culture. Served with love.</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/images/feast-hero.png" alt="A generous spread of Nigerian jollof rice, grilled meats and plantain"/><div className="image-shade"></div><div className="image-caption"><span>THE NEOMY’S POT EXPERIENCE</span><span>01 / 03</span></div></div>
          <div className="round-stamp"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/></defs><text><textPath href="#circle">GOOD FOOD • GOOD COMPANY • </textPath></text></svg><span>✳</span></div>
          <div className="vertical-label">A LITTLE BIT OF LAGOS, A WHOLE LOT OF LOVE</div>
          <Star className="hero-star" />
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><ArrowDown size={14}/></div>
      </section>
      <div className="ticker" aria-label="Food tastes better together"><div className="ticker-track">{Array.from({length:4},(_,i)=><span key={i}>FOOD TASTES BETTER TOGETHER <b>✳</b> EVERY OCCASION DESERVES A LITTLE EXTRA <b>✳</b></span>)}</div></div>
      <section id="story" className="story section-pad">
        <div className="story-side reveal"><span className="section-kicker">A LITTLE ABOUT US <span>↗</span></span><div className="story-mark">N.P.<span>✳</span></div><p>GOOD FOOD, <br/>MADE WITH LOVE</p></div>
        <div className="story-main reveal"><span className="eyebrow"><span className="line"></span> PULL UP A CHAIR</span><h2>More than a meal.<br/><em>It’s a feeling.</em></h2><div className="story-text"><p>You know that feeling when the food is just right, the music is playing, and you’re surrounded by your favourite people? That’s what we do.</p><p>At Neomy’s Pot, we believe food is our love language. Inspired by the richness of Nigerian culture, we create generous, joy-filled experiences that bring everyone a little closer.</p><a href="#services" className="under-link">A SEAT AT OUR TABLE <ArrowUpRight size={16}/></a></div></div>
      </section>
      <section id="services" className="services section-pad">
        <div className="section-heading reveal"><div><span className="eyebrow light-eyebrow"><span className="line"></span> THE GOOD STUFF</span><h2>Whatever the occasion,<br/><em>we’ll bring the flavour.</em></h2></div><p>From the first bite to the last dance, we make every gathering one to remember.</p></div>
        <div className="service-grid">{services.map(s=><article className="service-card reveal" key={s.number}><div className="service-image"><img src={s.image} alt={s.title+' catering experience'}/><span className="image-tag">{s.tag}</span><a className="service-enquiry" href={whatsappLink(`Hello Neomy's Pot! I’d love to ask about catering for ${s.title.toLowerCase()}.`)} target="_blank" rel="noreferrer" aria-label={'Ask on WhatsApp about '+s.title}><ArrowUpRight size={22}/></a></div><div className="service-title"><span>{s.number} /</span><h3>{s.title}</h3><ArrowUpRight size={19}/></div><p>{s.desc}</p></article>)}</div>
        <div className="services-bottom"><span>GOOD FOOD IS ALWAYS A GOOD IDEA.</span><a className="button button-cream" href={whatsappLink()} target="_blank" rel="noreferrer">PLAN ON WHATSAPP <MessageCircle size={17}/></a></div>
      </section>
      <section id="menu" className="menu-section section-pad">
        <div className="menu-top reveal"><span className="eyebrow"><span className="line"></span> A LITTLE TASTE OF NEOMY’S POT</span><h2>Made with heart.<br/><em>Served with joy.</em></h2><p>Familiar flavours, a little flair, and plenty to go around. Here’s a taste of what could be on your table.</p></div>
        <div className="menu-list reveal">
          <div className="menu-row"><span>01</span><div><h3>Party Jollof Rice</h3><p>Smoky, rich, and always the life of the party.</p></div><span className="menu-symbol">✳</span></div>
          <div className="menu-row"><span>02</span><div><h3>Suya & Grills</h3><p>Flame-kissed favourites with a little bit of heat.</p></div><span className="menu-symbol">✳</span></div>
          <div className="menu-row"><span>03</span><div><h3>Small Chops</h3><p>Little bites, big flavour. Best shared, of course.</p></div><span className="menu-symbol">✳</span></div>
          <div className="menu-row"><span>04</span><div><h3>Something Sweet</h3><p>A deliciously happy ending to a beautiful meal.</p></div><span className="menu-symbol">✳</span></div>
        </div><div className="menu-footer reveal"><p>Every menu is made for you. Let’s dream yours up together.</p><a href={whatsappLink("Hello Neomy's Pot! I’d love to talk about your catering menu.")} target="_blank" rel="noreferrer" className="under-link">LET'S TALK FOOD ON WHATSAPP <ArrowUpRight size={16}/></a></div>
      </section>
      <section id="love" className="testimonial section-pad"><div className="quote-wrap reveal"><Star/><span className="eyebrow">A LITTLE LOVE FROM OUR PEOPLE</span><blockquote>“There’s something special about the way good food brings everyone together.”</blockquote><div className="quote-rule"></div><p>THAT’S THE NEOMY’S POT WAY <span>—</span> ALWAYS MADE WITH LOVE</p></div></section>
      <section className="faq section-pad"><div className="faq-heading reveal"><span className="eyebrow"><span className="line"></span> GOOD TO KNOW</span><h2>A few things<br/><em>you might ask.</em></h2><p>Still curious? We’d love to hear from you.</p><a className="under-link" href={whatsappLink()} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <ArrowUpRight size={16}/></a></div><div className="faq-list reveal">{faqs.map((f,i)=><div className={'faq-item '+(openFaq===i?'active':'')} key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{f[0]}</span>{openFaq===i?<Minus size={18}/>:<Plus size={18}/>}</button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></section>
      <section className="contact section-pad"><div className="contact-inner reveal"><span className="eyebrow">GOOD FOOD. EVEN BETTER COMPANY.</span><h2>Let’s make something<br/><em>worth remembering.</em></h2><p>Have a date, a dream, or just a really good reason to gather? We’d love to hear about it.</p><a className="button button-cream" href={whatsappLink()} target="_blank" rel="noreferrer">START PLANNING ON WHATSAPP <MessageCircle size={17}/></a><Star className="contact-star"/></div></section>
    </main>
    <footer className="footer"><div className="footer-main"><div><Logo light/><p>Good food has a way of bringing<br/>people home.</p></div><div className="footer-col"><span>EXPLORE</span><a href="#story">Our story</a><a href="#services">What we do</a><a href="#menu">The menu</a></div><div className="footer-col"><span>GET IN TOUCH</span><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp: +234 903 623 5070</a><span>LAGOS, NIGERIA</span></div><div className="footer-social"><span>FOLLOW THE GOOD STUFF</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19}/> <ArrowUpRight size={15}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NEOMY’S POT</span><span>MADE WITH LOVE, ALWAYS. ✳</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    {menuOpen && <div className="mobile-overlay"><div className="mobile-top"><Logo/><button onClick={closeMenu} aria-label="Close menu"><X/></button></div><nav><a onClick={closeMenu} href="#story">Our story <ArrowUpRight/></a><a onClick={closeMenu} href="#services">What we do <ArrowUpRight/></a><a onClick={closeMenu} href="#menu">The menu <ArrowUpRight/></a><a onClick={closeMenu} href="#love">Kind words <ArrowUpRight/></a></nav><a className="button button-dark" href={whatsappLink()} target="_blank" rel="noreferrer">CHAT ON WHATSAPP <MessageCircle size={17}/></a></div>}
    <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with Neomy’s Pot on WhatsApp"><MessageCircle size={23}/><span>CHAT WITH US</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
