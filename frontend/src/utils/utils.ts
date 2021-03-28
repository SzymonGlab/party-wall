import { Field } from '../types';

export const generateInitialValues = (fields: Field[]): Record<string, string> =>
    fields.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {});
