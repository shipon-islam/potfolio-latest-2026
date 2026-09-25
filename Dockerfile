# Multi-stage build for the Next.js portfolio.
# 1. deps ...... install exact dependencies from the lockfile
# 2. builder ... compile the app and collect the standalone server
# 3. runner .... small production image running as a non-root user

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Tells next.config.mjs to emit .next/standalone for a self-contained server.
ENV BUILD_STANDALONE=1
# NEXT_PUBLIC_* values are baked into the bundle at build time, so they must be
# passed as build args, e.g. docker build --build-arg NEXT_PUBLIC_SITE_URL=...
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_CONTACT_EMAIL
ARG NEXT_PUBLIC_CONTACT_PHONE
ARG NEXT_PUBLIC_RESUME_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL \
    NEXT_PUBLIC_CONTACT_PHONE=$NEXT_PUBLIC_CONTACT_PHONE \
    NEXT_PUBLIC_RESUME_URL=$NEXT_PUBLIC_RESUME_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
