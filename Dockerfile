FROM node:18.19.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4200
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]