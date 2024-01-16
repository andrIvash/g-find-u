import { StickyAccordion } from "./StickyAccordion";
import { IUser } from '../../store/users/types';

export interface IProps {
    items: IUser[];
    detailsHeight?: number;
    onChangeExpanded?: (targetName: string) => void;
    renderContent?: (targetId: string, targetName: string) => JSX.Element | undefined;
}

export default StickyAccordion;