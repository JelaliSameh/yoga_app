📌 Projet de Testing - Application de Yoga

## 📝 Description
Ce projet consiste à tester une application de yoga en Angular (front-end) et Spring Boot (back-end). Il inclut des tests unitaires, d'intégration et end-to-end (E2E) avec des rapports de couverture.

---

## 🚀 Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés :
- **Node.js** (version 16+)
- **Angular CLI** (si besoin) : `npm install -g @angular/cli`
- **Java JDK 11**
- **Maven** (pour le build du back-end)
- **Postman** (optionnel, pour tester les API)

---

## 📦 Installation

### 🔹 1. Cloner le projet  
```bash
git clone https://github.com/JelaliSameh/yoga_app.git
cd mon-projet
🔹 2. Installer le front-end
bash
cd front
npm install
🔹 3. Installer le back-end
bash
cd ../back
mvn clean install
🔹 4. Installer la base de données

▶️ Lancer l'application
🔹 1. Démarrer le back-end
bash
cd back
mvn spring-boot:run
🔹 2. Démarrer le front-end
bash
cd ../front
ng serve
L'application sera disponible sur http://localhost:4200/.

🧪 Exécuter les tests
🔹 1. Tests unitaires et d'intégration
Front-end (Jest)
bash
cd front
npm run test
📌 Rapport de couverture généré dans file:///C:/projet_formation/projet5/Testez-une-application-full-stack/front/coverage/lcov-report/index.html
                                     file:///C:/projet_formation/projet5/Testez-une-application-full-stack/front/coverage/jest/index.html
Back-end (Mockito & JaCoCo)
bash
cd ../back
mvn test
📌 Rapport de couverture généré dans file:/C:/projet_formation/projet5/Testez-une-application-full-stack/back/target/site/jacoco/index.html
🔹 2. Tests End-to-End (Cypress)
bash
cd front-end
ng e2e
Lancez les tests via l'interface Cypress.

📊 Rapports de couverture
Des captures d’écran des rapports de couverture sont disponibles :

📌 yoga_app/ressources/images

📜 Auteurs
👩‍💻 Badri Sameh - Développeuse Full Stack
📌 Projet réalisé dans le cadre de la formation OpenClassrooms.
