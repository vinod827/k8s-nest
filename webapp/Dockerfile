FROM node:alpine

WORKDIR /app
COPY package.json package.json
RUN npm install package.json
COPY . .

LABEL maintainer="Vinod Kumar Nair <vinod827@gmail.com>" \
      version="1.0.1"

#Running as non-root user
RUN addgroup -S developers && adduser -S appuser -G developers -h /home/appuser
USER appuser 

CMD npm start --host=0.0.0.0 --port=8080