import React from 'react';

import * as SC from './styles';
import Card from "../card";
import { scheduleByWeekNumber } from "../../constants/schedule";
import { getCurrentWeekNumber } from "../../helpers/getCurrentWeekNumber";

const Main = () => {
    const currentWeekNumber = getCurrentWeekNumber();

    return (
        <SC.Main>
            <SC.CardsWrapper>
                {scheduleByWeekNumber[currentWeekNumber].map((subjects, dayNumber) => (
                    <SC.CardWrapper>
                        <Card
                            subjects={subjects}
                            dayNumber={dayNumber}
                        />
                    </SC.CardWrapper>
                ))}
            </SC.CardsWrapper>
        </SC.Main>
    );
};

export default Main;