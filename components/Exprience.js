import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';

import ExpStyles from "../styles/experience.module.css";

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(30, 45, 72)', color: '#fff' }
};
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(87, 20, 43)', color: '#fff' }
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(35, 122, 86)', color: '#fff' }
};

function Experience() {
    const timeline = [
        { icon: workIcon, date: '2022 - present', title: 'System Engineer', desc: 'Networking, Security management, Infrastructure management' },
        { icon: workIcon, date: 'DEV 2020 - JAN 2022', title: 'IT Support Officer', desc: 'One-man band IT officer including System management, User support' },
        { icon: workIcon, date: 'SEP 2019 - MAY 2020', title: 'Engineer', desc: 'IT Project' },
        { icon: schoolIcon, title: 'Computing', subtitle: 'BSc (Hons)' },
        { icon: schoolIcon, title: 'Computer and Information Security', subtitle: 'Diploma' },
        { icon: starIcon }
    ];

    return (
        <div className={ExpStyles.experience} id='experience'>
            <h1>Experience</h1>
            <VerticalTimeline>
                {timeline.map((t, i) => {
                    const timelineLength = timeline.length;
                    const contentStyle = i === 0 ? { background: 'rgb(30, 45, 72)', color: '#fff' } : ( i === (timelineLength - 3) ? { background: 'rgb(87, 20, 43)', color: '#fff' } : ( i === (timelineLength - 1) ? undefined : { background: '#666', color: '#fff' }));
                    const arrowStyle = i === 0 ? { borderRight: '7px solid  rgb(30, 45, 72)' } : undefined;

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
