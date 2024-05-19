#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation";


async function rainbow(arr: string, time: number) {
    let text = chalkAnimation.rainbow(arr);
    await new Promise((resolve) => {
      setTimeout(resolve, time);
    });
    text.stop();
  }
  
  async function radar(arr: string, time: number) {
    let text = chalkAnimation.karaoke(arr);
    await new Promise((resolve) => {
      setTimeout(resolve, time);
    });
    text.stop();
  }


const info = async function (){
    while(true){
        
        const userNam = async() =>{
        let userName = await inquirer.prompt({
            name: "EnterUserName",
            type: "input",
            message: "kindly Enter your name :"

    })
    await rainbow(`Dear ${userName.EnterUserName}, Welcome  in Quiz competion.!!!`, 2000);
}
    
    let AnswerKey = {
        q1: "liaquat Ali khan",
        q2: "Muhammad Ali Jinnah",
        q3: "Indus River",
        q4: "Karachi",
        q5: "Arabian sea",
        q6: "Hafeez jalandhari",
        q7: "Multan",
        q8: "Shahid Afridi",
        q9: "Indus River",
        q10: "Sir Abdur Rashid"
    }
    let totalMarks = 100
    let obtainMarks = 0

    let action = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "Would You like to join in Quiz Competition?",
        choices: ["Start Quiz", "Exit"]
    })
    if(action.action === "Exit"){
        await radar("Thank you for your participation.!!!", 3000);
        process.exit()
    }
    await userNam()
    
    let Quiz = async(question: string,  choice: any, rightAnswer: any) =>{
        const ansWer =await inquirer.prompt({
            name: "ansWer",
            type: "list",
            message: question,
            choices: choice
        })
    
        if (ansWer.ansWer === rightAnswer){
            console.log(chalk.bgGreenBright("\n\tCorrect Answer"));
            obtainMarks += 10
        }
        else{
            console.log(chalk.bgRedBright("\n\tWrong Answer"));
        }
    }
    await radar('\n____________________________________________________________\n', 4000)
        await Quiz("who was the first Prime Minister of Pakistan?", 
        ["Muhammad Ali Jinnah", AnswerKey.q1, "Septain Ali"],AnswerKey.q1 )


        await Quiz("Who was the first Governor Genral of Pakistan?",
        [AnswerKey.q2, "Iman khan", "Liaqat Ali Khan"], AnswerKey.q2 )


        await Quiz("Which is the Largest River in pakistan?",
        ["Jhelum River", "Ravi River", AnswerKey.q3], AnswerKey.q3)
        
        
        await Quiz("Which is the largest city of pakistan?",
        ["Islamabad", "lahore", AnswerKey.q4], AnswerKey.q4)


        await Quiz("Which sea lies to the south of pakistan?",
        [AnswerKey.q5, "miditerranean Sea", "Red sea"], AnswerKey.q5)
        

        await Quiz("Who composed pakistan National anthem",
        ["Muhammad Ali Jinnah", AnswerKey.q6, "Iman khan"], AnswerKey.q6 )


        await Quiz("Name the pakistani city famous for its blue pottery and rich history?",
        ["Islamabad", "lahore", AnswerKey.q7], AnswerKey.q7)
         
        
        await Quiz("Which pakistani cricketer hold record for the fastest century in one day cricket?",
        ["Hassan Farid", AnswerKey.q8, "Rizwan Khan"], AnswerKey.q8)
        

        await Quiz(`Which pakistani river is known as "Sorrow of Sindh"?`,
        [ AnswerKey.q9, "Jhelum River", "Ravi River"], AnswerKey.q9)
        

        await Quiz(`Who was the first Chief Justice of pak?`,
        ["Sir Ahmed Noorani", AnswerKey.q10, "Sir Abdullah"], AnswerKey.q10)


        if (obtainMarks < totalMarks){
            console.log(chalk.bgRedBright("\n\t  Your score is less than 100 , Try to improve again\n\t"));
           console.log(chalk.bgGreenBright(`\n\t  Your Obatain marks is : ${obtainMarks}`))
  
        } else if (obtainMarks === totalMarks){
            console.log(chalk.bold.greenBright("\n\t Congratulations! You've got a 100 out of 100!!!\n\t"));
            
        }
        let retryQuiz = await inquirer.prompt({
          name: "confirm",
          type: "confirm",
          message: "Dear Participant! Do you want to reattempt the Quiz?",
          default: "true"
      });
        if (retryQuiz.confirm === false) {
          await rainbow("\n Thanks for Participating\n", 2000);
          await radar(`\n\t Total Score is ${totalMarks}\t\n`, 2000);
          console.log(chalk.yellowBright(`\t Obtained Score is ${obtainMarks}\t\n`));

}
}
 }

info()