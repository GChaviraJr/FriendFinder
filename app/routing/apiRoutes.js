const friends = require("../data/friends.js")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) { 
    let newFriend = req.body
    let currentClosestFriend = ''

    for (i of friends) {
        for (j of friends[i].scores) {
            let currentDiff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[i]))
            totalDiff += currentDiff
            if (currentClosestFriend === '') {
              currentClosestFriend = friends[i];            
              currentClosestDistance = totalDifference;
              console.log(currentClosestDistance, currentClosestFriend)
              totalDifference = 0;
          } else if (totalDifference < currentClosestDistance) {
              currentClosestFriend = friends[i];
              currentClosestDistance = totalDifference;
              console.log(currentClosestDistance, currentClosestFriend)
              totalDifference = 0;    
              }            
        }
    
      
    }
    friends.push(newFriend)
    res.json(currentClosestFriend)
  })
}
