import {
  portfolio,
  type PageIntroduction,
  type ParcelProject,
  type PostcardProject,
  type WorkItem,
} from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "./mode-toggle";

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export type ActivePage = "overview" | "work" | "projects";

export function StampLogo({
  variant = "header",
}: {
  variant?: "header" | "seal" | "large";
}) {
  return (
    <span className={`stamp-shadow stamp-shadow--${variant}`}>
      <span className={`stamp-logo stamp-logo--${variant}`}>
        <span className="stamp-logo__frame">
          <span className="stamp-logo__word">
            ATN<span>:</span>
          </span>
          {variant === "seal" ? (
            <span className="stamp-logo__micro">NO SOLICITING ✕</span>
          ) : null}
        </span>
      </span>
    </span>
  );
}

export function SiteHeader({
  activePage = "overview",
  statusLabel,
}: {
  activePage?: ActivePage;
  statusLabel?: string;
}) {
  const navItems = [
    { label: "OVERVIEW", href: "/", page: "overview" },
    { label: "WORK", href: "/work", page: "work" },
    { label: "PROJECTS", href: "/projects", page: "projects" },
  ] as const;

  return (
    <header className="site-header">
      <Link href="/" aria-label="ATN home" className="logo-link">
        <StampLogo />
      </Link>
      {statusLabel ? (
        <span className="status-chip">{statusLabel}</span>
      ) : (
        <div className="header-actions">
          <nav aria-label="Primary navigation" className="primary-nav">
            {navItems.map((item) => (
              <Link
                aria-current={activePage === item.page ? "page" : undefined}
                href={item.href}
                key={item.page}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="primary-nav__contact">
              CONTACT
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}

export function PortfolioPageShell({
  activePage,
  children,
}: {
  activePage: ActivePage;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-shell">
        <SiteHeader activePage={activePage} />
        <main id="main-content">{children}</main>
        <FooterLine />
      </div>
    </>
  );
}

export function SectionHeading({
  children,
  note,
  tone = "red",
}: {
  children: ReactNode;
  note?: string;
  tone?: "red" | "blue";
}) {
  return (
    <div className={`section-heading section-heading--${tone}`}>
      <h2>
        <span aria-hidden="true">✦</span>
        {children}
      </h2>
      <span className="section-heading__rule" aria-hidden="true" />
      {note ? <span className="section-heading__note">{note}</span> : null}
    </div>
  );
}

export function WorkCard({ item }: { item: WorkItem }) {
  const company = item.summary.company ?? item.company;

  return (
    <a className="work-card" href={item.href} {...externalProps}>
      <span className="work-card__period">{item.summary.period}</span>
      <h3>{company}</h3>
      <p>
        {item.summary.role}
        <span className="work-card__detail"> · {item.summary.detail}</span>
      </p>
    </a>
  );
}

export function Postcard({
  project,
  index,
}: {
  project: PostcardProject;
  index: number;
}) {
  return (
    <a
      className="postcard"
      data-tilt={(index % 3) + 1}
      href={project.href}
      {...externalProps}
    >
      <Image
        src={project.image}
        alt={project.alt}
        width={500}
        height={300}
        sizes="(max-width: 480px) 90vw, (max-width: 760px) 42vw, 230px"
      />
      <div className="postcard__caption">
        <h3>{project.title}</h3>
        <span className="postcard__period">{project.meta}</span>
        <p className="postcard__note">{project.note}</p>
      </div>
    </a>
  );
}

export function MinorParcel({ project }: { project: ParcelProject }) {
  return (
    <a className="minor-parcel" href={project.href} {...externalProps}>
      <Image
        src={project.image}
        alt=""
        width={64}
        height={64}
        sizes="64px"
      />
      <span>
        <strong>{project.title}</strong>
        <small>{project.summary}</small>
      </span>
      <span className="minor-parcel__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export function PageIntro({ content }: { content: PageIntroduction }) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1 id="page-title">
        {content.titleLead}
        <span>:</span> {content.title}
        <span>.</span>
      </h1>
      <p>{content.introduction}</p>
    </section>
  );
}

export function TechnologyList({
  technologies,
}: {
  technologies: readonly string[];
}) {
  return (
    <div className="technology-list" aria-label="Technologies">
      {technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  );
}

export function WorkDossier({ item }: { item: WorkItem }) {
  const headingId = `work-${item.company.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="work-dossier" aria-labelledby={headingId}>
      <div className="work-dossier__header">
        <div className="work-dossier__identity">
          <span className="work-dossier__logo">
            {item.details.logo ? (
              <Image
                src={item.details.logo}
                alt=""
                width={44}
                height={44}
                sizes="44px"
              />
            ) : (
              <span aria-hidden="true">{item.company.charAt(0)}</span>
            )}
          </span>
          <div>
            <h2 id={headingId}>{item.company}</h2>
            <small>{item.details.role}</small>
          </div>
        </div>
        <time>{item.details.period}</time>
      </div>
      <ul className="work-dossier__responsibilities">
        {item.details.responsibilities.map((responsibility) => (
          <li key={responsibility}>
            <span aria-hidden="true">✦</span>
            {responsibility}
          </li>
        ))}
      </ul>
      <TechnologyList technologies={item.details.technologies} />
    </section>
  );
}

export function ProjectFeature({
  index,
  project,
}: {
  index: number;
  project: PostcardProject;
}) {
  return (
    <section
      className="project-feature"
      data-tilt={(index % 3) + 1}
      aria-labelledby={`project-${index}`}
    >
      <div className="project-feature__body">
        <a
          className="project-feature__image"
          href={project.href}
          aria-label={`Visit ${project.title}`}
          {...externalProps}
        >
          <Image
            src={project.image}
            alt={project.alt}
            width={640}
            height={400}
            sizes="(max-width: 560px) 90vw, 330px"
          />
        </a>
        <div className="project-feature__details">
          <div className="project-feature__heading">
            <h2 id={`project-${index}`}>{project.title}</h2>
            <time>{project.period}</time>
          </div>
          <p>{project.description}</p>
          <TechnologyList technologies={project.technologies} />
          <div className="project-feature__links">
            <a href={project.href} {...externalProps}>
              WEBSITE ↗
            </a>
            {project.sourceHref ? (
              <a href={project.sourceHref} {...externalProps}>
                SOURCE ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <p className="project-feature__note">{project.note}</p>
    </section>
  );
}

export function ExpandedParcel({ project }: { project: ParcelProject }) {
  return (
    <a className="expanded-parcel" href={project.href} {...externalProps}>
      <Image src={project.image} alt="" width={64} height={64} sizes="64px" />
      <span>
        <strong>{project.title}</strong>
        <small>{project.description}</small>
        <span className="expanded-parcel__source">SOURCE ↗</span>
      </span>
    </a>
  );
}

export function PageActions({
  primary,
}: {
  primary: { href: string; label: string };
}) {
  return (
    <nav className="page-actions" aria-label="Portfolio pages">
      <Link className="page-action page-action--secondary" href="/">
        ← BACK TO OVERVIEW
      </Link>
      <Link className="page-action page-action--primary" href={primary.href}>
        {primary.label} →
      </Link>
    </nav>
  );
}

export function ContactEnvelope() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-envelope">
        <div
          className="airmail-stripe airmail-stripe--small"
          aria-hidden="true"
        />
        <div className="contact-envelope__content">
          <div>
            <h2 id="contact-title" className="eyebrow">
              RETURN ADDRESS
            </h2>
            <p className="contact-email">
              <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            </p>
            <div className="contact-links">
              <a href={portfolio.social.github} {...externalProps}>
                GITHUB ↗
              </a>
              <a href={portfolio.social.linkedin} {...externalProps}>
                LINKEDIN ↗
              </a>
            </div>
          </div>
          <StampLogo variant="seal" />
        </div>
      </div>
    </section>
  );
}

export function FooterLine() {
  return <footer className="footer-line">{portfolio.footer}</footer>;
}
