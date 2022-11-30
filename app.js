const express = require('express');
const bodyParser = require('body-parser');
const levels = require('./keywords');

const app = express();
const allLevels = levels.levels;
const keywords = levels.keywords;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");


function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

function check_k5(wordArray) {
    return wordArray.some((item) => allLevels.k5_level.includes(item)) && wordArray.some((item) => keywords.includes(item)) ;
}


app.get("/", function(req, res){
    res.render("home", {questionString: "", resultString: ""});
})

app.post("/", function(req, res){

    var question = (req.body.question).replace(/^\s*[\r\n]/gm, '');
    question = question.replace(/[^a-zA-Z ]/g, "");
    let allWords = question.split(" ");
    console.log(allWords);
    console.log(keywords);

    let levelAt = ""; 

    allWords.forEach((word, index, allWords) => {
        word = titleCase(word);
        console.log(word);
        if (word.length > 2){
            if(allLevels.k1_level.includes(word)){
                levelAt = "K1";
                allWords.length = index+1;
            }
            else if(allLevels.k2_level.includes(word)){
                if (check_k5(allWords)){
                    levelAt = "K5";
                }
                else{
                    levelAt = "K2";
                }
                allWords.length = index+1;
            }
            else if(allLevels.k3_level.includes(word)){
                levelAt = "K3";
                allWords.length = index+1;
            }
            else if(allLevels.k4_level.includes(word)){
                levelAt = "K4";
                allWords.length = index+1;
            }
            else if(allLevels.k5_level.includes(word)){
                levelAt = "K5";
                allWords.length = index+1;
            }
            else if(allLevels.k6_level.includes(word)){
                levelAt = "K6";
                allWords.length = index+1;
            }
            else if(word.toLowerCase() === allWords.at(-1)){
                levelAt = "NO";
                allWords.length = index+1;
            }
        }
    });
    let questionString = (req.body.question) ; 
    let levelString ="It belongs to \" "+levelAt+" level. \" ";
    res.render("home", {questionString: questionString,resultString: levelString});
})

app.listen(3000)