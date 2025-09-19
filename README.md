# 🎟️ Bicket – Case Study on SaaS Ticket Management

**English**

Case study of a SaaS prototype that evolved from the previous [**Tickets**](https://github.com/Fockus26/Tickets) project.  
Bicket was designed as a multi-client ticket management platform with a modern UI, a landing page explaining the service, and a private dashboard.  
The project is currently paused pending API, payment gateway, and admin panel integrations.  

**Español**

Estudio de caso de un prototipo SaaS que evolucionó del proyecto anterior [**Tickets**](https://github.com/Fockus26/Tickets).  
Bicket fue diseñado como una plataforma de gestión de tickets multi-cliente, con una interfaz moderna, landing page explicativa del servicio y un dashboard privado.  
Actualmente el proyecto está en pausa por falta de integración de API, pasarela de pagos y panel de administración.

---

## 🌍 Overview

**English**

Bicket is a SaaS prototype designed to improve on the minimal UI of the previous **Tickets** project.  
Its goal is to provide a full-featured ticket management system where any registered client can create, edit, and delete tickets.  

The platform includes:  
- A modern landing page with product explanation.  
- Interactive demos and videos.  
- Q&A and pricing sections.  
- User authentication (sign up & login).  
- A private dashboard to manage tickets.  

Although currently paused, the project aimed to evolve into a full SaaS with payment integration, API services, and an admin panel.

**Español**

Bicket es un prototipo de SaaS diseñado como una mejora al proyecto anterior **Tickets**, cuya interfaz era muy básica.  
El objetivo era ofrecer un sistema completo de gestión de tickets donde cualquier cliente registrado pudiera crear, editar y eliminar tickets.  

La plataforma incluye:  
- Una landing page moderna con explicación del producto.  
- Demos interactivas y videos demostrativos.  
- Secciones de preguntas frecuentes (Q&A) y precios.  
- Autenticación de usuarios (registro e inicio de sesión).  
- Un dashboard privado para la gestión de tickets.  

Aunque actualmente está en pausa, el proyecto buscaba convertirse en un SaaS completo con pasarela de pagos, API y panel de administración.

---

## ✨ Features / Características

**English**
- 🖥️ Landing page with product explanation and demo videos.  
- 🔐 User authentication (Sign up / Login).  
- 📂 Dashboard for ticket management (create, edit, delete).  
- 📊 Pricing and Q&A sections.  
- 🎨 Modern responsive UI with React + SASS.  

**Español**
- 🖥️ Landing page con explicación del producto y videos demostrativos.  
- 🔐 Autenticación de usuarios (Registro / Inicio de sesión).  
- 📂 Dashboard para gestión de tickets (crear, editar, eliminar).  
- 📊 Secciones de precios y preguntas frecuentes.  
- 🎨 Interfaz moderna y responsive con React + SASS.  

---

## 🛠️ Tech Stack / Tecnologías

- **Frontend:** React, JavaScript (ES6+), SASS, CSS3  
- **UI/UX:** Responsive design, custom SCSS architecture  
- **Tools:** Vercel (deployment), video assets for demos  

---

## 📂 Project Structure / Estructura del Proyecto

```text
Bicket/
│── public/
│
├── src/
│ ├── assets/
│ │ ├── image/
│ │ ├── svg/
│ │ └── video/
│ │
│ ├── components/
│ │ ├── Authentication/
│ │ │ ├── SignIn.js
│ │ │ └── SignUp/...
│ │ ├── ControlPanel/
│ │ │ ├── Dashboard/...
│ │ │ ├── CreateEvent.js
│ │ │ └── Account.js
│ │ ├── General/
│ │ │ ├── Footer.js
│ │ │ └── Error404.js
│ │ └── Home/
│ │ ├── Features/
│ │ ├── Hero/
│ │ ├── Pricing/
│ │ └── QA/
│ │
│ ├── css/
│ ├── scss/
│ ├── utils/
│ │ ├── scrollToTop.js
│ │ ├── useColorPage.js
│ │ └── useDeviceSize.js
│ │
│ ├── App.js
│ ├── index.js
│ └── setupTests.js
│
└── README.md
```

---

## ⚙️ Installation & Setup / Instalación y Configuración

## Clone repo / Clonar repositorio
```bash
git clone https://github.com/fockus26/bicket.git
cd bicket
```

## Install dependencies / Instalar dependencias
```bash
npm install
```

## Run / Ejecutar
```bash
npm start
```

App will run on: http://localhost:3000

---

## 📖 Case Study / Caso de Estudio

**English**

Bicket was envisioned as a SaaS evolution of the Tickets project.
It introduced a refined UI/UX, user authentication, and a scalable design for multiple clients.
Although the project remains paused due to pending features (payment gateway, API, admin panel), it represents an important step in building modern SaaS applications with React.

**Español**

Bicket fue pensado como la evolución SaaS del proyecto Tickets.
Introdujo una interfaz mucho más refinada, autenticación de usuarios y un diseño escalable para múltiples clientes.
Aunque el proyecto quedó en pausa por funcionalidades pendientes (pasarela de pagos, API, panel de administración), representa un avance clave en la construcción de aplicaciones SaaS modernas con React.

📈 Future Improvements / Mejoras Futuras

**English**

- 💳 Payment gateway integration (Stripe, PayPal).

- 🔌 Backend API (Flask/Node.js).

- 🛠️ Admin panel for global management.

- 📱 Mobile-first optimization.

- 🌐 Multi-language support.

**Español**

- 💳 Integración de pasarela de pagos (Stripe, PayPal).

- 🔌 API backend (Flask/Node.js).

- 🛠️ Panel de administración para gestión global.

- 📱 Optimización mobile-first.

- 🌐 Soporte multilenguaje.

---

## 📜 License / Licencia

**English**

This project is currently not open-source.
Code and design are reserved to the author.

**Español**

Este proyecto no es de código abierto actualmente.
El código y el diseño están reservados al autor.
