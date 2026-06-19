import Image from 'next/image';
import {
  ArrowRight, BarChart3, Code2, Compass, Globe2, Handshake, Instagram,
  Lightbulb, LineChart, Mail, MapPin, Megaphone, Mic, Monitor, Play,
  Rocket, ShieldCheck, ShoppingCart, Star, Trophy, Users, Volleyball, Wand2
} from 'lucide-react';

const nav = ['Sobre', 'Serviços', 'Cases', 'Clientes', 'Diferenciais', 'Blog', 'Contato'];
const services = [
  ['01', Wand2, 'Branding e Design', 'Criamos identidades fortes e memoráveis que conectam marcas ao seu público e geram valor.'],
  ['02', Monitor, 'Sites Personalizados', 'Desenvolvimento de sites exclusivos, rápidos, responsivos e otimizados para conversão.'],
  ['03', Code2, 'Landing Pages', 'Páginas estratégicas que transformam visitantes em leads e aumentam suas conversões.'],
  ['04', Instagram, 'Mídias Sociais', 'Gestão estratégica de redes sociais para construir presença, autoridade e engajamento.'],
  ['05', Megaphone, 'Publicidade Criativa', 'Campanhas impactantes com produção de vídeos e fotos que geram conexão e vendas.'],
  ['06', LineChart, 'Gestão de Tráfego', 'Estratégias de mídia paga com foco em ROI, aquisição inteligente e crescimento sustentável.'],
  ['07', ShoppingCart, 'E-commerce', 'Lojas virtuais completas, seguras e otimizadas para vender mais.'],
  ['08', Mic, 'Assessoria de Imprensa', 'Gestão de imagem e relacionamento com a imprensa para posicionar sua marca.'],
  ['09', Rocket, 'Lançamentos', 'Estratégias completas para lançamentos de alto impacto e resultados extraordinários.'],
];
const cases = ['HanzBet', 'College Football Brasil', 'BH Wolves', 'Brasil Flag', 'TD do Bem', 'LINFA', 'Virada Bet', 'MFCFL', 'UniCesumar'];
const clients = ['🇺🇸', 'UniCesumar', 'SESC', 'HINOVA', 'BH WOLVES', 'MFCFL', 'CERRADO', 'COLLEGE FOOTBALL', 'Aquabeat', 'VIRADA BET', 'HanzBet', 'pagol.bet', 'Nissan Carbel', 'Brasil Sports Business', 'BRASIL FLAG'];
const diffs = [
  [Compass, 'Estratégia', 'Planejamento orientado por dados e inteligência de mercado para posicionar marcas à frente da concorrência.'],
  [Lightbulb, 'Criatividade', 'Ideias que conectam, campanhas que marcam e identidades que transformam marcas em referências.'],
  [Code2, 'Tecnologia', 'Sites, automações e soluções digitais modernas para escalar resultados e otimizar processos.'],
  [BarChart3, 'Performance', 'Gestão de tráfego e mídia paga com foco em ROI, aquisição inteligente e crescimento sustentável.'],
  [Globe2, 'Dados', 'Análise, métricas e BI para decisões assertivas e estratégias cada vez mais eficientes.'],
  [Volleyball, 'Esporte', 'Especialistas em marketing esportivo, conectando paixão, experiência e resultado real.'],
];

function Header() {
  return <header className="header">
    <a className="brand" href="#home"><Image src="/assets/logo-zebra.png" alt="Agência Zebra" width={132} height={80} priority /></a>
    <nav>{nav.map((n) => <a key={n} href={`#${n.toLowerCase().replace('ç','c')}`}>{n}</a>)}</nav>
    <a className="btn ghost" href="#contato">Falar com especialista <ArrowRight size={18}/></a>
  </header>
}
function SectionLabel({children}:{children:React.ReactNode}){return <div className="label"><span>{children}</span></div>}

