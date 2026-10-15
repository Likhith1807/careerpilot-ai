# Changelog

All notable changes to the CareerPilot AI platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-04-10

### Added
- **Multi-Agent Evaluation Framework**: Specialized Technical, Communication, and Consensus agents for multi-perspective interview evaluation and coding feedback.
- **CARE Engine (Cost-Aware Routing Engine)**: Dynamic routing between single-agent heuristic evaluation and multi-agent consensus based on task difficulty, uncertainty, and latency/cost trade-offs.
- **GraphRAG Knowledge Engine**: Neo4j knowledge graph integration tracking concept prerequisites, blocker hierarchies, and learning resource linkages with fail-open relational fallbacks.
- **Career Twin Engine v2**: Bayesian evidence-weighted student competency simulation with small-sample safeguards, shrinkage estimators, and freshness decay tracking.
- **Interactive Interview Arena**: Multi-modal interview simulation with dynamic follow-up questioning, real-time speech/text transcription handling, and scoring breakdown.
- **Experiment Lab**: Inverse-mode timeline planning, calendar-shaping algorithms, and Monte Carlo sensitivity analysis for student target role goals.
- **Live Job Ingestion**: Real-time integration with Greenhouse and Lever public job feeds with skill taxonomy extraction and fail-open two-tier Redis caching.
- **Research & Evaluation Suite**: Empirical benchmarking for ablation studies, efficiency frontiers, and fairness probes.

### Changed
- Refactored backend service layer into domain-specific orchestrators.
- Upgraded Next.js frontend to Next.js 16 and React 19 with Tailwind CSS v4.
- Hardened rate-limiting subsystem with in-memory fallback during Redis unavailability.

---

## [1.0.0] - 2026-02-15

### Added
- **Authentication & Authorization**: JWT token lifecycle management, Argon2 password hashing, and student account isolation.
- **Core Student Profile**: Onboarding workflow capturing college branch, target industry, graduation timeline, and target roles.
- **Resume Parsing & Analysis**: Skill extraction, experience parsing, and structured profile generation.
- **Initial Career Twin Model**: Foundational student competency baseline derived from resume parsing and diagnostic quizzes.
- **Assessment Engine**: Question taxonomy database and scoring endpoints for foundational technical disciplines.
- **Basic UI Dashboard**: Student portal built with Next.js and Tailwind CSS.
