import React, { Dispatch, useState } from 'react';

import { signOut } from '../../../../api/userUtils';
import { CustomModal } from '../../../../components/CustomModal';
import { FoodFormController } from '../../../../components/FoodFormController';
import { Loader } from '../../../../components/Loader';
import { Logo } from '../../../../components/Logo';
import { useGetUserData } from '../../../../hooks/useGetUserData';
import { UserDataType } from '../../../../types';
import { UserListsController } from './components/UserListsController';
import { AddItemButton, SignOutButton, Username, UserPanelWrapper, UserPic } from './elements';

export const CurrentUserContext = React.createContext<
    Partial<{ userData: UserDataType | null; setUserData: Dispatch<UserDataType> }>
>({});

export const UserPanel: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { userData, setUserData } = useGetUserData();

    if (!userData || !setUserData) {
        return <Loader />;
    }

    return (
        <CurrentUserContext.Provider value={{ userData, setUserData }}>
            <CustomModal title="Add item" onCancel={() => setIsModalOpen(false)} isDisplayed={isModalOpen}>
                <FoodFormController closeModal={() => setIsModalOpen(false)} />
            </CustomModal>
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
        </CurrentUserContext.Provider>
    );
};
