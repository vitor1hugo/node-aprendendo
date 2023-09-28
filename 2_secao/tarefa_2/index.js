import chalk  from 'chalk'
import { error } from 'console'
import inquirer from 'inquirer'

inquirer
    .prompt([
        {
            name:'p1',
            message:'Qual o seu nome?',
        },
        {
            name:'p2',
            message:'Qual sua idade?'
        },
    ])
    .then((answers) =>{
        
        if(!answers.p1 || !answers.p2){
            throw new Error('o nome e a idade são obrifatorios!')
        }
        console.log(answers)
        console.log(chalk.bgYellow(`Seu nome é ${answers.p1} e sua idade é ${answers.p2} anos`))
    })
    .catch((err) => console.log(err))