import { FooterLine, SiteHeader } from "@/components/airmail";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <SiteHeader statusLabel="DELIVERY FAILED" />
      <main className="not-found">
        <div className="return-stamp" aria-hidden="true">
          <div className="return-stamp__paper">
            <div className="return-stamp__frame">
              <span className="return-stamp__number">404</span>
              <span className="return-stamp__unknown">ADDRESSEE UNKNOWN</span>
            </div>
          </div>
          <div className="postmark">
            ATN.DEV
            <br />
            RETURN
            <br />
            TO SENDER
          </div>
        </div>
        <h1>No such address.</h1>
        <p className="not-found__copy">
          This delivery could not be completed. The page may have moved, or the
          address was written incorrectly.
        </p>
        <p className="handwritten">no forwarding address on file</p>
        <Link className="return-button" href="/">
          RETURN HOME →
        </Link>
      </main>
      <FooterLine />
    </div>
  );
}
