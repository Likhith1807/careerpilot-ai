# Contributing to CareerPilot AI

Thank you for your interest in contributing to CareerPilot AI! We welcome contributions from developers, researchers, and technical educators.

---

## 1. Code of Conduct

Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We expect all contributors to maintain a respectful, constructive, and inclusive environment.

---

## 2. Development Setup

### Prerequisites
- **Python**: 3.10 or higher
- **Node.js**: 20+ and npm 10+
- **Docker & Docker Compose** (optional for local multi-service stack)

### Backend Setup
```bash
cd backend
python -m venv .venv

# On Linux/macOS:
source .venv/bin/activate
# On Windows PowerShell:
.\.venv\Scripts\Activate.ps1

pip install -r requirements.txt
pip install ruff mypy pytest pytest-asyncio httpx

# Run migrations
alembic upgrade head

# Start API server
uvicorn app.main:app --reload --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000` and API docs at `http://localhost:8000/docs`.

---

## 3. Engineering Quality Standards

All pull requests must pass our automated quality gates before merge:

### 1. Code Formatting & Linting
We use [Ruff](https://github.com/astral-sh/ruff) for fast Python linting:
```bash
cd backend
ruff check .
```

### 2. Static Type Safety
We use [Mypy](https://mypy-lang.org/) for strict type checking:
```bash
cd backend
mypy app --ignore-missing-imports
```
Zero errors are expected across all source files.

### 3. Automated Testing
Run the complete unit & regression test suite:
```bash
# Backend tests
cd backend
pytest -v

# Frontend tests
cd frontend
npm test
```

---

## 4. Architectural Principles

When writing code for CareerPilot AI:
1. **Evidence-Backed Attribution**: All recommendations, scores, and readiness calculations must tie back directly to validated student artifacts (resume parse, assessment answer, LeetCode verification, interview transcript). Do not invent scores or mock facts without evidence.
2. **Fail-Open Resilience**: External dependencies (Neo4j Graph Database, Redis Cache, Live Job Boards) must employ graceful fallbacks (e.g., relational fallback for graph queries, in-memory rate limiting when Redis is unavailable).
3. **Privacy & Security**: Never commit secrets, API keys, or personal student identification. Test fixtures must use synthetic credentials.

---

## 5. Pull Request Workflow

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feat/my-new-feature
   ```
2. Commit your changes using descriptive commit messages following the Conventional Commits specification (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`).
3. Ensure all tests and lint checks pass locally.
4. Push to your fork and submit a Pull Request targeting `main`.
5. Fill out the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).
