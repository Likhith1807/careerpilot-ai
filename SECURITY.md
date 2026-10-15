# Security Policy

## Supported Versions

We provide security updates and patches for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | :white_check_mark: |
| 1.x     | :x:                |

---

## Reporting a Vulnerability

If you discover a potential security vulnerability within CareerPilot AI, please follow these guidelines to ensure responsible disclosure:

1. **Do Not File Public Issues**: Please avoid creating public GitHub issues for security vulnerabilities.
2. **Contact Maintainers**: Report vulnerabilities privately to the project maintainers via email:
   - **Likhith**: [GitHub Profile](https://github.com/Likhith1807)
   - **Karthikeya**: [GitHub Profile](https://github.com/karthikeya020)
3. **Information to Include**:
   - Detailed description of the vulnerability and impact.
   - Steps to reproduce or proof-of-concept (PoC) payload.
   - Component affected (FastAPI backend, JWT auth handler, Rate limiter, GraphRAG service, etc.).
   - Any suggested mitigations or patches.

---

## Security Practices in CareerPilot AI

- **Authentication & Authorization**: Role-based access control, secure Argon2/bcrypt password hashing, short-lived JWTs, and student isolation checks.
- **Fail-Open Rate Limiting**: Distributed Redis token-bucket rate limiter with in-memory fallback to prevent DoS.
- **Dependency Auditing**: Automated CI scanning for dependency vulnerabilities.
- **Synthetic Test Data**: All tests operate against local SQLite ephemeral databases with synthetic fixtures; production secrets are never checked in.
