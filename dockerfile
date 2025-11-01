FROM node:22

WORKDIR /app

# Копируем только package.json, чтобы быстрее билдилось
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Теперь копируем остальной код
COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
