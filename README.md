🚀 Kafka Order Platform

Distributed system demo built with Spring Boot, OAuth2 and Apache Kafka, with a Next.js frontend.

👉 This project demonstrates how to design a secure, event-driven architecture with real-world challenges like token propagation, async processing and distributed debugging.

🧱 Architecture

The system is composed of:

Auth Server (Spring Boot)
OAuth2 Authorization Server issuing JWT tokens
Order Service (Spring Boot)
Secured REST API that publishes events to Kafka
Kafka + Zookeeper
Event streaming platform
Order UI (Next.js)
Frontend using NextAuth for authentication
🔄 High-Level Flow
User → Next.js (NextAuth) → API Route → Order Service → Kafka
🔐 Authentication Flow
User logs in via OAuth2 (Authorization Code Flow)
NextAuth stores session (JWT in cookies)
Frontend calls Next.js API routes (server-side)
API routes forward requests with Bearer token
Order Service validates JWT via Spring Security

👉 Key aspect: token never exposed to the browser directly

📡 Event-Driven Flow (Kafka)
Order Service publishes events to Kafka topic:
order-created
Events represent:
Order ID
User info
Order details

👉 This decouples:

order processing
future services (notifications, payments, etc.)
🚀 Getting Started
▶ Windows
start.bat
▶ Linux / macOS
chmod +x start.sh
./start.sh
▶ Manual Start
1. Start backend
docker compose up --build
2. Start frontend
cd order-ui
npm install
npm run dev
🌐 Services
Service	URL
Frontend	http://localhost:3000

Auth Server	http://localhost:9090

Order Service	http://localhost:8080
⚙️ Frontend Configuration

Create:

order-ui/.env.local
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecretkey
🧪 Demo Flow
Open frontend
Login via OAuth2
user / password
Create an order
Order is:
validated
sent to backend
published to Kafka
🛠 Tech Stack
Backend
Java 21
Spring Boot
Spring Security
Spring Authorization Server
Apache Kafka
Frontend
Next.js (App Router)
NextAuth
React
Infrastructure
Docker
Docker Compose
🧠 Key Challenges Solved
🔑 Token Propagation

Managing JWT across:

NextAuth (frontend session)
Next.js API routes
Spring Boot backend
🔐 Secure API Design
No token exposure in browser
Server-side forwarding only
⚡ Async Communication
Event-driven architecture via Kafka
Decoupling services
🐳 Docker Networking
Handling service-to-service communication
Avoiding localhost pitfalls
📌 Purpose

This project is designed to demonstrate:

Secure microservice communication
OAuth2 integration across full stack
Event-driven architecture with Kafka
Real-world distributed system issues
🔮 Future Improvements
Add Kafka consumers (e.g. payment service)
Introduce retries and dead-letter topics
Add integration tests with Testcontainers
Add API Gateway
📄 License

MIT
