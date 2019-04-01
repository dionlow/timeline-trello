import React from 'react';
import classes from './Timelines.module.scss'
import Timeline from './Timeline/Timeline'

const timelines = (props) => {

    // Break up timelines by year
    // Future Features: add different sorts (ascending, descending, filter by month or year) 
    // Descending Sort chosen by default
    const timelines = props.timelines.sort((a, b) => {
        const startA = a.start.split('-')
        const dateA = new Date(startA[0], startA[1]-1, startA[2])
        const startB = b.start.split('-')
        const dateB = new Date(startB[0], startB[1]-1, startB[2])
        return dateB - dateA
    }) 

    const timelineMap = {} // key: year, value: [...events]
    for (let event of timelines) {
        const year = event.start.split('-')[0]
        if (timelineMap[year]) {
            timelineMap[year].push(event)
        } else {
            timelineMap[year] = [event]
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Creates an array of Timeline React Elements 
     */
    const createTimelines = () => {
        const _timelines = []
        // reverse sort the order 
        for (let year of Object.keys(timelineMap).sort((a,b) => b-a)) {
            _timelines.push(<Timeline key={year} header={year} timeline={timelineMap[year]}/>)
        }
        return _timelines
    }

    return <div className={classes.Timelines}>{createTimelines()}</div>  
}

export default timelines