// code your solution here

function superbowlWin(record) {
    let wins;
    if(wins = record.find(({result}) => result === "W")){
      return wins.year;
    } else{
      return undefined;
    }
}