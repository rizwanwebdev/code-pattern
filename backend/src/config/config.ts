import dotenv from "dotenv"

dotenv.config()

function getEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing env variable: ${key}`)
  }
  return value
}

const config = {
  PORT: getEnv("PORT"),
  POSTGRES_USER: getEnv("POSTGRES_USER"),
  POSTGRES_PASSWORD: getEnv("POSTGRES_PASSWORD"),
  POSTGRES_DB: getEnv("POSTGRES_DB"),
  DATABASE_URL: getEnv("DATABASE_URL"),
}

export default config