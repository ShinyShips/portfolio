import {
  PageActions,
  PageIntro,
  PortfolioPageShell,
  WorkDossier,
} from "@/components/airmail";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Andy Nguyen’s employment record across software engineering and UI/UX design.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <PortfolioPageShell activePage="work">
      <PageIntro content={portfolio.pages.work} />
      <div className="dossier-list">
        {portfolio.work.map((item) => (
          <WorkDossier item={item} key={item.company} />
        ))}
      </div>
      <PageActions
        primary={{
          href: "/projects",
          label: "POSTCARDS FROM MY PROJECTS",
        }}
      />
    </PortfolioPageShell>
  );
}
