/**
 * Generates an array of (NUMBER_OF_EVENTS) random tineline items 
 */

/**
 * Generates Random Number between min and max
 * @param {int} min 
 * @param {int} max 
 */
const getRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

const getRandomTimeline = (numberOfEvents=100) =>{

    const arr = Array(numberOfEvents).fill(0)
    const startYear = getRandomNumber(2010, 2016)
    const timelineItems = arr.map( (_,idx) => { 
        const year = getRandomNumber(startYear, 2019)
        const month = getRandomNumber(1, 12)
        const day = getRandomNumber(1,28)
        const startDate = `${year}-${month}-${day}`
        const endDate = `${year}-${month}-${day+1}`
        const eventName = Math.random() > .1 
        ? 'Event ID: ' + idx
        : 'Event ID: ' + idx + " - some super long texttttttttttttt! " 

        return {
            id: idx,
            start: startDate,
            end: endDate,
            name: eventName,
        }
    })
    return timelineItems
}


export default getRandomTimeline