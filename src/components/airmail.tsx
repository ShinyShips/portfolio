import {
  portfolio,
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

export function SiteHeader({ statusLabel }: { statusLabel?: string }) {
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
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact" className="primary-nav__contact">
              CONTACT
            </a>
          </nav>
          <ThemeToggle />
        </div>
      )}
    </header>
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
  return (
    <a className="work-card" href={item.href} {...externalProps}>
      <span className="work-card__period">{item.period}</span>
      <h3>{item.company}</h3>
      <p>
        {item.role}
        <span className="work-card__detail"> · {item.detail}</span>
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
        <small>{project.description}</small>
      </span>
      <span className="minor-parcel__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
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
