# 🐳 Progetto Docker - Backend Express + Frontend Nginx

Questo progetto contiene due servizi containerizzati e orchestrati con Docker Compose:

- **Backend Node.js/Express**: Espone un endpoint `/mypage` che serve una pagina HTML.
- **Frontend Nginx**: Serve direttamente la stessa pagina HTML come contenuto statico.

---

## 📁 Struttura del progetto

```plaintext
.
├── docker-compose.yml
├── public/
│   └── view/
│       └── index.html
├── src/
│   ├── main.js
│   ├── package.json
│   └── Dockerfile
```

---

## ▶️ Come eseguire il progetto

### 1. Requisiti

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installato e attivo.

### 2. Clona il progetto

Scarica il progetto sul tuo computer:

```bash
git clone <repo-url>
cd <nome-cartella-progetto>
```

### 3. Avvia i container

Esegui i seguenti comandi per costruire e avviare i container:

```bash
docker-compose up --build
```

---

## 🌐 Servizi disponibili

| Servizio            | URL                          | Descrizione                                    |
|---------------------|------------------------------|------------------------------------------------|
| **Backend (Express)** | `http://localhost:4000/mypage` | Serve la pagina HTML tramite API.             |
| **Frontend (Nginx)**  | `http://localhost:8080`      | Serve direttamente l'HTML statico.            |

---

## 🛠️ Come funziona

### Backend (`src/`)

- Scritto con **Express.js**.
- Serve la pagina HTML (`index.html`) tramite l’endpoint `/mypage`.
- Espone la porta **4000**.
- Il `Dockerfile` copia anche la cartella `public/` necessaria per servire il file HTML.

### Frontend (`public/view/`)

- Serve la stessa pagina HTML direttamente tramite **Nginx**.
- Espone la porta **8080**.
- Utilizza un volume Docker per montare `public/view` all'interno di Nginx.

---

## 🧹 Comandi utili

### 🔁 Ricostruire e riavviare tutto

```bash
docker-compose down
docker-compose up --build
```

### 🛑 Fermare i container

```bash
docker-compose down
```

---

## 📄 Note

- Il file `home.html` è stato rinominato in `index.html` per essere servito correttamente da Nginx.
- Non è necessario modificare percorsi o spostare file: la configurazione dei Dockerfile e di Docker Compose gestisce tutto.

---

## 🧑‍💻 Autore

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)