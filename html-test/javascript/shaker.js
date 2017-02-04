String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};

function shake() {
  var input = $("#text_input").val();
  var words = input.split(" ");
  
  words.forEach(function (word, index) {
    if (word.length > 1)
      words[index] = shakeWord(word);
  });
  
  $("#text_output").text(words.join(" "));
}

function shakeWord(word) {
  var output = "";
  
  output += word.charAt(0);
  
  var middle = word.substring(1, word.length - 1);
  
  output += middle.shuffle();
  
  output += word.charAt(word.length - 1);
  
  return output;
}

