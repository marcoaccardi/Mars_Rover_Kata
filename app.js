/* 
Final JS PREWORK Project
note: I added a better visualization of the rover movements(didn't love the array visualization)
*/

const rangeX = 10;
const rangeY = 10;


//-----------------ITERATION 1 | THE ROVER OBJECT--------------//
let rover = {
  direction: 'N',
  x: 0,
  y: 0
};
//-------------------------------------------------------------//


//---------------------Function declarations-----------------//

      //          ITERATION 2 | TURNING THE ROVER     //
      //-------------------turnLeft------------------//
      function turnLeft(rover){
        switch (rover.direction) {
          case 'N':
          rover.direction = 'W';
          break;
          case 'E':
          rover.direction = 'N';
          break;
          case 'W':
          rover.direction = 'S';
          break;
          case 'S':
          rover.direction = 'E';
          break;
        }
        console.log(`POS: (${rover.x}, ${rover.y})`)
        console.log(`DIR: ${rover.direction} \n
        `);
      }
      //---------------------------------------------//


      //-------------------turnLeft------------------//
      function turnRight(rover){
        switch (rover.direction) {
          case 'N':
          rover.direction = 'E';
          break;
          case 'E':
          rover.direction = 'S';
          break;
          case 'W':
          rover.direction = 'N';
          break;
          case 'S':
          rover.direction = 'W';
          break;
        }
        console.log(`POS: (${rover.x}, ${rover.y})`)
        console.log(`DIR: ${rover.direction} \n
        `);
      }
      //---------------------------------------------//


      //           ITERATION 3 | MOVING THE ROVER        //
      //-------------------MoveForward------------------//
      function moveForward(rover){
        // DON'T GO OUT THE GRID
        if ((rover.x >= 0 && rover.x < rangeX) && (rover.y >= 0 && rover.y < rangeX)) {
          switch (rover.direction) {
            case 'N':
              if((rover.x != 0 | rover.x != rangeX-1) && rover.y != 0){
                rover.y--;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                  console.log(`Sorry, off the boundaries. Try again.`);
              }
            break;
            case 'S':
              if((rover.x != 0 | rover.x != rangeX-1) && rover.y != rangeY-1){
                rover.y++;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                console.log(`Sorry, off the boundaries. Try again.`)
              }
            break;
            case 'E':
              if(rover.x != rangeX-1 && (rover.y != 0 | rover.y != rangeY-1) ){
                rover.x++;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                console.log(`Sorry, off the boundaries. Try again.`);
              }
            break;
            case 'W':
                if(rover.x != 0 && (rover.y != 0 | rover.y != rangeY-1) ){
              rover.x--;
              console.log(`POS: (${rover.x}, ${rover.y})`);
                } else {
                  console.log(`Sorry, off the boundaries. Try again.`)
                }
            break;
          }
        } else {
          console.log(`Sorry, off the boundaries. Try again.`)
        };
        console.log(`DIR: ${rover.direction} \n 
        `);
        
      }
      //-------------------------------------------------//


      //-------------------MoveBackward------------------//
        function moveBackward(rover){
          // DON'T GO OUT THE GRID
        if ((rover.x >= 0 && rover.x < rangeX) && (rover.y >= 0 && rover.y < rangeY)) {
          switch (rover.direction) {
            case 'N':
              if((rover.x !=0 | rover.x != rangeX-1) && rover.y != rangeY-1){
                rover.y++;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                  console.log(`Sorry, off the boundaries. Try again.`);
              }
            break;
            case 'S':
              if((rover.x !=0 | rover.x != rangeY-1) && rover.y != 0){
                rover.y--;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                console.log(`Sorry, off the boundaries. Try again.`)
              }
            break;
            case 'E':
              if((rover.y != rangeY-1 | rover.y != 0) && rover.x != 0 ){
                rover.x--;
                console.log(`POS: (${rover.x}, ${rover.y})`);
              } else {
                console.log(`Sorry, off the boundaries. Try again.`);
              }
            break;
            case 'W':
                if((rover.y != rangeY-1 | rover.y != 0) && rover.x != rangeX-1){
              rover.x++;
              console.log(`POS: (${rover.x}, ${rover.y})`);
                } else {
                  console.log(`Sorry, off the boundaries. Try again.`)
                }
            break;
          }
        } else {
          console.log(`Sorry, off the boundaries. Try again.`)
        };
        console.log(`DIR: ${rover.direction} \n 
        `);
        }
      //-------------------------------------------------//


//-------------------------------------------------------------//


