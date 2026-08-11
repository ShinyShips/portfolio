import { PortfolioPageShell, SectionHeading } from "@/components/airmail";
import { maneuverCaseStudy as caseStudy } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: caseStudy.metadata.title,
  description: caseStudy.metadata.description,
  alternates: {
    canonical: "/projects/maneuver",
  },
};

export default function ManeuverCaseStudyPage() {
  return (
    <PortfolioPageShell activePage="projects">
      <article className="case-study">
        <div className="case-study-hero">
          <div className="case-study-hero__copy">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h1>
              Maneuver<span>:</span> {caseStudy.title}<span>.</span>
            </h1>
            <p className="case-study-hero__lede">{caseStudy.introduction}</p>
            <div className="case-study-metrics" aria-label="Maneuver reach">
              {caseStudy.metrics.map((metric) => (
                <span key={metric.label}>
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                </span>
              ))}
            </div>
            <div className="case-study-actions">
              <a
                href={caseStudy.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN MANEUVER ↗
              </a>
              <a
                href={caseStudy.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SOURCE ↗
              </a>
            </div>
          </div>
          <figure className="case-study-hero__image">
            <Image
              src={caseStudy.heroImage.src}
              alt={caseStudy.heroImage.alt}
              width={1454}
              height={1236}
              sizes="(max-width: 760px) 92vw, 640px"
              priority
            />
            <figcaption>{caseStudy.heroImage.caption}</figcaption>
          </figure>
        </div>

        <section className="case-study-section case-study-challenge">
          <SectionHeading>The challenge</SectionHeading>
          <p className="case-study-question">{caseStudy.challenge}</p>
        </section>

        <section className="case-study-section">
          <SectionHeading tone="blue">Designing for competition</SectionHeading>
          <p className="case-study-intro">
            {caseStudy.competitionIntroduction}
          </p>
          <div className="constraint-grid">
            {caseStudy.constraints.map((constraint) => (
              <article className="constraint-card" key={constraint.title}>
                <span>{constraint.label}</span>
                <h3>{constraint.title}</h3>
                <p>{constraint.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <SectionHeading>From UX constraints to architecture</SectionHeading>
          <p className="case-study-intro">
            {caseStudy.architectureIntroduction}
          </p>
          <div className="architecture-map">
            {caseStudy.architecture.map((item) => (
              <div className="architecture-row" key={item.need}>
                <div>
                  <span>USER NEED</span>
                  <strong>{item.need}</strong>
                </div>
                <span className="architecture-row__arrow" aria-hidden="true">
                  →
                </span>
                <div>
                  <span>PRODUCT DECISION</span>
                  <strong>{item.decision}</strong>
                </div>
                <p>{item.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-strategy">
          <SectionHeading tone="blue">
            Strategy, not just data collection
          </SectionHeading>
          <p className="case-study-intro">{caseStudy.strategyIntroduction}</p>
          <ol className="workflow-list">
            {caseStudy.workflows.map((workflow) => (
              <li key={workflow.title}>
                <span>{workflow.number}</span>
                <div>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="workflow-gallery">
            {caseStudy.workflows.map((workflow, index) => (
              <figure key={workflow.title}>
                <Image
                  src={workflow.image}
                  alt={workflow.alt}
                  width={1800}
                  height={1000}
                  sizes="(max-width: 720px) 92vw, 420px"
                  loading="eager"
                />
                <figcaption>
                  <span>{workflow.number}</span> {workflow.title}
                  {index < caseStudy.workflows.length - 1 ? " →" : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-users">
          <SectionHeading>Designing with real users</SectionHeading>
          <div className="case-study-users__layout">
            <div>
              <p className="case-study-pullquote">
                {caseStudy.userImpact.pullquote}
              </p>
              <div className="impact-stories">
                {caseStudy.userImpact.stories.map((story) => (
                  <article key={story.title}>
                    <span>{story.label}</span>
                    <h3>{story.title}</h3>
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
            <aside className="field-note">
              <span>{caseStudy.userImpact.fieldNote.label}</span>
              <strong>{caseStudy.userImpact.fieldNote.title}</strong>
              <p>{caseStudy.userImpact.fieldNote.description}</p>
            </aside>
          </div>
        </section>

        <section className="case-study-section case-study-operations">
          <SectionHeading tone="blue">Operating the product</SectionHeading>
          <div className="operations-copy">
            {caseStudy.operations.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <nav className="case-study-footer" aria-label="Case study navigation">
          <Link href="/projects">← ALL PROJECTS</Link>
          <a
            href={caseStudy.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            TRY MANEUVER ↗
          </a>
        </nav>
      </article>
    </PortfolioPageShell>
  );
}
