import { SimpleInput } from './SimpleInput';

export const defaultLabel = 'Search';

export interface Props {
    onChange: (value: string) => void,
    value: string,
    label?: string,
    className?: string,
    onKeyDown?: (keyCode: number) => void;
}

export default SimpleInput;