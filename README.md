# 🚀 Kafka Order Platform

Distributed system demo built with **Spring Boot, OAuth2 and Apache Kafka**, with a **Next.js frontend**.

👉 This project demonstrates a **secure, event-driven architecture** with token propagation and async processing.

---

## 🧱 Architecture

The system is composed of:

- **Auth Server (Spring Boot)**  
  OAuth2 Authorization Server issuing JWT tokens  

- **Order Service (Spring Boot)**  
  Secured REST API that publishes events to Kafka  

- **Kafka + Zookeeper**  
  Event streaming platform  

- **Order UI (Next.js)**  
  Frontend using NextAuth for authentication  

---

## 🔄 High-Level Flow

```
User → Next.js → API Route → Order Service → Kafka
```

---

## 🔐 Authentication Flow

1. User logs in via OAuth2 (Authorization Code Flow)  
2. NextAuth stores session (JWT in cookies)  
3. Frontend calls Next.js API routes  
4. API routes forward requests with Bearer token  
5. Order Service validates JWT  

👉 Token never exposed directly to the browser

---

## 📡 Event-Driven Flow (Kafka)

- Order Service publishes events to topic:
  - `order-created`

- Events include:
  - Product Name
  - Quantity

---

## 🚀 Getting Started

### ▶ Windows

```bash
start.bat
```

### ▶ Linux / macOS

```bash
chmod +x start.sh
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

| Service        | URL                    |
|----------------|------------------------|
| Frontend       | http://localhost:3000 |
| Auth Server    | http://localhost:9090 |
| Order Service  | http://localhost:8080 |

---

## ⚙️ Frontend Configuration

Create:

```
order-ui/.env.local
```

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecretkey
```

---

## 🧪 Demo Flow

1. Open frontend  
2. Login via OAuth2 (`user / password`)  
3. Create an order  
4. Order is published to Kafka  

---

## 🛠 Tech Stack

### Backend
- Java 21  
- Spring Boot  
- Spring Security  
- Spring Authorization Server  
- Apache Kafka  

### Frontend
- Next.js  
- NextAuth  
- React  

### Infrastructure
- Docker  
- Docker Compose  

---

## 🧠 Key Challenges Solved

- Token propagation across services  
- Secure API design  
- Event-driven communication  
- Docker networking issues  

---

## 📌 Purpose

This project demonstrates:

- Secure microservice communication  
- OAuth2 integration  
- Event-driven architecture  
- Full-stack integration  

---

## 📄 License

MIT
