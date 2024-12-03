<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Task Flow

## Description

Task Flow is a simple, scalable application built with the NestJS framework to manage and track tasks within a project. This starter template provides a foundation for building scalable backend applications with PostgreSQL database management using Prisma. It is designed for applications that require task workflow management, project tracking, and extensible features for more complex projects.

## Project Setup

1. **Run the project in development mode**:

   Make sure you have Node.js and npm installed on your machine. Then, install all the required dependencies by running:

   ```bash
   npm install
   ```

2. **Add environment variables**:

   Create a .env file at the root of your project (if not already created) and include the following:

   - DATABASE_URL: Connection string for your PostgreSQL database. Replace username, password, host, port, and db_name with your database credentials.
   - SECRET_JWT: A secure, randomly generated string used to sign and verify JWT tokens. Ensure this value is kept secret and not shared publicly.

   ```bash
   DATABASE_URL="postgresql://username:password@host:port/db_name?schema=public"
   SECRET_JWT="your-randomly-generated-secret-key"
   ```

3. **Run Prisma migrations**:

   If you haven’t set up your database yet, run the following command to apply the initial migrations and create the database schemas:

   ```bash
   npx prisma migrate dev --name init
   ```

## Development

1. **Run the project in development mode**:

   ```bash
   npm run start
   ```

2. **Run the project in watch mode** (auto-restarts on file changes):

   ```bash
   npm run dev
   ```

3. **Run in production mode**:

   ```bash
   npm run start:prod
   ```

## Running Tests

1. **Run unit tests**:

   ```bash
   npm run test
   ```

2. **Run end-to-end (e2e) tests**:

   ```bash
   npm run test:e2e
   ```

3. **Check test coverage**:

   ```bash
   npm run test:cov
   ```

## Deployment

For deploying your NestJS application to production, follow the [deployment documentation](https://docs.nestjs.com/deployment). For cloud deployment, you can use [Mau](https://mau.nestjs.com):

```bash
npm install -g mau
mau deploy
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com) — Official documentation.
- [NestJS Discord Channel](https://discord.gg/G7Qnnhy) — Community support.
- [NestJS Courses](https://courses.nestjs.com/) — Official video courses.
- [Deploy with NestJS Mau](https://mau.nestjs.com) — AWS deployment made easy.
- [Prisma ORM](https://www.prisma.io/) — Official documentation.

## License

This project is licensed under the MIT License.

## Stay in Touch

- Author: [Jonas Szigeti](https://www.linkedin.com/in/jonas-szigeti/)
- Website: [jsproject.fr](https://jsproject.fr/)
