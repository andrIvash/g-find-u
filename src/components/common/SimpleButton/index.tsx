import { SimpleButton } from './SimpleButton';

export const defaultLabel = "Ok";

export interface Props {
    label?: string,
    onClick: () => void,
}

export default SimpleButton;
