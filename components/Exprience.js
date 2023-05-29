import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';

import ExpStyles from "../styles/experience.module.css";

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'hsl(219, 41%, 20%)', color: '#fff' }
};
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' }
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }
};

function Experience() {
    const timeline = [
        { icon: workIcon, date: '2022 - present', title: 'System Engineer', desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading' },
        { icon: workIcon, date: 'DEV 2020 - JAN 2022', title: 'IT Support Officer', desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing' },
        { icon: workIcon, date: 'JUN 2020 - NOV 2020', title: 'IT Officer', desc: 'User Experience, Visual Design' },
        { icon: workIcon, date: 'SEP 2019 - MAY 2020', title: 'Enginner', desc: 'User Experience, Visual Design' },
        { icon: schoolIcon, date: 'In Progress', title: 'Computing', subtitle: 'BSc (Hons)' },
        { icon: schoolIcon, date: '2021 - 2023', title: 'Computer and Information Security', subtitle: 'Diploma' },
        { icon: starIcon }
    ];

    return (
        <div className={ExpStyles.experience} id='experience'>
            <h1>Experience</h1>
            <VerticalTimeline>
                {timeline.map((t, i) => {
                    const timelineLength = timeline.length;
                    const contentStyle = i === 0 ? { background: 'hsl(219, 41%, 20%)', color: '#fff' } : ( i === (timelineLength - 1) ? undefined : { background: '#666', color: '#fff' });
                    const arrowStyle = i === 0 ? { borderRight: '7px solid  hsl(219, 41%, 20%)' } : undefined;

                    return <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={arrowStyle}
                        date={t.date}
                        {...t.icon}
                    >
                        {t.title ? <React.Fragment>
                            <h3 className="vertical-timeline-element-title">{t.title}</h3>
                            {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                            {t.desc && <p>{t.desc}</p>}
                        </React.Fragment> : undefined}
                    </VerticalTimelineElement>
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
