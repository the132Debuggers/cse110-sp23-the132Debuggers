# Fortune Telling Application w/ Harry Potter - Hogwarts Houses Theme

## Summary

- We plan to create a fortune telling application that incorporates a Harry Potter theme.
    - Hogwarts Houses: Gryffindor, Slytherin, Ravenclaw, Hufflepuff
- Often the user of fortune telling applications seek fun, adventure, and answers, and a Harry Potter fortune-telling application can provide a user that exact experience whether they are a fan or simply seek answers that might align with their personality. 

## Overview

- We want to make a fortune-telling app that centers around a  Harry Potter theme
    - Houses can be selected by user or assigned automatically (randomly)
    - The house the user is specified to be will be saved with their account 
- On user input, the the app can output lines with the specific pitch according to the house selected/assigned that tell the fortune of the user 
- According to the Barnum effect, people tend to accept certain information as true, such as character assessments or horoscopes, even when the information is so vague as to be worthless.
- The app will have interactivity with the magical hat and a cursor will be a wand 
- The app will generate predictions about the user’s future that are in line with their Hogwarts house. 
    - For example, if the user is a Gryffindor (a house known for having people who are brave and noble) the app may predict that they go on some sort of adventure, become a marine--tasks that require bravery or being noble.
- A guided user settings to be able to select application features
    - Language 
    - character background reaction voice based on the house that they select 
        - e.g. if a user selects Slytherin, Professor Snake will be in the background after an answer is generated shouting, “Well, it may have escaped your notice, but life isn’t fair.” 
    - volume background music 
- The apps list of answers will be targeted towards  yes and no questions; 
- Users will receive consistent result if they have same input

## Solution

- Harry Potter has a very large fan-base that would appreciate a product that makes them more immersed in the wizarding world
- This product will provide them with with their future fortunes based on the wizard house they belong to
- Will allow those that do not know what Hogwarts house they belong to, to find out with our product

## Potential Problems and Avoided Areas 

- Each Hogwarts house is unique in that whatever house you are in basically reflects an individual's personality, so having to figure out how unique one’s fortune needs to be for each house. (Will it be unique?) 
- Just like Hogwarts, we want the experience to be magical and could use powerful frameworks to help, however, we must be cautious to not throw everything in the pot unless it is a necessity and we understand the risks. 
- Users may expect the result that they want the app to output, while the output is probabilistic; this may lead to bad reviews on user experience 
- People could input the incorrect house and get predictions unrelated to their true personality

## Plan and Archetecture

### Timeline

- Week 5		
    - Complete Pitch and basic planning items
- Week 6
    - Receive approval from TA
        - Apply feedback and solidify goals
    - Create sketches for frontend designs
- Week 7 
    - Begin Implementation 
    - Ask TA for recommendations and other thoughts
- Week 8
    - Code, test, ask TA for review
- Week 9
    - Code, test, ask TA for review
- Week 10
    - Code, test, ask TA for review
    - Finalize application
    - Create presentation
- Finals Week
    - Present + Final Interviews 

## Targer User

- Harry Potter obsessed fans that want their fortunes read to them.
- Random people who want a fortune-telling app other than the traditional magic 8 ball

## Sketches (Wireframes)

- Can just be ideas for multiple screens and contents within?
    - Screen 1 (General Main menu): pick what house you are in, change settings (language, music volume, screen brightness, contact info)
    - Screen 2, 3, 4, 5 (Houses): Different themes, background music, where the fortune will be told, each will have same structure, escape button for pop-up (could see settings menu again), back button to return to main menu

## Roadmap

1. The app should first has the “backend”:
    - It can take any input and generate a stable randomized output
        - Stable: on the same input, the output should be the same (e.g. a hash function)
        - Randomized: on different input, it is good to have the output different, but not necessarily
    - It can assign a house to a username stably randomly
    - It should have collections of pre-defined sentences that tell the fortune of user in vague languages
    - It has the ability to synthesize (Text-to-Speech) the output text
2. The app should have functional “frontend”
    - It can read the input on the page and pass it to “backend” for random sentence generation
    - It can display the returned output from the “backend”
    - It can play the synthesized voice reading the generated text
3. The app can be configurable
    - For different house, the voice of the “principal” to that house will be synthesized
    - The “frontend” can have the ability to store the user’s house preference for reuse
4. The app should be tested
    - Test codes during the coding process
    - When the app is finished, ask random people to try and give feedbacks
