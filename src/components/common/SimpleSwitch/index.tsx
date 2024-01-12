import { SimpleSwitch } from './SimpleSwitch';

export interface Props {
    checked: boolean,
    onChange: (value?: boolean) => void,
    leftLabel?: string | React.ReactNode,
    rightLabel?: string | React.ReactNode
}

export default SimpleSwitch;