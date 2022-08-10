export const sum = (a,b) => {

    if(!a || !b){
        return 'The input is incorrect!';
    }
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Only number are allowed';
    }
    
    return a + b;
};