import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function NotFound() {
  return (
    <Page>
      <section className="page-hero center-screen">
        <div className="container center">
          <h1>404 — Page <span>not found</span></h1>
          <p className="muted">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </Page>
  );
}
