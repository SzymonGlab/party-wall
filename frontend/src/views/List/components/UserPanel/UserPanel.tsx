import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AddFormController } from '../../../../components/AddFormController';
import { AuthContext } from '../../../../components/AuthProvider';
import { CustomModal } from '../../../../components/CustomModal';
import { UserDataType } from '../../../../types';
import { Loader } from '../../../../components/Loader';
import { fetchUserData } from '../../../../utils/fetchUtils';
import { signOut } from '../../../../utils/userUtils';
import { Logo } from '../../../../components/Logo';
import { UserListsController } from './components/UserListsController';

import './UserPanel.css';

export const CurrentUserContext = React.createContext<
    Partial<{ userData: UserDataType | null; setUserData: (newUserData: UserDataType) => void }>
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
            <CustomModal onCancel={() => setIsModalOpen(false)} isDisplayed={isModalOpen}>
                <AddFormController closeModal={() => setIsModalOpen(false)} />
            </CustomModal>
            <div id="user-panel-wrapper">
                <Logo />
                <div id="user-pic" />
                <p id="panel-username">{userData.name}</p>
                <Button id="add-item" variant="info" onClick={() => setIsModalOpen(true)}>
                    ADD
                </Button>
                <UserListsController />
                <Button id="sign-out" variant="info" onClick={signOut} block>
                    Sign out
                </Button>
            </div>
        </CurrentUserContext.Provider>
    );
};
