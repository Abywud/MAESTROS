const whatTimeIsIt = function(){
  const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}`)
  
}
 whatTimeIsIt()
 set timeout( whatTimeIsIt, 1000)