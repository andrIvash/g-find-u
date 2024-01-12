import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Props } from "./index";
import './SimpleSwitch.scss';

export const SimpleSwitch = (props: Props) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.checked)
    };

    return (
        <div className='simpleSwitch'>
            { props.leftLabel ? (
                <div className='simpleSwitch__label simpleSwitch__leftLabel'>
                    {props.leftLabel}
                </div>
            ) : undefined }
            <Switch
                checked={props.checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                color="default"
            />
            { props.rightLabel ? (
                <div className='simpleSwitch__label simpleSwitch__rightLabel'>
                    {props.rightLabel}
                </div>
            ) : undefined }
        </div>
    )
}
