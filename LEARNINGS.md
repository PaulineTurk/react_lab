# Bundle
- gros fichier js optimisé
- fusion de fichiers js

# Bundler
- outil de création de bundle ex. vite

# HMR = Hot Module Replacement
- le navigateur recharge uniquement les composants dont le state a changé
- évite de recharger toute la page à chaque modification de composant
- évite de perdre l'état d'avancement de la page en cours

# JSX = JavaScript XML
- extension de js pour autoriser du HTML dans du js
- adaptation du code HTML dans du jsx
    1. un seul élément racine
    2. **className** au lieu de **class** car class est un terme consacré en ts
    3. **htmlFor** au lieu de **for**
    4. **{}** dans le HTML pour injecter du js
    5. auto-closing obligatoire pour toutes les balises, même si en HTML c'est inutile ex. <img/> pas <img>

# Node.js
- environnement d'exécution (runtime) de JavaScript qui fonctionne en dehors d'un navigateur
- donne accès au système (fs = file system): fichiers, processus, ...
- crée des serveurs (http)
- programmé codé en javascript et C++ 
- n'est pas un navigatuer, ni une émulation de navigateur
- même moteur que navigatuer, V8 engine, mais APIs complètement différente
  - navigatuer: DOM, window, web APIs
  - Node.js: module core, libuv(I/O), bindings C++

# Puppeteer
- navigateur headless

# Navigateur
- DOM
- objet window
- rendering engine (moteur de rendu)
- web API ex. localStorage