import Image from "next/image";

const featuredProjects = [
  {
    number: "01",
    name: "Prisma News",
    category: "Aplicativo mobile · Jornalismo",
    description:
      "Aplicativo mobile que reúne como veículos de diferentes linhas editoriais cobrem o mesmo acontecimento, com contexto e verificações baseadas em fontes públicas.",
    href: "https://www.prismanews.com.br/",
    label: "Acessar o Prisma",
    image: "/prisma.svg",
    imageAlt: "Identidade visual do Prisma News",
    tags: ["Expo", "TypeScript", "Python"],
    featured: true,
  },
  {
    number: "02",
    name: "InvesCHAT",
    category: "Educação financeira · IA",
    description:
      "Chatbot de auxílio à educação financeira, criado como Trabalho de Conclusão de Curso no IFMA.",
    href: "https://inves-chat.vercel.app/",
    label: "Explorar projeto",
    image: "/inveschat.png",
    imageAlt: "Mascote do InvesCHAT com gráficos financeiros",
    tags: ["Chatbot", "Educação", "IFMA"],
  },
  {
    number: "03",
    name: "Semana Detox",
    category: "Landing page · Creator economy",
    description:
      "Uma página de campanha para apresentar a Semana Detox da influenciadora digital Kimberly Zucatelli.",
    href: "https://semana-detox.com/",
    label: "Visitar página",
    image: "/semana.svg",
    imageAlt: "Identidade visual da Semana Detox",
    tags: ["Landing page", "Web design"],
  },
];

const otherProjects = [
  {
    name: "Sistema de Tickets",
    description: "Compra de tickets para restaurantes universitários.",
    href: "https://github.com/gustavosx1/Projeto-SBDE",
    stack: "Aplicação web",
  },
  {
    name: "Aplicativo de Câmbio",
    description: "App mobile com autenticação e consulta de câmbio.",
    href: "https://github.com/gustavosx1/projeto-cambio",
    stack: "Flutter · Dart",
  },
  {
    name: "E-commerce para ótica",
    description: "Loja virtual com catálogo, carrinho e experiência de compra.",
    href: "https://github.com/gustavosx1/Projeto-Ecom",
    stack: "React · TypeScript · PostgreSQL",
  },
  {
    name: "Servidor HTTP",
    description: "Implementação própria de um servidor HTTP/1.1.",
    href: "https://github.com/gustavosx1/http-server",
    stack: "Go · Redes",
  },
];

