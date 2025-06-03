import {z} from 'zod';
import { requiredString } from '../util/util';

export const registerSchema = z.object({
     email: z.string().email(),
     displayName: requiredString('displayName'),
     password: requiredString('password')//z.string().min(6)
})

export type RegisterSchema = z.infer<typeof registerSchema>