import React from 'react';

import { getCurrentWeekNumber } from "../../helpers/getCurrentWeekNumber";

import * as SC from './styles';

const Header = () => {
    const currentWeekNumber = getCurrentWeekNumber();

    return (
        <SC.Header>
            <SC.Logo>
                Расписание Максона
            </SC.Logo>

            <SC.WeekNumber>
                Номер текущей недели: {currentWeekNumber}
            </SC.WeekNumber>
        </SC.Header>
    );
};

export default Header;