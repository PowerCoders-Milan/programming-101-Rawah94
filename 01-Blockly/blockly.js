//Insert level 9 code below

Share your blocks with this link:

https://blockly.games/maze?lang=en&level=9&skin=2#et34t6

while (notDone()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathLeft()) {
      turnLeft();
    }
    moveForward();
  }
}

