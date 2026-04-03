// 1
function solution(number){
  let sum = 0
  for(let i = 1; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}

// 2
function persistence(num) {
  if(num < 10) return 0
  num = num.toString()
  let count = 0
  while(num.length > 1){
    let total = 1
    for(let i of num){
      total *= Number(i)
    }
    num = total.toString()
    count ++
  }
  return count
}

// 3
function digitalRoot(n) {
  if(n < 10) return n;
  n = n.toString()
  let total = 0;
  for(let i = 0; i < n.length; i ++){
    total += Number(n[i])
  }
  return digitalRoot(total)
}

// 4
function toUnderscore(string) {
  let result = string[0].toLowerCase()
  string = String(string)
  
  for(let i of string.slice(1)){
    if (i === i.toUpperCase() && i !== i.toLowerCase()){
      result += "_" + i.toLowerCase()
    }else{
      result += i
    }
  }
  return result
}