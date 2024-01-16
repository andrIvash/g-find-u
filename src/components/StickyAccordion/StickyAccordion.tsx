import React, { useState, useMemo } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IUser } from '../../store/users/types';
import { IProps } from './index';

import './StickyAccordion.scss';

export const StickyAccordion = (props: IProps) => {
    const {
        items,
        detailsHeight,
        renderContent,
        onChangeExpanded,
    } = props;
    const [expanded, setExpanded] = useState<string | false>();

    const handleChange = (login: string) => (_event: React.ChangeEvent<NonNullable<unknown>>, isExpanded: boolean) => {
        setExpanded(isExpanded ? login : false);
        if (onChangeExpanded) {
            onChangeExpanded(login);
        }
    };

    const resultContent = useMemo(() => {
        let result: IUser[] = [];
        const expandedItemId = items.findIndex((item) => item.login === expanded);
        if (expandedItemId === -1) {
            result = [...items];
        } else {
            if (items[expandedItemId - 1]) {
                result.push(items[expandedItemId - 1]);
            }
            result.push(items[expandedItemId]);
            if (items[expandedItemId + 1]) {
                result.push(items[expandedItemId + 1]);
            }
        }
        return result;
    }, [items, expanded]);

    return (
        <div className={`s-acco ${!expanded ? 's-acco--no-expanded' : ''}`}>
            {resultContent.map((item) => (
                <Accordion
                    className={`s-acco__item ${expanded === item.login ? 's-acco__item--expanded' : ''}`}
                    square
                    key={item.id}
                    expanded={expanded === item.login}
                    onChange={handleChange(item.login)}
                    variant='outlined'
                >
                    <AccordionSummary
                        className='s-acco__sum'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${item.login}-content`}
                        id={`${item.login}-header`}
                    >
                        <Typography className='s-acco__header'>
                            {item.login}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className='s-acco__details'
                        id={`scrollableDiv-${item.login}`}
                        style={{
                            height: detailsHeight ? detailsHeight : '100%',
                            overflow: detailsHeight ? 'auto' : undefined,
                        }}
                    >
                        {renderContent ?
                            renderContent(`scrollableDiv-${item.login}`, item.login) : undefined}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};