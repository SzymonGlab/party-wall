import React from 'react';

import { UNITS } from '../../../../utils/productUtils';

import { AddFormWrapper, AddItemButton } from './elements';

export const AddForm: React.FC<{
    fields: string[];
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ fields, onSubmit }) => (
    <AddFormWrapper onSubmit={(e: any) => onSubmit(e)}>
        {fields.map((field: string) => (
            <div key={field}>
                <AddFormWrapper.Group controlId={field.toLowerCase()}>
                    <AddFormWrapper.Label>
                        {field} {UNITS[field.toLowerCase()] ? `(${UNITS[field.toLowerCase()]})` : ''}
                    </AddFormWrapper.Label>
                    <AddFormWrapper.Control placeholder={`${field} ...`} />
                </AddFormWrapper.Group>
            </div>
        ))}
        <AddItemButton variant="primary" type="submit">
            ADD
        </AddItemButton>
    </AddFormWrapper>
);
