FROM denoland/deno:latest as base

WORKDIR /app

COPY . .

# Makes sure to cache all the imports needed
RUN deno cache main.ts

CMD [ "task", "start" ]