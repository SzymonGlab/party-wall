import React from 'react';
import { Spinner } from 'react-bootstrap';

import './Loader.css';

export const Loader: React.FC = () => <Spinner animation="border" role="status" id="loading-spinner" />;