export default function Home() {
  return <main>
    <Header />
    <section id="home" className="hero page">
      <div className="zebra-bg" />
      <div className="athlete left" />
      <div className="athlete right" />
      <div className="hero-inner">
        <Image src="/assets/logo-zebra.png" alt="Agência Zebra" width={330} height={190} className="hero-logo" />
        <h1>Marketing que transforma marcas em <em>movimentos.</em></h1>
        <p className="kicker">Estratégia • Criatividade • Performance • Tecnologia</p>
        <p className="lead">Somos especialistas em marketing esportivo e comunicação estratégica. Criamos experiências que conectam, engajam e geram resultados reais.</p>
        <div className="actions"><a className="btn light" href="#servicos">Conheça nossos serviços <ArrowRight/></a><a className="btn ghost" href="#contato">Falar com especialista <ArrowRight/></a></div>
      </div>
      <div className="reel"><div/><div/><div className="play"><Play fill="white"/></div><div/><div/></div>
      <Stats />
    </section>

    <section id="sobre" className="page about">
      <div><SectionLabel>Quem somos</SectionLabel><h2>Não somos uma agência de marketing.<br/><span>Somos uma agência de <em>crescimento.</em></span></h2><p>A Agência Zebra é especializada em marketing esportivo, transformando estratégia em comunicação criativa e orientada a resultados. Desenvolvemos soluções exclusivas, autênticas e de alto impacto.</p><a className="btn ghost" href="#servicos">Conheça nossos serviços <ArrowRight/></a></div>
      <div className="stadium"><span /></div>
      <Stats />
      <div className="timeline"><h3>Uma jornada movida por paixão, estratégia e <em>resultados.</em></h3><ul><li><b>2016</b><span>O início da Zebra.</span></li><li><b>2018</b><span>Expansão de portfólio e segmentos.</span></li><li><b>2020</b><span>Consolidação em marketing esportivo.</span></li><li><b>2024+</b><span>Criatividade, tecnologia e dados.</span></li></ul></div>
    </section>

    <section id="servicos" className="page services"><SectionLabel>Nossos serviços</SectionLabel><h2>Soluções completas para marcas que querem <em>liderar</em> mercados.</h2><p className="lead small">Unimos estratégia, criatividade, tecnologia e a paixão pelo esporte para entregar resultados que fazem a diferença.</p><div className="grid cards">{services.map(([num, Icon, title, text]: any)=><article className="card service" key={title}><span>{num}</span><Icon/><h3>{title}</h3><p>{text}</p><a>Saiba mais <ArrowRight size={16}/></a></article>)}</div><CTA /></section>

    <section id="cases" className="page cases"><div className="case-hero"><div><SectionLabel>Cases</SectionLabel><h2>Estratégia que vira resultado.</h2><p>Cada marca tem uma história única. Nosso trabalho é transformar objetivos em estratégias e estratégias em resultados extraordinários.</p><a className="link">Ver todos os cases <ArrowRight/></a></div><div className="helmet"/></div><div className="filters"><b>Todos</b><span>Betting</span><span>Esportes</span><span>Educação</span><span>Saúde</span><span>Tecnologia</span></div><div className="grid case-grid">{cases.map((c,i)=><article className="case-card" key={c}><div className="case-logo">{c}</div><small>{i%3===0?'Betting':i%3===1?'Esportes':'Tecnologia'}</small><h3>{c}</h3><p>Estratégia, branding, site, campanhas e gestão de comunicação digital.</p><a>Ver case <ArrowRight size={16}/></a></article>)}</div><CTA /></section>

    <section id="clientes" className="page clients"><SectionLabel>Clientes</SectionLabel><h2>Marcas que confiam na Zebra.</h2><p>Temos orgulho de construir parcerias sólidas e duradouras com marcas que compartilham da nossa visão de excelência e resultado.</p><div className="logos">{clients.map(c=><div key={c}>{c}</div>)}</div><Stats /></section>

    <section id="diferenciais" className="page differentials"><SectionLabel>Nossos diferenciais</SectionLabel><h2>O que nos torna <em>únicos</em> no mercado.</h2><p className="lead small">Unimos estratégia, criatividade, tecnologia e paixão pelo esporte para entregar resultados que realmente fazem a diferença.</p><div className="diff-grid">{diffs.map(([Icon,title,text]: any, i)=><article className="diff" key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div><CTA /></section>

    <section id="contato" className="page contact"><div><SectionLabel>Vamos conversar?</SectionLabel><h2>Vamos criar algo <em>extraordinário</em> juntos.</h2><p>Conte-nos sobre seu projeto e descubra como podemos transformar sua marca em referência no mercado.</p><div className="contact-list"><p><Mail/> contato@agenciazebra.com.br</p><p><Instagram/> @agenciazebra</p><p><MapPin/> São Paulo — SP, Brasil</p></div></div><form><h3>Envie sua mensagem</h3><input placeholder="Seu nome"/><input placeholder="Nome da sua empresa"/><input placeholder="seu@email.com"/><input placeholder="WhatsApp"/><select><option>Selecione o serviço</option></select><textarea placeholder="Conte-nos sobre seu projeto, objetivos e desafios..."/><button className="btn light">Solicitar proposta <ArrowRight/></button><small><ShieldCheck size={16}/> Seus dados estão seguros.</small></form></section>
    <footer><Image src="/assets/logo-zebra.png" alt="Zebra" width={150} height={90}/><p>Estratégia, criatividade e performance para marcas que querem liderar.</p><span>© 2026 Agência Zebra. Todos os direitos reservados.</span></footer>
  </main>
}
function Stats(){return <div className="stats"><div><Trophy/><b>120+</b><span>Projetos concluídos</span></div><div><Globe2/><b>20+</b><span>Nichos diferentes</span></div><div><Star/><b>8+</b><span>Anos no mercado</span></div></div>}
function CTA(){return <div className="cta"><h3>Vamos elevar sua marca ao <em>próximo nível.</em></h3><p>Soluções integradas para impulsionar marcas, conectar pessoas e gerar resultados reais.</p><a className="btn light" href="#contato">Falar com especialista <ArrowRight/></a></div>}