const skills = [
  { group: "Web", items: "TypeScript · JavaScript · React · Next.js · Tailwind CSS" },
  { group: "Backend", items: "Go · Node.js · Ruby · PHP · Spring Boot" },
  { group: "Dados & Mobile", items: "PostgreSQL · SQL · Python · Expo · React Native · Dart · Flutter" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <aside className="sidebar">
        <a className="brand" href="#inicio" aria-label="Gustavo Rocha, início">
          <Image className="brand-avatar" src="/foto.svg" alt="" width={34} height={34} priority />
          <span className="brand-name">Gustavo Rocha</span>
        </a>

        <div className="profile-card">
          <Image className="avatar" src="/foto.svg" alt="Foto de Gustavo Rocha" width={40} height={40} />
          <div>
            <p className="profile-name">Gustavo Rocha</p>
            <p className="profile-role">Desenvolvedor de software</p>
          </div>
          <span className="availability"><span /> Disponível para projetos</span>
        </div>

        <p className="sidebar-label">NAVEGAÇÃO</p>
        <nav className="side-nav" aria-label="Navegação principal">
          <a className="nav-link active" href="#inicio"><span>⌂</span> Início</a>
          <a className="nav-link" href="#projetos"><span>▦</span> Projetos</a>
          <a className="nav-link" href="#sobre"><span>◎</span> Sobre mim</a>
          <a className="nav-link" href="#tecnologias"><span>⌘</span> Tecnologias</a>
          <a className="nav-link" href="#contato"><span>↗</span> Contato</a>
        </nav>

        <div className="sidebar-bottom">
          <p className="sidebar-label">ENCONTRE-ME</p>
          <a className="social-link" href="https://github.com/gustavosx1" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <a className="social-link" href="https://www.linkedin.com/in/gustavo-bandeira-rocha/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          <p className="copyright">© {new Date().getFullYear()} Gustavo Rocha</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span className="breadcrumb">Portfolio <span>/</span> Início</span>
          <a className="topbar-link" href="mailto:gustavosantos.kng@gmail.com">Vamos conversar <ArrowIcon /></a>
        </header>

        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> OLÁ, EU SOU O GUSTAVO</p>
            <h1>Ideias bem pensadas.<br /><span>Software que faz</span><br />a diferença.</h1>
            <p className="hero-description">
              Desenvolvedor e estudante de Sistemas de Informação. Gosto de transformar problemas reais em produtos digitais úteis, acessíveis e bem construídos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Conheça meus projetos <ArrowIcon /></a>
              <a className="button button-secondary" href="mailto:gustavosantos.kng@gmail.com">Entre em contato</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Resumo profissional">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-portrait-frame">
              <Image className="hero-portrait" src="/foto.svg" alt="Foto de Gustavo Rocha" width={220} height={220} priority />
            </div>
            <div className="hero-caption"><span className="caption-dot" /> Construindo com propósito</div>
            <span className="hero-coordinate">04° 36′ S&nbsp; · &nbsp;44° 10′ W</span>
          </div>
        </section>

        <section className="featured section-wrap" id="projetos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TRABALHO SELECIONADO</p>
              <h2>Projetos em destaque<span>.</span></h2>
            </div>
            <span className="section-count">01 — 03</span>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className={`project-card${project.featured ? " project-featured" : ""}`} key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <a className="project-external" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.label} (abre em nova aba)`}><ArrowIcon /></a>
                </div>
                <p className="project-category">{project.category}</p>
                <div className="project-title-row">
                  <Image className="project-icon" src={project.image} alt={project.imageAlt} width={52} height={52} />
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="sobre">
          <div className="about-intro">
            <p className="eyebrow">UM POUCO SOBRE MIM</p>
            <h2>Curiosidade que vira<br />coisa <span>concreta.</span></h2>
          </div>
          <div className="about-copy">
            <p>Sou estudante de Sistemas de Informação e desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Aprendo construindo: da descoberta do problema à experiência final, sempre buscando equilibrar clareza, tecnologia e cuidado com quem usa.</p>
            <a className="text-link" href="https://github.com/gustavosx1" target="_blank" rel="noreferrer">Mais no GitHub <ArrowIcon /></a>
          </div>
        </section>

        <section className="more-work section-wrap" aria-labelledby="more-work-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">TAMBÉM JÁ CONSTRUÍ</p>
              <h2 id="more-work-title">Mais experiências<span>.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/gustavosx1" target="_blank" rel="noreferrer">Ver GitHub <ArrowIcon /></a>
          </div>
          <div className="more-projects">
            {otherProjects.map((project) => (
              <a className="more-project" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <span className="more-project-icon">↗</span>
                <span className="more-project-copy"><strong>{project.name}</strong><span>{project.description}</span><small>{project.stack}</small></span>
                <span className="more-project-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="tecnologias">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">FERRAMENTAS DO DIA A DIA</p>
              <h2>Tecnologias<span>.</span></h2>
            </div>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.group}><span>{skill.group}</span><p>{skill.items}</p><span className="skill-indicator">●</span></div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contato">
          <div>
            <p className="eyebrow">TEM UMA IDEIA?</p>
            <h2>Vamos construir<br /><span>algo relevante.</span></h2>
          </div>
          <a className="button button-primary contact-button" href="mailto:gustavosantos.kng@gmail.com">Fale comigo <ArrowIcon /></a>
        </section>

        <footer className="footer section-wrap">
          <span>Feito com intenção <span className="footer-heart">✳</span> por Gustavo Rocha</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </footer>
      </main>
    </div>
  );
}
