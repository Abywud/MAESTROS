1) index.js
       scuberGreetingForFeet()
         gives customers a free sample if the ride is less than or equal to 400 feet:
     ReferenceError: module is not defined
      at scuberGreetingForFeet (about:blank:17:3)
      at Context.<anonymous> (test/indexTest.js:6:14)

  2) index.js
       scuberGreetingForFeet()
         charges 20 dollars for a distance between 400 and 2000 feet:
     ReferenceError: module is not defined
      at scuberGreetingForFeet (about:blank:17:3)
      at Context.<anonymous> (test/indexTest.js:10:14)

  3) index.js
       scuberGreetingForFeet()
         charges 30 dollars for a distance over 2000 feet:
     ReferenceError: module is not defined
      at scuberGreetingForFeet (about:blank:17:3)
      at Context.<anonymous> (test/indexTest.js:14:14)

  4) index.js
       scuberGreetingForFeet()
         does not allow rides over 2500 feet:
     ReferenceError: module is not defined
      at scuberGreetingForFeet (about:blank:17:3)
      at Context.<anonymous> (test/indexTest.js:18:14)

  5) index.js
       ternaryCheckCity()
         returns "Ok, sounds good." when the city is NYC:
     AssertionError: expected undefined to equal 'Ok, sounds good.'
      at Context.<anonymous> (test/indexTest.js:24:42)
      at process.processImmediate (node:internal/timers:491:21)

  6) index.js
       ternaryCheckCity()
         should return "No go." if the destination city is not NYC:
     AssertionError: expected undefined to equal 'No go.'
      at Context.<anonymous> (test/indexTest.js:28:49)
      at process.processImmediate (node:internal/timers:491:21)

  7) index.js
       switchOnCharmFromTip()
         should return "Thank you so much." if the tip is generous:
     AssertionError: expected undefined to equal 'Thank you so much.'
      at Context.<anonymous> (test/indexTest.js:34:51)
      at process.processImmediate (node:internal/timers:491:21)

  8) index.js
       switchOnCharmFromTip()
         should return "Thank you." if the tip is not as generous:
     AssertionError: expected undefined to equal 'Thank you.'
      at Context.<anonymous> (test/indexTest.js:38:58)
      at process.processImmediate (node:internal/timers:491:21)

  9) index.js
       switchOnCharmFromTip()
         should return "Bye." if anything else:
     AssertionError: expected undefined to equal 'Bye.'
      at Context.<anonymous> (test/indexTest.js:42:64)
      at process.processImmediate (node:internal/timers:491:21)
