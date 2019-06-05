// @ts-check
const fs = require('fs')
const { resolve } = require('path')
const dotenv = require('dotenv')
const yaml = require('yaml')

// Get the full paths of database/prisma.yml & .env
const envPath = resolve(process.cwd(), '.env')
// const primsaConfigPath = resolve(process.cwd(), 'database', 'prisma.yml')
const dockerComposeConfigPath = resolve(process.cwd(), 'docker-compose.yml')

// This is the prisma key for the .env, key & value that is used for the app
// in 'src/index.ts' to actually work
// const ENV_PRISMA_ENDPOINT_KEY = 'PRISMA_ENDPOINT'
// const ENV_PRISMA_SECRET_KEY = 'PRISMA_SECRET'
const ENV_PRISMA_MANAGEMENT_API_SECRET = 'PRISMA_MANAGEMENT_API_SECRET'
const ENV_APP_SECRET_KEY = 'APP_SECRET'
// const YAML_PRISMA_ENDPOINT_KEY = 'endpoint'
// const YAML_PRISMA_SECRET_KEY = 'secret'

// let prismaConfigEndpoint = ''
// let prismaConfigSecret = ''
let prismaManagementApiSecret = ''

try {
  // const prismaConfigString = fs.readFileSync(primsaConfigPath, {
  //   encoding: 'utf8',
  // })

  // const prismaConfig = yaml.parse(prismaConfigString)
  // prismaConfigEndpoint = prismaConfig[YAML_PRISMA_ENDPOINT_KEY]
  // prismaConfigSecret = prismaConfig[YAML_PRISMA_SECRET_KEY]

  // get the management api value from docker-compose.yml
  const dockerComposeConfigString = fs.readFileSync(dockerComposeConfigPath, {
    encoding: 'utf8',
  })
  const dockerComposeConfig = yaml.parse(dockerComposeConfigString)
  const dockerPrismaConfig = yaml.parse(
    dockerComposeConfig.services.prisma.environment.PRISMA_CONFIG
  )
  prismaManagementApiSecret = dockerPrismaConfig.managementApiSecret
} catch (e) {
  console.log(e)
}

let envFileString = ''

try {
  envFileString = fs.readFileSync(envPath, {
    encoding: 'utf8',
  })
} catch (e) {}

let envConfig = dotenv.parse(envFileString)

// If the 'managementApiSecret' value from docker-compose isn't nil
// update the corresponding env key with it
if (prismaManagementApiSecret) {
  envConfig[ENV_PRISMA_MANAGEMENT_API_SECRET] = prismaManagementApiSecret
}

// Only update the env variable 'APP_SECRET' if not set
// This variable is used by the app for jwt authentication
if (!envConfig[ENV_APP_SECRET_KEY]) {
  envConfig[ENV_APP_SECRET_KEY] = envConfig[ENV_APP_SECRET_KEY] || 'app_secret'
}

// stringify the envConfig to an 'env' format
let newConfig = Object.entries(envConfig).reduce(
  (prev, [key, value]) => `${prev}${key}="${value}"\n`,
  ''
)

fs.writeFileSync(envPath, newConfig, { encoding: 'utf8' })
