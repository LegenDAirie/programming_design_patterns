var QUACK_PROTOTYPE = {
  quack: function() {
    console.log("quack!")
  }
}

var Quack = {
  create: function() {
    var quack = Object.create(QUACK_PROTOTYPE)

    return quack
  }
}

////////////////////////////////////////////////////////////////////////
var SQUEEK_PROTOTYPE = {
  quack: function() {
    console.log("SQueeeeeeeeeeeeekkkk!")
  }
}

var Squeek = {
  create: function() {
    var squeek = Object.create(SQUEEK_PROTOTYPE)

    return squeek
  }
}

///////////////////////////////////////////////////////////////////////
var MUTEQUACK_PROTOTYPE = {
  quack: function() {
    console.log("........")
  }
}

var MuteQuack = {
  create: function() {
    var muteQuack = Object.create(MUTEQUACK_PROTOTYPE)

    return muteQuack
  }
}
