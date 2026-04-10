# Kafka Order Platform

Distributed system demo built with **Spring Boot, OAuth2 and Apache Kafka**, with a **Next.js frontend**.

---

Demo project che mostra un'architettura basata su:
=======
## 🧱 Architecture

The system consists of:

* **Auth Server (Spring Boot)**
  OAuth2 Authorization Server issuing JWT tokens

* **Order Service (Spring Boot)**
  Secured REST API that publishes events to Kafka

* **Kafka + Zookeeper**
  Event streaming platform

* **Order UI (Next.js)**
  Frontend using NextAuth for authentication

---

## 🔐 Authentication Flow

1. User logs in via OAuth2 (Authorization Code Flow)
2. NextAuth stores session (JWT in cookies)
3. Frontend calls Next.js API routes
4. API routes forward requests with Bearer token
5. Order Service validates JWT and processes request

---

## 🚀 Getting Started

### ▶ Windows

Run:

```bat
start.bat
```

---

### ▶ Linux / macOS

```bash
./start.sh
```

---

### ▶ Manual Start

#### 1. Start backend

```bash
docker compose up --build
```

#### 2. Start frontend

```bash
cd order-ui
npm install
npm run dev
```

---

## 🌐 Services

| Service       | URL                   |
| ------------- | --------------------- |
| Frontend      | http://localhost:3000 |
| Auth Server   | http://localhost:9090 |
| Order Service | http://localhost:8080 |

---

## ⚙️ Frontend Configuration

Create `order-ui/.env.local`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecretkey
```

⚠️ Required for session decryption.

---

## 🧪 Demo Flow

1. Open frontend
2. Login via OAuth2 (username:user - password:password)
3. Add products to cart
4. Create order
5. Order is sent to backend and published to Kafka

---

## 📡 Request Flow

```
Browser → Next.js API → Order Service → Kafka
```

---

## 🛠 Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring Security
* Spring Authorization Server
* Apache Kafka

### Frontend

* Next.js 15 (App Router)
* NextAuth v4
* React

### Infrastructure

* Docker
* Docker Compose

---

## ⚠️ Notes

* NextAuth v4 requires **Node runtime** in API routes
* Session is stored in encrypted cookies
* `NEXTAUTH_SECRET` must be set
* Docker networking differs from localhost (important for service calls)

---

## 🧠 Key Challenges Solved

* OAuth2 integration across frontend and backend
* Token propagation from Next.js to Spring Boot
* Handling session in Next.js API routes
* Managing Docker vs localhost networking
* Debugging 401 issues in distributed systems

---

## 📌 Purpose

This project demonstrates:

* Secure microservice communication
* Event-driven architecture with Kafka
* Full-stack integration (Next.js + Spring Boot)

---

## 📄 License

MIT
