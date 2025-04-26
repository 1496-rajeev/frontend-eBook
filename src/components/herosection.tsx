// components/HeroSection.tsx
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 py-30 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Master <span className="text-blue-400">JavaScript</span> &{" "}
          <span className="text-blue-400">React</span> Interview Questions
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          Sharpen your skills with curated questions, real-world concepts, and
          practical coding challenges designed to boost your confidence.
        </p>
        <Link
          to={ROUTES.JAVASCRIPT}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          Start Practicing
        </Link>
      </div>
    </section>
  );
}
