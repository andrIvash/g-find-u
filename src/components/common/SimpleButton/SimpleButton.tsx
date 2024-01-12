import * as React from 'react';
import Button from '@mui/material/Button';
import { Props , defaultLabel } from "./index";

import './SimpleButton.scss';

export const SimpleButton = (props: Props) => {
    
    const handleClick = () => {
        props.onClick();
    };

    return (
        <div className='simpleButton' data-testid="SimpleButton">
             <Button variant="contained" onClick={handleClick}>
                {props.label ? props.label : defaultLabel}
            </Button>
        </div>
    )
}
