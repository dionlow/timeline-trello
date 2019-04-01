This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`
Builds app, node modules etc. 

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You will also see any lint errors in the console.

### Testing

Clicking on the 'Generate TimelineTrello' Logo in the top left will generate 100 random events within 4 - 10 years for demo purposes. 

## Required Section

### Time Spent. 

7hours
* 1 hour on generating paper prototypes and mocking some designs.  
* 6 hours on development

### What you like about your implementation. 
* Simple, Scalable, and Modular. It's easy to further build on this design by reusing the components for drill down. 
For example, it would easy to add a feature where if you double click a year it will display 12 swimlanes - 1 for each month. 
etc. for days... 
* This timeline prioritizes seeing most recent events. And scrolling right is more of a reflection. 
* CSS Module and SCSS serve as powerful combination to keep component styling isolated with few possibilities of conflicting styling (with css nesting and priority)
* There is an event count in the footer of each timeline so one can tell how long the timeline is before searching. 

### What you would change if you were going to do it again.
* It would be nice to be able to see all events in one screen. Zooming out so that swimlanes convert to a unscrollable vertical timeline for the year could offer more visual information upon first use, however search might be more effective and easier to implement for this use case. 
* Conflicts in interval overlapping is not easily identified in this design and the user is not aware of how long or significant an event is compared to another. In this solution it might be feasible to try a color scheme which identifies important(or possibly longer interval) events that could be more signifcant. 

### How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
Other mockups included: 
* Simple single line timeline. While horiztonal timeline seemed more natural, vertical timelines are more usable when there are more events and one needs to scroll. (Vertical scroll is easier and more consistent on the screen)
* Overlapping bars in a single swimlane. Hover expands and lifts bar above. Overlapping bars would become exponentially more complex with greater number of events
* Single Lane Column with events sorted by start date for each row in left side component. Right side shows overlapping bars which highlights when row is selected. Hybrid design...but also more work. 
* Dynamic Programming solution modeled after the original dyanamic programming name -- train schedules that updated upon event delay or change allowing no bar overlap. Efficient and conveys plenty of information but when item is added the entire schedule would update the state and the bars might switch positions. Large number of events would cause user to lose track of where previous events were and cause them to search for it again...this solution could also be seen as over-engineered for a very specific use case as differences lie between user gernated and machine generated swimlane schedules. 

The selected design follows a dual axis timeline that are bucketed via specific intervals. These intervals could be optimized via an algorithm or pre-selected for most common use cases (year, month, day, etc.) Upon research, I used a trello like design to execute. The grid design is simple and straight foward. It's easy to modify style and keep components modularized. The design also is able to take in and render a large amount of events. 


### How you would test this if you had more time.
Unit tests and snapshot testing for  
* a single card component
* a single swimlane (Timeline) with few events 
* a single swimlane (Timeline) with many events
* several swimlanes 
* several swimlanes with empty intervals (i.e. 2014 has no events) 
* utility tests for sort, filter, or parse functions as applied --> also abstract these functions to separate utility folder later

External integration tests are not required yet as affected state with other components are not currently scoped. 