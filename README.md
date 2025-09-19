Admin: Hasan1@gmail.com pass: Aa@123456


This is a React project bootstrapped with [Vite](https://vitejs.dev/) and set up with React Router, Tailwind CSS, and DaisyUI for styling.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)

### Installation

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/MHS676/ecommerce-client)
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Development

To start the development server, run:

```bash
npm run dev


# Clone the repository
git clone https://github.com/MHS676/pos-server.git
cd pos-server

# Install dependencies
npm install

# Create .env file in project root
# Replace <user>, <password>, <host>, <port>, <database> with your Postgres credentials
echo "DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>?schema=public
JWT_SECRET=supersecret" > .env

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push
# OR with migration
npx prisma migrate dev --name init

# Seed the database (creates default org, categories, products)
npm run db:seed
# OR
npx prisma db seed

# Start the server in development mode
npm run start:dev

# Production build & run
npm run build
npm run start:prod

