function prime(num){
    for(let i = 2 ; i < num ; i++){
        let flag = false;
        if(num % i === 0){
            flag = true;
            return false;
        }
        if(!flag){
            return true;
        }
    }
    return true
} 
function add(a , b){
    return a+b;
}
module.exports.prime = prime;
module.exports.add = add;