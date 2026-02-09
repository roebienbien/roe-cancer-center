FROM node:20

WORKDIR /app

# copy only package files
COPY package*.json ./

# DON'T run npm install here

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "npm install && npm run dev"]

