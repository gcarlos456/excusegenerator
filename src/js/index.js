/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
//import '../style/index.scss';

window.onload = function(){
    let pronouns = [
        'My', 'The', 'Their', 'Our'
        ];
    let subjects = [
        'dog',
        'mom',
        'Bob',
        'friend'
        ];
        
    let verbs = [
        'killed',
        'ate',
        'slept on',
        'sold'
        ];
    let endPhrase = [
        'the homework',
        'the leftovers',
        'my keys',
        'the alarm clock'
        ];
    
    //var theExcuse = pronouns[pronounPosition] + " " + subjects[0];
    //excuses.push('My mom is sick');
    function generateExcuse(pronoun, subject, verb, end) {
        let rand1 = Math.floor(Math.random()*4);
        let rand2 = Math.floor(Math.random()*4);
        let rand3 = Math.floor(Math.random()*4);
        let rand4 = Math.floor(Math.random()*4);
        const sentence = pronoun[rand1] + ' ' + subject[rand2] +  ' ' + verb[rand3] +  ' ' + end[rand4];
        return sentence;
    } 
    document.querySelector('#button').onclick = function(){
    document.querySelector('#id1').innerHTML=(generateExcuse(pronouns, subjects, verbs, endPhrase));
    };
};