import { z } from 'zod'


const schemaEnv = z.object({
  VITE_NODE_END: z.string().default('dev'),
  VITE_SERVICE_ID: z.string(),
  VITE_TEMPLATE_ID: z.string(),
  VITE_PUBLIC_KEY: z.string(),
})

const _env = schemaEnv.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('Erros variables not found', _env.error.format())

  throw new Error('Erros variables not found')
}

export const env = _env.data
