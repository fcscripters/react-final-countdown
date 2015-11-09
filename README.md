# react-final-countdown
Countdown react component for publishing on NPM

## Installation

```
npm install react-the-final-countdown --save
```

## Description

A React component that allows a countdown timer to be added to any react webpage in the right hand corner of the site.

The timer allows developers of a website to limit the users time on a particular webpage. Examples of when this might be useful include work situations where motivation is a problem. At Founders and Coders we often have limited research time prior to discussion and a timer on a website could help enforce the principle. It can also be useful for shopping checkout pages where an item is only reserved for a certain amount of time.

## Usage

After installation add the following to your main js file i.e. `app.js`

```javascript
var Countdown = require('react-the-final-countdown');
```

And add the Countdown component where you are returning your HTML: 

```javascript
<Countdown min = {3} msg ="Close the bloody fridge" afterUnmount = {this.afterUnmount}/>
```

- min is the number of minutes you'd like to start the countdown from.
- msg is the message that will appear after the time is up.
- afterUnmount is a function that you can create in your app.js that will be called once the timer is finished and the OK button is clicked.

Timer with Seconds Only.  
![screen shot 2015-11-05 at 17 34 55](https://cloud.githubusercontent.com/assets/12072531/10976565/64aef75a-83e4-11e5-9e2d-60823bb4981a.png)  
Timer with Minutes.  
![screen shot 2015-11-05 at 17 35 14](https://cloud.githubusercontent.com/assets/12072531/10976567/66ddbc82-83e4-11e5-989c-1962c8f22982.png)  
Pop up when timer is up, the developer can edit the message.  
![screen shot 2015-11-05 at 17 40 47](https://cloud.githubusercontent.com/assets/12072531/10976571/68d610b6-83e4-11e5-8dfa-3d12e2635a0f.png)  


## Styles

Styles are provided inline in the npm module, where they can be edited. But we hope you like our simple CSS layout.

## Development

If you find any bugs, or would like to help improve this module, please feel free to raise an issue and we'll get back to you ASAP. :smile: and give us a star on the repo :star:

## License

MIT
