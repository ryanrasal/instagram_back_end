# Utilisation de l'image Node.js officielle
FROM node:14

RUN mkdir /app

# Création du répertoire de travail dans l'image
WORKDIR /app

# Copie des fichiers
COPY . .

# Installation des dépendances
RUN npm install

# Exposition du port sur lequel l'application écoute
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]