# Angular Steps Tracker

## Usage
Suppose one application have 5 modules and each module has 5 steps to complete. To track the steps like which step do you currently exist or how many steps you have already completed, we can use this tracker. This component has two configuration like below.

## Current step
<app-steps-indicator [count]="10" [activeStepIndex]="2" [mode]="0"></app-steps-indicator>
<p><img src="https://github.com/ajayjaya/steps-tracker/blob/master/src/assets/images/current.JPG"></p>

## Previous step
<app-steps-indicator [count]="6" [activeStepIndex]="2" [mode]="1"></app-steps-indicator>
<p><img src="https://github.com/ajayjaya/steps-tracker/blob/master/src/assets/images/previous.JPG"></p>

Demo Link:
https://stackblitz.com/edit/angular-steps-tracker

## Author
Ajay Maharana<br> 
Email: ajaytukuna@gmail.com
