const whatTimeIsIt = function(){
  const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}`)
  
}
 whatTimeIsIt()
 setInterval( whatTimeIsIt, 1000)