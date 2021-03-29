import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { CustomForm } from '../../components/CustomForm';
import { CustomToggleButtons } from '../../components/CustomToggleButtons/CustomToggleButtons';
import { useAddItemRequest } from '../../hooks/useAddItemRequest';
import { RadioType } from '../../types';
import { FOOD_FORM_RADIOS } from '../../utils/consts';
import { addSustenanceValidation } from '../../utils/formValidation';
import { isSustenance } from '../../utils/typeGuards';
import { ModalContent, StyledButton } from './elements';

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
                <StyledButton type="submit" color={colors.secondary}>
                    ADD
                </StyledButton>
            </CustomForm>
        </ModalContent>
    );
};
