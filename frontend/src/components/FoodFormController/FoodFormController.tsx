import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { useAddItemRequest } from '../../hooks/useAddItemRequest';
import { RadioType } from '../../types';
import { FOOD_FORM_RADIOS } from '../../utils/consts';
import { addSustenanceValidation } from '../../utils/formValidation';
import { isSustenance } from '../../utils/typeGuards';
import { CustomButton } from '../CustomButton';
import { CustomForm } from '../CustomForm';
import { CustomToggleButtons } from '../CustomToggleButtons/CustomToggleButtons';
import { ModalContent } from './elements';

export const FoodFormController: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [radioValue, setRadioValue] = useState<RadioType>(FOOD_FORM_RADIOS[0]);
    const { addItemRequest } = useAddItemRequest();
    const { colors } = useTheme();

    const handleSubmit = (values: Record<string, string>) => {
        if (isSustenance(values)) {
            addItemRequest(values);
            closeModal();
        }
    };

    return (
        <ModalContent>
            <CustomToggleButtons radios={FOOD_FORM_RADIOS} value={radioValue} updateValue={setRadioValue} />
            <CustomForm fields={radioValue.fields} onSubmit={handleSubmit} validationSchema={addSustenanceValidation}>
                <CustomButton type="submit" color={colors.secondary}>
                    ADD
                </CustomButton>
            </CustomForm>
        </ModalContent>
    );
};
