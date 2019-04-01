import React from 'react'
import classes from './Timeline.module.scss'

/**
 * Parses a date format of 'yyyy-mm-dd' and returns a string formatted: December 23, 2019
 * @param {string} date 
 */
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]
const parseDateString = (date) => {
    const startA = date.split('-');
    return `${MONTHS[parseInt(startA[1])-1]}. ${parseInt(startA[2])}, ${startA[0]}`
}

const timeline = (props) => (
    <div className={classes.Timeline}>
          <header>{props.header}</header>
          <ul>
            {props.timeline.map((item) => (
                <li key={item.id}>
                    <p className={classes.Name}>{item.name}</p>
                    <p className={classes.Light}>{parseDateString(item.start)} - {parseDateString(item.end)}</p>                    
                </li>
            ))}
          </ul>
          <footer>{props.timeline.length} events</footer>
    </div>
)

export default timeline