import { SimpleSwitch } from './SimpleSwitch';

export interface Props {
    checked: boolean,
    onChange: (value?: boolean) => void,
    leftLabel?: string | React.ReactNode,
    rightLabel?: string | React.ReactNode,
    className?: string
}

export default SimpleSwitch;