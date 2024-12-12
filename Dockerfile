FROM node:22 as builder

RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lock

COPY . .
RUN pnpm build


FROM node:22
COPY --from=builder /app/.output /app
WORKDIR /app
EXPOSE 3000
CMD ["npm", "/app/server/index.mjs"]