import { type SchemaTypeDefinition } from 'sanity'
import { tutorials } from './tutorials'
import { blog } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tutorials,blog],
}
