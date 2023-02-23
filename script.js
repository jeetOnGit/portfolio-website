// function soem (age){
//   if (age >= 18) {
//     console.log("You are an adult")
//   } 
//   el/se {
//     console.log("You are an Bachha")
//   }
// }

// soem(10)



// let name = "GOB";
// let splName = name.split("")
// let revName = splName.reverse('').join("")

// console.log(name,revName)

// if (name == revName) {
//   console.log("This is a palindrome");
// }
//  else {
//   console.log("This is not");
// }





function arr(number) {
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
    sum = sum + number[index]
  }
 console.log(sum)
}


function isAdult(ages){
  let arr = []
  for (let index = 0; index < ages.length; index++) {
   let age = ages[index]
    if (age >= 18) {
      arr.push("adult")
    } else {
      arr.push("teeanger")
      
    }
  }

  console.log(arr)
}

isAdult([12,59,41,25,12,11,14])




// [12,59,41,25,12,11,14];