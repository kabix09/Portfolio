# ---- deps ----
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
# Instalujemy WSZYSTKIE zależności (również devDeps), bo są potrzebne do builda
RUN npm ci

# ---- builder ----
FROM node:20-alpine AS builder
WORKDIR /app

# Kopiujemy node_modules z poprzedniego etapu
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Budujemy projekt - teraz Tailwind i TS będą widoczne
RUN npm run build

# ---- runner ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Włączamy obsługę standalone w Next.js (wymaga configu, patrz niżej)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]