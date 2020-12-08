var quotesAll = [
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "― Marilyn Monroe",
    likes: 0,
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
    likes: 0,
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
    likes: 0,
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    likes: 0,
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "― Bernard M. Baruch",
    likes: 0,
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
    likes: 0,
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "― William W. Purkey",
    likes: 0,
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "― Dr. Seuss",
    likes: 0,
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
    likes: 0,
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi",
    likes: 0,
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost",
    likes: 0,
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    likes: 0,
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow don’t walk behind me… I may not lead walk beside me… just be my friend",
    author: "― Albert Camus",
    likes: 0,
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "― Eleanor Roosevelt, This is My Story",
    likes: 0,
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    author: "― Mark Twain",
    likes: 0,
  },
  {
    quote:
      'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself...".',
    author: "― C.S. Lewis, The Four Loves",
    likes: 0,
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "― Maya Angelou",
    likes: 0,
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "― Elbert Hubbard",
    likes: 0,
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "― Oscar Wilde",
    likes: 0,
  },
];

$("#generate").click(function () {
  $("#copy").removeClass("copied");
  $("#copy").html('<i class="fa fa-copy"></i> Copy to Cilpboard');
  $("#container").css("display", "block");
  $("#copy").css("display", "block");
  $("p").text(generateQuote().first);
  $("span").text(generateQuote().second);
  $("#copy").click(function () {
    $(this).addClass("copied");
    $("#copy").html('<i class="fa fa-check"></i> Copied');
    copyToClipboard();
  });
});

function generateQuote() {
  var random = Math.floor(Math.random() * quotesAll.length);
  var randomQuote = quotesAll[random].quote;
  var quoteAuthor = quotesAll[random].author;
  return {
    first: randomQuote,
    second: quoteAuthor,
  };
}

function copyToClipboard() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("p").text()).select();
  document.execCommand("copy");
  $temp.remove();
}
