import { Component, OnInit, Input } from '@angular/core';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Component({
  selector: 'app-steps-indicator',
  templateUrl: './steps-indicator.component.html',
  styleUrls: ['./steps-indicator.component.css']
})
export class StepsIndicatorComponent implements OnInit {
  static STEPPER_MODE = {
    FILL_CURRENT: 0,
    FILL_PEVIOUS: 1
  }

  @Input('count') count;
  @Input('activeStepIndex') activeStepIndex;
  @Input('mode') mode?: number; 
  constructor() { 
    if(!this.mode) {
      this.mode=StepsIndicatorComponent.STEPPER_MODE.FILL_CURRENT;
    }
  }

  ngOnInit() {
  }

  numberOfSteps(n: number): any[] {
    return Array(n)
  }

}
