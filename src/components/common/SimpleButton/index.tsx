import { SimpleButton } from './SimpleButton';

export const defaultLabel = 'Ok';

export interface Props {
    onClick: () => void,
    label?: string,
    className?: string
}

export default SimpleButton;
