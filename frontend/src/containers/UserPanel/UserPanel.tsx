import React, { useContext, useState } from 'react';

import { signOut } from '../../api/userData';
import { Logo } from '../../components/Logo';
import { UserDataContext, UserDataContextType } from '../../context/UserDataProvider';
import { FoodFormController } from '../FoodFormController';
import { UserListsController } from '../UserListsController';
import { AddItemButton, SignOutButton, StyledModal, Username, UserPanelWrapper, UserPic } from './elements';

export const UserPanel: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { userData } = useContext(UserDataContext) as UserDataContextType;

    return (
        <>
            <StyledModal title="Add item" onCancel={() => setIsModalOpen(false)} isDisplayed={isModalOpen}>
                <FoodFormController closeModal={() => setIsModalOpen(false)} />
            </StyledModal>
            <UserPanelWrapper>
                <Logo />
                <UserPic />
                <Username>{userData.name}</Username>
                <AddItemButton variant="info" onClick={() => setIsModalOpen(true)}>
                    ADD
                </AddItemButton>
                <UserListsController />
                <SignOutButton variant="info" onClick={signOut} block>
                    Sign out
                </SignOutButton>
            </UserPanelWrapper>
        </>
    );
};
