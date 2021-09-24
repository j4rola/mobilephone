function mobileKeyboard(str){

	let empty = []
  
  let spread = [...str]
  
  // for one button press
  
  let index = ['1', '2','3','4','5','6','7','8','9','0', '*', '#']
  
   let result = spread.filter(x => index.indexOf(x) > -1)
   
   empty.push(result.length)
   
   //for two button presses
   
   let index2 = [ 'a', 'd', 'g', 'j', 'm', 'p', 't', 'w', '+']  
   
   let result2 = spread.filter(x => index2.indexOf(x) > -1)
   
   empty.push(result2.length * 2)
  
   //for three button presses 
   
   let index3 = ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x']
   
   let result3 = spread.filter(x => index3.indexOf(x) > -1)
   
   empty.push(result3.length * 3)
   
   //for four button presses 
   
   let index4 = ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y']
   
   let result4 = spread.filter(x => index4.indexOf(x) > -1)
   
   empty.push(result4.length * 4)
   
   //for five button presses 
   
   let index5 = ['s', 'z']
   
   let result5 = spread.filter(x => index5.indexOf(x) > -1)
   
   empty.push(result5.length * 5)
   
   let final = empty.reduce((acc, cur) => (acc + cur)) 
   
   return final
}