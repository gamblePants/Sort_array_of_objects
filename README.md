# Sort array of objects

1. Program creates an array of objects (animals)
2. Displays array via alert in browser
3. Adds 2 more animals to the array
4. Numerically sorts array by number of legs
5. Displays array in alert
6. Alphabetically sorts array by animal name
7. Displays array in alert

![animals_alert.PNG](https://gamblepants.github.io/img/animals_alert.PNG)

## Purpose

Mostly to help myself learn methods for sorting arrays in JavaScript.

## How to run program

- Easiest way is to run the program online on JSFiddle: https://jsfiddle.net/gamblePants/1z7cfyk8/
(You will have to click OK through all 3 alerts, before being able to view the code in full)
- Alternatively go to the "release" tab above, right-click on the exercise9.html file and select "Save As"
- Save the html file to your computer
- Double-click file to run in your browser
- Or open file with a text editor to view the code


## Code snippets

Sort numerically by number of animal legs:
```C#
const sortedByLegs = animals.sort(function(a, b) {
        return a.legs - b.legs;
      });

```
Sort alphabetically by animal name:
```C#
const sortedByName = animals.sort((a, b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));
```

