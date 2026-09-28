import { Link, useParams } from "react-router-dom";
import Page from "../components/Page";
import Reveal from "../components/Reveal";
import VideoBox from "../components/VideoBox";
import ExerciseCard from "../components/ExerciseCard";
import { useApi } from "../useApi";
import { useAuth } from "../AuthContext";

export default function ExerciseDetail() {
  const { slug } = useParams();
  const { user } = useAuth();
  const { data, loading, error } = useApi(`/exercises/${slug}`);

  if (loading) return <Page><div className="center-screen"><div className="spinner" /></div></Page>;
  if (error || !data) {
    return (
      <Page>
        <section className="page-hero"><div className="container">
          <h1>Exercise not <span>found</span></h1>
          <Link to="/exercises" className="btn btn-primary">Back to exercises</Link>
        </div></section>
      </Page>
    );
  }

  const { exercise, related } = data;

  return (
    <Page>
      <section className="page-hero">
        <div className="container">
          <Link to={`/exercises?group=${exercise.muscleGroup}`} className="back-link">← {exercise.muscleGroup} exercises</Link>
          <h1>{exercise.name}</h1>
          <p className="muted">{exercise.muscleGroup} • {exercise.equipment} • {exercise.difficulty}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container detail-grid">
          <Reveal>
            <VideoBox exercise={exercise} />
            <p className="detail-desc">{exercise.description}</p>
          </Reveal>

          <div>
            <Reveal><h2 className="h-sm">How to <span>do it</span></h2></Reveal>
            <ol className="steps">
              {exercise.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.07} y={24}><li>{s}</li></Reveal>
              ))}
            </ol>

            <Reveal><h2 className="h-sm">Pro <span>tips</span></h2></Reveal>
            <ul className="tips">
              {exercise.tips.map((t, i) => <Reveal key={i} delay={i * 0.07} y={24}><li>{t}</li></Reveal>)}
            </ul>

            <Link to={user ? "/workouts" : "/signup"} className="btn btn-outline">
              {user ? "Log this workout" : "Sign up to track workouts"}
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="container related">
            <Reveal><h2 className="section-title">More <span>{exercise.muscleGroup}</span></h2></Reveal>
            <div className="exercise-grid">
              {related.map((ex) => <ExerciseCard key={ex.slug} exercise={ex} />)}
            </div>
          </div>
        )}
      </section>
    </Page>
  );
}
