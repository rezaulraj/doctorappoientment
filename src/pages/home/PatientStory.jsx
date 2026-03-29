import React, { useState } from "react";

/**
 * Google Fonts already in index.css:
 * Playfair Display + Nunito Sans
 */

const stories = [
  {
    id: 1,
    name: "Amelia Richardson",
    age: 34,
    treatment: "Cardiology",
    treatmentIcon: "🫀",
    treatmentColor: "#ef4444",
    treatmentBg: "#fef2f2",
    title: "A Second Chance at Life After My Heart Surgery",
    excerpt:
      "I was terrified when I received my diagnosis. But Dr. Mitchell walked me through every step with such patience and clarity. The procedure was flawless, and six months later I'm hiking again — something I never thought possible.",
    date: "March 14, 2025",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    age: 52,
    treatment: "Orthopedics",
    treatmentIcon: "🦴",
    treatmentColor: "#d97706",
    treatmentBg: "#fffbeb",
    title: "Back on My Feet — Literally — After Knee Replacement",
    excerpt:
      "After years of chronic knee pain, I finally took the leap. The recovery program was outstanding, and the team checked in on me every week. I wish I had done this sooner.",
    date: "January 28, 2025",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    name: "Sofia Hernandez",
    age: 29,
    treatment: "Dermatology",
    treatmentIcon: "🧬",
    treatmentColor: "#db2777",
    treatmentBg: "#fdf2f8",
    title: "My Skin Finally Feels Like Mine Again",
    excerpt:
      "Years of struggling with severe eczema had drained my confidence. Dr. Patel's personalised treatment plan made a difference in just 8 weeks. The care I received was extraordinary.",
    date: "February 10, 2025",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    name: "Daniel Park",
    age: 45,
    treatment: "Neurology",
    treatmentIcon: "🧠",
    treatmentColor: "#7c3aed",
    treatmentBg: "#f5f3ff",
    title: "Managing Migraines Changed My Entire Quality of Life",
    excerpt:
      "For 10 years, migraines ruled my life. The neurologist here not only identified the root cause but created a long-term management plan. I've had just two episodes in the past six months.",
    date: "December 5, 2024",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    name: "Priya Nair",
    age: 38,
    treatment: "Ophthalmology",
    treatmentIcon: "👁️",
    treatmentColor: "#0891b2",
    treatmentBg: "#ecfeff",
    title: "LASIK Gave Me Perfect Vision and My Freedom Back",
    excerpt:
      "I'd worn glasses since I was seven years old. The LASIK procedure here was seamless — zero pain, zero downtime, and I walked out seeing 20/20. The staff made me feel completely at ease.",
    date: "November 19, 2024",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 6,
    name: "James O'Brien",
    age: 61,
    treatment: "General Medicine",
    treatmentIcon: "🩺",
    treatmentColor: "#16a34a",
    treatmentBg: "#f0fdf4",
    title: "Early Detection Saved My Life — Thank You MediCare",
    excerpt:
      "A routine check-up turned into a life-saving discovery. The doctor noticed something the others had missed for years. Catching it early made all the difference.",
    date: "October 3, 2024",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

function Stars({ count = 5 }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function PatientStory() {
  const [expanded, setExpanded] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Cardiology",
    "Orthopedics",
    "Dermatology",
    "Neurology",
    "Ophthalmology",
    "General Medicine",
  ];
  const filtered =
    activeFilter === "All"
      ? stories
      : stories.filter((s) => s.treatment === activeFilter);
  const featured = stories[0];
  const rest = filtered
    .filter((s) => !s.featured || activeFilter !== "All")
    .slice(0, 5);
  const displayGrid = activeFilter === "All" ? filtered.slice(1) : filtered;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-nunito   { font-family: 'Nunito Sans', sans-serif; }

        /* ── Background ── */
        .stories-bg {
          background-color: #f8fffe;
          background-image:
            radial-gradient(ellipse 65% 45% at 0%   0%,   rgba(13,148,136,.10) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 100%  0%,  rgba(6,182,212,.08)  0%, transparent 60%),
            radial-gradient(ellipse 45% 35% at 100% 100%, rgba(16,185,129,.07) 0%, transparent 60%),
            radial-gradient(ellipse 55% 38% at 0%  100%,  rgba(99,102,241,.05) 0%, transparent 55%);
        }

        /* ── Featured card ── */
        .featured-card {
          border-radius: 2rem;
          overflow: hidden;
          background: white;
          box-shadow: 0 20px 60px rgba(13,148,136,.13), 0 4px 16px rgba(0,0,0,.06);
          border: 1px solid rgba(255,255,255,.9);
        }

        /* ── Story card ── */
        .story-card {
          background: white;
          border-radius: 1.5rem;
          border: 1px solid rgba(229,231,235,.8);
          box-shadow: 0 4px 20px rgba(13,148,136,.07), 0 1px 4px rgba(0,0,0,.04);
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .story-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 48px rgba(13,148,136,.14), 0 4px 12px rgba(0,0,0,.06);
          border-color: rgba(13,148,136,.20);
        }

        /* ── Image container ── */
        .img-container {
          position: relative;
          overflow: hidden;
        }
        .img-container img {
          transition: transform .4s ease;
        }
        .story-card:hover .img-container img {
          transform: scale(1.05);
        }

        /* ── Treatment badge ── */
        .treatment-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 12px; border-radius: 999px;
          font-size: 11px; font-weight: 700;
          letter-spacing: .04em;
        }

        /* ── Quote icon ── */
        .quote-icon {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #0d9488, #06b6d4);
          flex-shrink: 0;
        }

        /* ── Read more button ── */
        .read-more-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700;
          color: #0d9488;
          padding: 6px 0;
          border-bottom: 1.5px solid transparent;
          transition: border-color .18s, gap .18s;
        }
        .read-more-btn:hover {
          border-bottom-color: #0d9488;
          gap: 10px;
        }

        /* ── Filter pills ── */
        .filter-pill {
          padding: 7px 18px; border-radius: 999px;
          font-size: 13px; font-weight: 600;
          border: 1.5px solid rgba(13,148,136,.20);
          background: rgba(255,255,255,.8);
          color: #6b7280;
          cursor: pointer;
          transition: all .18s;
          white-space: nowrap;
        }
        .filter-pill:hover { border-color: #0d9488; color: #0d9488; background: rgba(13,148,136,.05); }
        .filter-pill.active {
          background: linear-gradient(135deg,#0d9488,#0891b2);
          color: white; border-color: transparent;
          box-shadow: 0 4px 16px rgba(13,148,136,.30);
        }

        /* Section label */
        .section-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,rgba(13,148,136,.10),rgba(6,182,212,.10));
          border: 1px solid rgba(13,148,136,.22); color: #0d9488;
          padding: 6px 16px; border-radius: 999px;
          font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
        }

        /* Grad text */
        .grad-text {
          background: linear-gradient(135deg,#0d9488,#0891b2);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Expand overlay */
        .story-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(15,23,42,.75);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
        }
        .story-modal {
          background: white; border-radius: 2rem;
          max-width: 640px; width: 100%;
          max-height: 90vh; overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0,0,0,.25);
        }
        .story-modal::-webkit-scrollbar { width: 4px; }
        .story-modal::-webkit-scrollbar-track { background: transparent; }
        .story-modal::-webkit-scrollbar-thumb { background: #0d9488; border-radius: 4px; }

        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,.5); }
          50%      { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
        }
        .live-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #10b981;
          animation: dotPulse 2s ease infinite; flex-shrink: 0;
        }

        /* Filter scroll */
        .filter-scroll {
          display: flex; gap: 8px; overflow-x: auto;
          scrollbar-width: none; -ms-overflow-style: none; padding-bottom: 4px;
        }
        .filter-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <section className="stories-bg font-nunito py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative SVG arcs */}
        <div className="pointer-events-none absolute top-0 right-0 opacity-[0.035]">
          <svg width="450" height="450" viewBox="0 0 450 450" fill="none">
            <circle cx="450" cy="0" r="280" stroke="#0d9488" strokeWidth="70" />
            <circle cx="450" cy="0" r="160" stroke="#06b6d4" strokeWidth="35" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ══════════ HEADER ══════════ */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex justify-center mb-4">
              <span className="section-pill">
                <span className="live-dot" />
                Real Stories, Real People
              </span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-tight mb-5">
              Patient <span className="grad-text italic">Stories</span> That
              <br className="hidden sm:block" /> Inspire Us Every Day
            </h2>
            <p className="font-nunito text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Thousands of patients have transformed their health with MediCare.
              Here are a few of the stories that remind us{" "}
              <span className="text-gray-800 font-semibold">
                why we do what we do.
              </span>
            </p>
          </div>

          {/* ══════════ FILTER PILLS ══════════ */}
          <div className="filter-scroll mb-10 justify-center flex-wrap gap-2 hidden sm:flex">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-pill ${activeFilter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
          {/* Mobile filter scroll */}
          {/* <div className="filter-scroll sm:hidden mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-pill ${activeFilter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div> */}

          {/* ══════════ FEATURED STORY ══════════ */}
          {activeFilter === "All" && (
            <div className="featured-card mb-10 grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[440px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover object-center"
                  style={{ transition: "transform .4s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(13,148,136,.22) 0%, transparent 60%)",
                  }}
                />
                {/* Featured badge */}
                <div className="absolute top-5 left-5">
                  <span
                    className="font-nunito text-[11px] font-bold text-white px-3 py-1.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#0d9488,#06b6d4)",
                      boxShadow: "0 4px 14px rgba(13,148,136,.45)",
                    }}
                  >
                    ✨ Featured Story
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                {/* Treatment badge */}
                <div className="mb-4">
                  <span
                    className="treatment-badge"
                    style={{
                      background: featured.treatmentBg,
                      color: featured.treatmentColor,
                      border: `1px solid ${featured.treatmentColor}22`,
                    }}
                  >
                    {featured.treatmentIcon} {featured.treatment}
                  </span>
                </div>

                {/* Quote icon + title */}
                <div>
                  <div className="quote-icon mb-5">
                    <svg
                      className="w-5 h-5 text-white fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                    {featured.title}
                  </h3>
                  <p className="font-nunito text-gray-500 text-base leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-gray-100">
                  {/* Patient info */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-teal-100 shadow shrink-0">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-nunito font-bold text-gray-800 text-sm">
                        {featured.name}, {featured.age}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Stars count={featured.rating} />
                        <span className="font-nunito text-xs text-gray-400">
                          {featured.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(featured)}
                    className="read-more-btn font-nunito"
                  >
                    Read Full Story
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ══════════ STORY GRID ══════════ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {displayGrid.map((story) => (
              <div key={story.id} className="story-card group">
                {/* Image */}
                <div className="img-container h-52 relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,.55) 0%, transparent 55%)",
                    }}
                  />

                  {/* Treatment badge on image */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="treatment-badge backdrop-blur-sm"
                      style={{
                        background: story.treatmentBg + "ee",
                        color: story.treatmentColor,
                        border: `1px solid ${story.treatmentColor}30`,
                      }}
                    >
                      {story.treatmentIcon} {story.treatment}
                    </span>
                  </div>

                  {/* Stars on image bottom */}
                  <div className="absolute bottom-3 left-3">
                    <Stars count={story.rating} />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg
                      className="w-3.5 h-3.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-nunito text-xs text-gray-400 font-medium">
                      {story.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair font-bold text-gray-900 text-lg leading-tight mb-3 group-hover:text-teal-700 transition-colors">
                    {story.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-nunito text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {story.excerpt.slice(0, 110)}…
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(13,148,136,.15), transparent)",
                    }}
                  />

                  {/* Patient + Read more */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-full overflow-hidden border-2 shrink-0"
                        style={{ borderColor: story.treatmentColor + "40" }}
                      >
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="font-nunito font-bold text-gray-800 text-xs leading-tight">
                          {story.name}
                        </p>
                        <p className="font-nunito text-[10px] text-gray-400">
                          Age {story.age}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpanded(story)}
                      className="read-more-btn font-nunito text-xs"
                    >
                      Read More
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ══════════ BOTTOM CTA ══════════ */}
          <div className="text-center">
            <p className="font-nunito text-gray-400 text-sm mb-4">
              Showing {displayGrid.length + (activeFilter === "All" ? 1 : 0)} of{" "}
              {stories.length} stories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="#"
                className="font-nunito font-bold text-white px-8 py-3.5 rounded-2xl text-sm flex items-center gap-2 transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#0d9488,#0891b2)",
                  boxShadow: "0 8px 24px rgba(13,148,136,.30)",
                }}
              >
                View All Patient Stories
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="font-nunito font-semibold text-teal-700 px-8 py-3.5 rounded-2xl text-sm flex items-center gap-2 transition-all hover:bg-teal-50"
                style={{
                  border: "1.5px solid rgba(13,148,136,.25)",
                  background: "rgba(255,255,255,.8)",
                }}
              >
                Share Your Story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EXPANDED MODAL ══════════ */}
      {expanded && (
        <div className="story-overlay" onClick={() => setExpanded(null)}>
          <div className="story-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal image */}
            <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-[2rem]">
              <img
                src={expanded.image}
                alt={expanded.name}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,.60) 0%, transparent 55%)",
                }}
              />
              {/* Close button */}
              <button
                onClick={() => setExpanded(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Treatment badge */}
              <div className="absolute bottom-4 left-5">
                <span
                  className="treatment-badge backdrop-blur-sm"
                  style={{
                    background: expanded.treatmentBg + "ee",
                    color: expanded.treatmentColor,
                    border: `1px solid ${expanded.treatmentColor}30`,
                  }}
                >
                  {expanded.treatmentIcon} {expanded.treatment}
                </span>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-7 sm:p-9">
              {/* Patient info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-100 shadow shrink-0">
                  <img
                    src={expanded.image}
                    alt={expanded.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-nunito font-bold text-gray-900">
                    {expanded.name}, {expanded.age}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Stars count={expanded.rating} />
                    <span className="font-nunito text-xs text-gray-400">
                      {expanded.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote icon */}
              <div className="quote-icon mb-4">
                <svg
                  className="w-5 h-5 text-white fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-5">
                {expanded.title}
              </h3>
              <p className="font-nunito text-gray-600 text-base leading-relaxed mb-6">
                {expanded.excerpt}
              </p>
              <p className="font-nunito text-gray-500 text-sm leading-relaxed">
                The entire MediCare team — from the receptionist who checked me
                in, to the specialists who reviewed my case, to the follow-up
                care coordinators — every single one of them made me feel like I
                was their only patient. I cannot recommend this platform highly
                enough.
              </p>

              {/* CTA */}
              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="font-nunito font-bold text-white px-6 py-3 rounded-xl text-sm flex-1 text-center transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg,#0d9488,#0891b2)",
                    boxShadow: "0 6px 18px rgba(13,148,136,.28)",
                  }}
                >
                  Book an Appointment
                </a>
                <button
                  onClick={() => setExpanded(null)}
                  className="font-nunito font-semibold text-gray-600 px-6 py-3 rounded-xl text-sm border border-gray-200 hover:border-teal-200 hover:text-teal-600 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
