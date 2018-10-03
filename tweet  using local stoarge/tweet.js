const tweet = document.querySelector("#tweet");
const TweetBtn = document.querySelector("#tweetBtn")
let tweets = document.querySelector(".tweets")
let display = document.querySelector(".display")



TweetBtn.addEventListener("click",()=>{
    displayTweets()
    tweet.value="";

});

function displayTweets(){
   const li =  document.createElement("li");
   li.textContent =  tweet.value
    
   
   tweets.appendChild(li)
}

const localStorageData =  localStorage.setItem("tweets",JSON.stringify(tweet.value))

