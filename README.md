# Managers App Monorepo Scaffold

## 🚀 Instructions

1. Installer les dépendances :
   ```bash
   pnpm install
   ```

2. Lancer la base de données :
   ```bash
   docker-compose up -d
   ```

3. Appliquer Prisma :
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Lancer les services :
   - API NestJS : `pnpm --filter backend dev`
   - Web App : `pnpm --filter web dev`
   - Mobile App : `pnpm --filter mobile start`

## 📦 Structure
- apps/web : Next.js + Tailwind
- apps/mobile : Expo React Native
- services/backend : NestJS API
- packages/ui : composants UI
- packages/api : client API
- packages/db : Prisma client
- prisma : schéma + seed
- docker : PostgreSQL, MinIO

