const whatTimeIsIt = function(){
  const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}`)
  
}
 whatTimeIsIt()
 set interval( whatTimeIsIt, 1000)