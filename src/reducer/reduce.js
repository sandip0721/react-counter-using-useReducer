 export const counterReducer = (counter,action)=>{
  switch(action){
    case 'increment':{
      return counter  +1;
    }
    case 'decrement':{
      return counter -10;
    }
    case 'reset':{
      return 0;
    } 
    default :{
      return counter;
    }
  }
}