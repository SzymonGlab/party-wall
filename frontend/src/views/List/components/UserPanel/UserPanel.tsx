import React, { Dispatch, useContext, useEffect, useState } from 'react';

import { fetchUserData } from '../../../../api/fetchUtils';
import { signOut } from '../../../../api/userUtils';
import { AuthContext } from '../../../../components/AuthProvider';
import { CustomModal } from '../../../../components/CustomModal';
import { FoodFormController } from '../../../../components/FoodFormController';
import { Loader } from '../../../../components/Loader';
import { Logo } from '../../../../components/Logo';
import { UserDataType } from '../../../../types';
import { UserListsController } from './components/UserListsController';
import { AddItemButton, SignOutButton, Username, UserPanelWrapper, UserPic } from './elements';

export const CurrentUserContext = React.createContext<
    Partial<{ userData: UserDataType | null; setUserData: Dispatch<UserDataType> }>
>({});

export const UserPanel: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            if (currentUser) {
                setUserData(await fetchUserData(currentUser?.uid));
            }
        };
        fetch();
    }, []);

    if (!currentUser || !userData || !setUserData) {
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