//                   ITERATION 4 | COMMANDS                     //
//--------------------------goForward--------------------------//
//create a function to move around the rover

              //      ITERATION 5 | TRACKING          //
              //----------travelLog Array-------------//
                let travelLog = [];
              //-------------------------------------//

function goForward(commands){
  for (let i=0; i<commands.length; i++){
    //Letters convalidation, otherwise do nothing.
    let kmd = commands[i];
    if(kmd === 'f'| kmd === 'b'| kmd ==='l'| kmd ==='r'){
      switch (commands[i]) {
        case 'l':
          console.log(`CMD MAIN ROVER ${i+1}: ${commands[i]}`);
          turnLeft(rover);
          travelLog.push([rover.x, rover.y])
        break;
        case 'r':
          console.log(`CMD MAIN ROVER ${i+1}: ${commands[i]}`);
          turnRight(rover);
          travelLog.push([rover.x, rover.y])
        break;
        case 'f':
          console.log(`CMD MAIN ROVER ${i+1}: ${commands[i]}`);
          moveForward(rover);
          travelLog.push([rover.x, rover.y])
        break;
        case 'b':
          console.log(`CMD MAIN ROVER ${i+1}: ${commands[i]}`);
          moveBackward(rover);
          travelLog.push([rover.x, rover.y])
        break;
      }
    } else {
      console.log(`ERROR: '${commands[i]}' is not valid.`);
    }
  }
}
//-------------------------------------------------------------//

//--------------BONUS 4 | OBSTACLES----------------//
// function goForward_Obst1(commands){
//   for (let i=0; i<commands.length; i++){
//     //Letters convalidation, otherwise do nothing.
//     let kmd = commands[i];
//     if(kmd === 'f'| kmd === 'b'| kmd ==='l'| kmd ==='r'){
//       switch (commands[i]) {
//         case 'l':
//           console.log(`1st ROV INPUT ${i+1}: ${commands[i]}`);
//           turnLeft(rover);
//           travelLog.push([rover.x, rover.y])
//         break;
//         case 'r':
//           console.log(`1st ROV INPUT ${i+1}: ${commands[i]}`);
//           turnRight(rover);
//           travelLog.push([rover.x, rover.y])
//         break;
//         case 'f':
//           console.log(`1st ROV INPUT ${i+1}: ${commands[i]}`);
//           moveForward(rover);
//           travelLog.push([rover.x, rover.y])
//         break;
//         case 'b':
//           console.log(`1st ROV INPUT ${i+1}: ${commands[i]}`);
//           moveBackward(rover);
//           travelLog.push([rover.x, rover.y])
//         break;
//       }
//     } else {
//       console.log(`ERROR: '${commands[i]}' is not valid.`);
//     }
//   }
// }
// let posObst1 = 'f';
// let posObst2 = '';
// let posObst3 = '';

// goForward_Obst1(posObst1);
// goForward_Obst2(posObst2);
// goForward_Obst3(posObst3);

//------------------------------------------------------------//


//--------------BONUS 4 | ROVERS ----------------//

// let posRov1 = 'rff';
// let posRov2 = '';
// let posRov3 = '';
// goForward(posRov1)
// goForward(posRov2)
// goForward(posRov3)

//------------------------------------------------------------//


//----------------------------LOG------------------------------//
/* Functions to use:
   (arg = refers to object, e.g rover)
    - moveForward(arg); 
    - turnLeft(arg)
    - turnRight(arg)
    - goForward(commands) -> refers to a string of commands:'l'(left),'f'(forward),'r'(right) e.g 'ffrfflfrff'

*/
let movMainRov = 'r'; // movement TEST


console.log(`MAIN ROVER INIT POS \n`, rover, '\n '); // displays the rover initial pos
console.log(`MAIN ROVER COMMANDS:`, movMainRov, '\n '); // Rover position
goForward(movMainRov); // Track movements

// console.log(travelLog); // Track movements if form of array

// console.log(`ROVER(1) \n`, goForward(posObst1), '\n ',) // 1st Obstacle positions
// console.log(`ROVER(2) \n`, goForward(posObst2), '\n ',) // 2nd Obstacle positions
// console.log(`ROVER(3) \n`, goForward(posObst3), '\n ',) // 3rd Obstacle positions

//-------------------------------------------------------------//
//2D Array

// let grid = [];

// for(let i=0; i<rangeY; i++){
//   let tempArr = [];
//   for(let j=0; j<rangeX; j++){
//     tempArr.push(j);
//   }
//   grid.push(tempArr);
// }
// console.log(grid)

//-------------------------------------------------------------//