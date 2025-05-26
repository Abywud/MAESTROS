const whatTimeIsIt = function(){
  const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}`)
  
}
 whatTimeIsIt()
 setinterval( whatTimeIsIt, 1000)