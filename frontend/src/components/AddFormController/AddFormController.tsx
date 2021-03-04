import React, { useContext, useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import produce from 'immer';

import { AuthContext } from '../AuthProvider';
import { sendAddRequest, isFood } from '../../utils/productUtils';
import { RadioType } from '../../types';
import { AddForm } from './components/AddForm';
import { CurrentUserContext } from '../../views/List/components/UserPanel';
import { Loader } from '../Loader';

const radios: RadioType[] = [
    {
        name: 'Food',
        value: 'food',
        fields: ['Name', 'Description', 'Weight', 'Quantity', 'Price'],
    },
    {
        name: 'Drink',
        value: 'drink',
        fields: ['Name', 'Volume', 'Quantity', 'Price'],
    },
];

export const AddFormController: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [radioValue, setRadioValue] = useState<RadioType>(radios[0]);
    const { userData, setUserData } = useContext(CurrentUserContext);
    const { currentUser } = useContext(AuthContext);

    if (!currentUser || !setUserData || !userData) {
        return <Loader />;
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
        setRadioValue(radios.find((radio) => radio.value === e.currentTarget.value) || radios[0]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        closeModal();
        const newItem = await sendAddRequest(e, radioValue.value, currentUser.uid);
        const newState = produce(userData, (draftState) => {
            if (isFood(newItem)) {
                draftState?.food.push(newItem);
            } else {
                draftState?.drink.push(newItem);
            }
        });

        setUserData(newState);
    };

    return (
        <>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue.value === radio.value}
                        onChange={handleChange}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <AddForm title={radioValue.name} fields={radioValue.fields} onSubmit={handleSubmit} />
        </>
    );
};
