import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { SectionWrapper } from '@/hoc';
import {ProjectCard} from '@/components';
import { projects } from '@/constants'
import { labels } from '@/constants'

const ProjectsTimeLine = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
        <HorizontalTimeline
            index={value}
            indexClick={(index) => {
                setValue(index);
            }}
            values={projects.map((item) => item.date)}
            labelWidth={150} 
            getLabel={(date) => labels[date]}
            styles={{
                //background: '#f8f8f8',
                foreground: 'red',
                outline: '#dfdfdf',
            }}
        />
        <div style={{ marginTop: 100 }}>
            <ProjectCard timelineItems={projects} value={value}/>
        </div>
    </>
  );
};

export default SectionWrapper(ProjectsTimeLine, "");