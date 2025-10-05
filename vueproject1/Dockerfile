FROM node:lts AS development 

WORKDIR /app

# This is separate so layers are cached nicely
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
CMD ["npm", "run",  "dev" ]