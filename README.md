# LibreChat

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-4.1-00DC82?style=flat&logo=nuxt.js)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**LibreChat** is a state-of-the-art, self-hosted chat interface for Large Language Models. Built with the latest **Nuxt 4** and **Nuxt UI**, it delivers a premium, responsive user experience with powerful features for both individuals and teams.

Experience seamless AI interaction with a robust Retrieval-Augmented Generation (RAG) system, enterprise-grade access control, and high-fidelity audio capabilities.

## ✨ Features

- **🤖 Multi-Model Intelligence**: Seamlessly switch between Gemini, Ollama, and other providers with real-time streaming and syntax highlighting.
- **📚 Advanced RAG**: execute context-aware queries with hybrid search powered by [pgvector](https://github.com/pgvector/pgvector), relevance boosting, and intelligent markdown parsing.
- **👥 Secure Collaboration**: Manage teams with hierarchical groups, granular ACL permissions, and private knowledge bases.
- **📝 Technical Content Engine**: Author and manage technical documentation directly within the app using the integrated Monaco Editor.
- **🔈 High-Fidelity Audio**: Enjoy natural voice interactions with Text-to-Speech powered by Kokoro.

## � Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com) - The Intuitive Vue Framework
- **UI System**: [Nuxt UI](https://ui.nuxt.com) - A fully styled and customizable UI library
- **Database**: PostgreSQL with Drizzle ORM
- **Vector DB**: pgvector for semantic search
- **Job Queue**: BullMQ with Redis for background processing
- **Runtime**: Bun for ultra-fast execution

## 🚀 Quick Start

Deploy your own instance in minutes.

1. **Install**: Clone the repository and install dependencies.
2. **Configure**: create your `.env` file based on the example.
3. **Run**: Start the development server.

👉 **[View Full Setup Guide](./DOCS/SETUP.md)**

## 📖 Documentation

Comprehensive guides and references for LibreChat.

- **[Setup & Installation](./DOCS/SETUP.md)** - Get up and running quickly.
- **[RAG Architecture](./DOCS/RAG.md)** - Understand how our retrieval system works.
- **[Groups & Permissions](./DOCS/GROUPS.md)** - Manage user access and roles.
- **[Database Seeding](./DOCS/SEEDING.md)** - Populate your database with initial data.
- **[Audio & Voice](./DOCS/AUDIO.md)** - Set up and configure voice features.
- **[Changelog](./CHANGELOG.md)** - See what's new in the latest version.

## 🤝 Contribution

We love contributions! Please read our **[Contributing Guide](./CONTRIBUTING.md)** before submitting a Pull Request to ensure a smooth process.

<!-- Badges and footer -->
[comparison]: https://github.com/TutorFx/librechat/compare