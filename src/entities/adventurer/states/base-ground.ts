import { TransitionType } from '../../../components/phinite-state';
import { Adventurer } from '..';

export const baseGround = {
  transitions: [
    {
      type: TransitionType.Conditional,
      condition: (adventurer: Adventurer) => {
        return adventurer.body.velocity.y > 1;
      },
      to: (adventurer: Adventurer) => {
        adventurer.body.velocity.y = 100;

        if (adventurer.body.velocity.x > 0) {
          return 'adventurer-fall-right';
        } else if (adventurer.body.velocity.x < 0) {
          return 'adventurer-fall-left';
        } else {
          return 'adventurer-fall';
        }
      }
    }
  ]
}
