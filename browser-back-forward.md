* Design how you could implement a browser back/forward system using two stacks so that you can visit a series of sites.
  * Using two stacks, you could call the first stack the 'initial visit' stack.
  * You could 'push' onto the stack when you are visiting a site
  * to go back, you'd have to pop off the last value and push that into a new stack
  * To go forwards again, pop off the last value from the second stack and push it into the first stack

