// modulos exeternos
const inquirer = require ("inquirer")
const chalk = require("chalk")

// modulos internos
const fs = require("fs")

operation()

function operation() {

    inquirer.prompt([
        {
        type:'list',
        name:'action',
        menssage:'O que você deseja fazer?',
        choices:[
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
            ],
        },
    ]).then((answer) => {

        const action =answer['action']

        if (action === 'Criar Conta') {
            createAccount()
        }

    })
    .catch((err) => console.log(err))
}

//create an account
function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}