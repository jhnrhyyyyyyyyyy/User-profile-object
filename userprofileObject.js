function object(){
  let userProfile = {
    fullName: prompt("Enter your full name:"),
    age: parseInt(prompt("Enter your age:")),
    favoriteNumber: parseInt(prompt("Enter your favorite number:")),
    favoriteColors: []
  };
  //for colors
  for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color ${i + 1}:`);
    userProfile.favoriteColors.push(color);
  }
  alert(userProfile);
}
