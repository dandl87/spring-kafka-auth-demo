\#  Kafka Auth Demo



Demo project che mostra un'architettura basata su:



\-  OAuth2 / OIDC (Spring Authorization Server)

\-  JWT Resource Server (Spring Security)

\-  Event-driven architecture con Apache Kafka

\-  Ambiente containerizzato con Docker Compose



\---



\##  Architettura



Il sistema è composto da:



| Service        | Descrizione |

|----------------|------------|

| auth-server    | Authorization Server OAuth2 (JWT issuer) |

| order-service  | REST API protetta con JWT |

| kafka          | Message broker |

| zookeeper      | Coordinatore Kafka |



\---



\##  Flusso principale



1\. Il client richiede un \*\*access token\*\* all'Auth Server  

2\. L'Auth Server restituisce un \*\*JWT firmato\*\*  

3\. Il client invia una request all'Order Service con il token  

4\. L'Order Service:

&#x20;  - valida il JWT

&#x20;  - pubblica un evento su Kafka  

5\. Un consumer Kafka riceve l'evento e simula una notifica  



\---



\##  Avvio rapido



\###  Linux / Mac



```bash

chmod +x start.sh

./start.sh



\### Win

start.bat





Stop servizi

docker compose down





Ottenere un token (Client Credentials Flow)



curl -u orders-client:orders-secret \\

&#x20; -X POST http://localhost:9090/oauth2/token \\

&#x20; -H "Content-Type: application/x-www-form-urlencoded" \\

&#x20; -d "grant\_type=client\_credentials\&scope=orders.write"



Chiamata API protetta



curl -X POST http://localhost:8080/orders \\

&#x20; -H "Authorization: Bearer <ACCESS\_TOKEN>" \\

&#x20; -H "Content-Type: application/json" \\

&#x20; -d '{"productName":"Pizza","quantity":2}'





Sicurezza

JWT firmati con chiave RSA

Validazione tramite issuer-uri

Autorizzazione basata su scope (orders.write)

Supporto a:

Authorization Code Flow (user login)

Client Credentials Flow (machine-to-machine)



Tech Stack

Java 21

Spring Boot

Spring Security

Spring Authorization Server

Apache Kafka

Docker / Docker Compose



Autore



Daniele De Lorenzo

