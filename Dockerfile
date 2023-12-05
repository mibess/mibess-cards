# Build do Projeto
#FROM node:18.19.0 AS builder
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod
#FROM nginx:stable
#COPY --from=builder /app/dist/mibess-cards /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# Apenas executa o projeto
FROM node:18.19.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4200
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]

