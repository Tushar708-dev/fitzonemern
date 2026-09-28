import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// One exercise tile. `layout` makes cards glide smoothly when the filter changes.
export default function ExerciseCard({ exercise }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link to={`/exercises/${exercise.slug}`} className="exercise-card">
        <div className="exercise-card-top">
          <span className="badge">{exercise.muscleGroup}</span>
          {exercise.videoId && <span className="badge badge-green">▶ Video</span>}
        </div>
        <h3>{exercise.name}</h3>
        <p>{exercise.description}</p>
        <div className="exercise-meta">
          <span>{exercise.equipment}</span>
          <span className={`level level-${exercise.difficulty.toLowerCase()}`}>{exercise.difficulty}</span>
        </div>
      </Link>
    </motion.div>
  );
}
