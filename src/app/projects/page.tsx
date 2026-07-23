import {
  ExpandedParcel,
  PageActions,
  PageIntro,
  PortfolioPageShell,
  ProjectFeature,
  SectionHeading,
} from "@/components/airmail";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The full collection of Andy Nguyen’s design engineering projects and utilities.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PortfolioPageShell activePage="projects">
      <PageIntro content={portfolio.pages.projects} />
      <div className="project-feature-list">
        {portfolio.projects.map((project, index) => (
          <ProjectFeature
            index={index}
            key={project.title}
            project={project}
          />
        ))}
      </div>
      <section className="expanded-parcels portfolio-section">
        <SectionHeading tone="blue">Minor Parcels</SectionHeading>
        <div className="expanded-parcel-grid">
          {portfolio.minorProjects.map((project) => (
            <ExpandedParcel key={project.title} project={project} />
          ))}
        </div>
      </section>
      <PageActions primary={{ href: "/work", label: "EMPLOYMENT RECORD" }} />
    </PortfolioPageShell>
  );
}
