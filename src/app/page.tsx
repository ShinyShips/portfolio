import {
  ContactEnvelope,
  MinorParcel,
  PortfolioPageShell,
  Postcard,
  SectionHeading,
  WorkCard,
} from "@/components/airmail";
import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <PortfolioPageShell activePage="overview">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero__copy">
              <p className="eyebrow">{portfolio.hero.eyebrow}</p>
              <h1 id="hero-title">
                {portfolio.hero.titleLead}
                <span>:</span> {portfolio.hero.titleRecipient}
                <span>.</span>
              </h1>
              <p className="hero__intro">{portfolio.hero.introduction}</p>
              <p className="handwritten">{portfolio.hero.note}</p>
            </div>
            <div className="photo-stamp">
              <Image
                src={portfolio.hero.portrait.image}
                alt={portfolio.hero.portrait.alt}
                width={200}
                height={244}
                sizes="(max-width: 480px) 170px, 200px"
                priority
              />
              <span>{portfolio.hero.portrait.postage}</span>
            </div>
          </section>

          <section id="overview" className="portfolio-section">
            <SectionHeading>Overview</SectionHeading>
            <div className="about-copy">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="work" className="portfolio-section">
            <SectionHeading>Work</SectionHeading>
            <div className="work-grid">
              {portfolio.work.map((item) => (
                <WorkCard key={item.company} item={item} />
              ))}
            </div>
            <Link className="summary-link" href="/work">
              OPEN THE FULL EMPLOYMENT RECORD →
            </Link>
          </section>

          <section className="portfolio-section">
            <SectionHeading>Education</SectionHeading>
            <div className="education-list">
              {portfolio.education.map((item) => (
                <a
                  className="education-row"
                  href={item.href}
                  key={item.school}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <strong>{item.school}</strong>
                    <small>
                      {item.degree}
                      {item.focus ? (
                        <>
                          {" · "}
                          <em>{item.focus}</em>
                        </>
                      ) : null}
                    </small>
                  </span>
                  <time>{item.period}</time>
                </a>
              ))}
            </div>
          </section>

          <section className="portfolio-section">
            <SectionHeading note="SKILLS, DECLARED">
              Contents of Parcel
            </SectionHeading>
            <div className="skill-groups">
              {portfolio.skills.map((group) => (
                <section className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="projects" className="portfolio-section">
            <SectionHeading>Postcards from My Projects</SectionHeading>
            <div className="postcard-grid">
              {portfolio.projects.map((project, index) => (
                <Postcard key={project.title} project={project} index={index} />
              ))}
            </div>
            <Link className="summary-link" href="/projects">
              UNPACK ALL ENCLOSURES →
            </Link>
          </section>

          <section className="portfolio-section">
            <SectionHeading tone="blue">Minor Parcels</SectionHeading>
            <div className="minor-grid">
              {portfolio.minorProjects.map((project) => (
                <MinorParcel key={project.title} project={project} />
              ))}
            </div>
          </section>

          <ContactEnvelope />
    </PortfolioPageShell>
  );
}
