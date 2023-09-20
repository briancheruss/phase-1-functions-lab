// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const headquarters = 42;
    return Math.abs(headquarters - blocks);
  }
  
  function distanceFromHqInFeet(feet) {
    const blocks = distanceFromHqInBlocks(feet);
    return blocks * 264; 
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; 
  }  
  
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
  
    if (feetTravelled <= 400) {
      return 0; 
    } else if (feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
  }
  
  
  