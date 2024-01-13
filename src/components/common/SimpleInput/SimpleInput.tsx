import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Props, defaultLabel } from './index';

import './SimpleInput.scss';

export const SimpleInput = (props: Props) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    };

    return (
        <div
            className={`simpleInput input ${props.className ? props.className : ""}`}
            data-testid='SimpleInput'
        >
            <TextField
                className="textField"
                id="outlined-controlled"
                label={props.label ? props.label : defaultLabel}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    )
}
