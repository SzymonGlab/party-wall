import React from 'react';
import { Button } from 'react-bootstrap';

import { signOut } from '../../utils/userHandler';

export const List: React.FC = () => {
    return <Button onClick={signOut}>Sign out</Button>;
};
