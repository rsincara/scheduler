import React from 'react';

import { getDayByNumber } from "../../helpers/getDayByNumber";
import { timeRangeBySubjectNumber } from "../../constants/schedule";

import * as SC from './styles';

const Card = ({
  dayNumber,
  subjects = [],
}) => {
    const isSelfStudyDay = subjects.length === 0;

    return (
        <SC.Card>
            <SC.Day>
                {getDayByNumber(dayNumber)}
            </SC.Day>
            {isSelfStudyDay && (
                <SC.SelfStudyDay>
                    День самостоятельных занятий
                </SC.SelfStudyDay>
            )}
            {!isSelfStudyDay && subjects.map((subject) => (
                <SC.ScheduleSubjectWrapper>
                    <SC.ScheduleTimeBlock>
                        {timeRangeBySubjectNumber[subject.subjectNumber]}
                    </SC.ScheduleTimeBlock>
                    <SC.ScheduleSubject>
                        {subject.subjectName} <br />
                        {subject.teacherName} <br />
                        {subject.audience}
                    </SC.ScheduleSubject>
                </SC.ScheduleSubjectWrapper>
            ))}
        </SC.Card>
    );
};

export default Card;