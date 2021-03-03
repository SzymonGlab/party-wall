import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AddFormController } from '../../../../components/AddFormController';
import { AuthContext } from '../../../../components/AuthProvider';
import { CustomModal } from '../../../../components/CustomModal';
import { UserDataType } from '../../../../types';
import { fetchUserData } from '../../../../utils/fetchUtils';
import { signOut } from '../../../../utils/userUtils';
import { UserListItem } from './components/UserListItem';

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

    return (
        <CurrentUserContext.Provider value={{ userData, setUserData }}>
            <div id="user-panel-wrapper">
                <CustomModal onCancel={() => setIsModalOpen(false)} isDisplayed={isModalOpen}>
                    <AddFormController closeModal={() => setIsModalOpen(false)} />
                </CustomModal>
                <UserListItem />
                <Button onClick={() => setIsModalOpen(true)}>Add item</Button>
                <Button variant="dark" onClick={signOut}>
                    Sign out
                </Button>
            </div>
        </CurrentUserContext.Provider>
    );
};
