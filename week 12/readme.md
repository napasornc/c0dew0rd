# Week 12_Final Presentation :astonished:

This week I have to debug the sound, and for loop, and start to experiment with color and typeface. Karen help me identify which part of my code is causing problem.

<img src="Karen10.JPG" width="60%">

## Trouble with sounds
With the sound loop, as I learn from Karen, the sound need 

## Trouble word loop

After I add a secondary font, I was having trouble with looping the for loop through words but I finally figure it out. Not ideal but I move textFont, textSize, fill, and others that suppose to be in function draw to display() which is in class boid. 

```
    display() { 
    for (let j = 0; j < words.length; j++) {
    noStroke();
    fill(192,224,33);
    textFont(font);
    textSize(70);
    text(this.words[j], this.position.x * [j], this.position.y * [j]);
   }
  }
}
```
[here](https://napasornc.github.io/c0dew0rd/processing/MajorProjectFlocking18)

## Add background sentence

## Add mousePress

## Styling change

## Final work

## Goal

Virus is(not)wild focus is an interactive reading machine. It is an interpretation of the reading called ‘Viruses are good for you’, written by Julian Dibbel. The reading talks about us living in the world full of computer viruses. Instead of letting fear take over, we can study it and get familiar with it. Virus is alive and it is as diverse as different species of the Amazon jungle. Personally, Julian describes the virus beautifully transforming from trouble maker to solution creator. There is potential for viruses to solve problems humans can’t begin to imagine. It runs wild, evelove, generates, mutates into something we can oneday use for our own applications - this is what ‘Virus is(not)wild’ all about. We pretend to be computer scientists, observing the behavior of viruses which in this case is words and we assign tasks to the virus by adjusting its behavior. 


-------------------------------------------------
### [Previous](https://github.com/napasornc/c0dew0rd/tree/master/week%2011) 
-------------------------------------------------
### [Code week 12](https://github.com/napasornc/c0dew0rd/tree/master/processing/week%2012) 
--------------------------------------------------
### [Back to weekly note](https://napasornc.github.io/c0dew0rd/)
