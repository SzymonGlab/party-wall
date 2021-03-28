import React, { Dispatch, useEffect } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import { RadioType } from '../../types';

export const CustomToggleButtons: React.FC<{
    radios: RadioType[];
    value: RadioType;
    updateValue: Dispatch<RadioType>;
}> = ({ radios, value, updateValue }) => {
    useEffect(() => {
        updateValue(radios[0]);
    }, []);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
        updateValue(radios.find((radio) => radio.value === e.currentTarget.value) || radios[0]);

    return (
        <ButtonGroup toggle>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={value.value === radio.value}
                    onChange={handleChange}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};
