# Cloud & DevOps Internship Project

This repository contains my submission for the CodingAtom Cloud & DevOps Internship assessment.  
The project demonstrates containerisation, CI/CD automation, monitoring, and documentation.

---

## Task 1: Containerised App in the Cloud

### Overview
- A simple Node.js/Express app with a `/` route and a `/health` endpoint.
- Containerised using a lean Dockerfile (`node:18-alpine` base).
- Config and secrets injected via environment variables (never baked into the image).
- Deployed to [Fly.io / Render / Railway / VPS] with a real domain and HTTPS.

### Health Check
- Endpoint: `/health`
- Returns JSON:  
  ```json
  { "status": "ok", "uptime": <seconds> }
