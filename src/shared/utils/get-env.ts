export const env = (envName: string) => {
  return process.env[envName] as string
}
