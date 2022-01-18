const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+'_'+today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";

report.generate({
	jsonDir: 'cypress/cucumber-json/',
	reportPath: "cypress/reports/Web",
	metadata:{
        device: 'Máquina Local',
        platform: {
            name: 'Windows',
            version: '10'
        },
        browser: {
            name: 'Chrome',
        },
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Tomada de Testes', value: 'Pré-Produção'},
            {label: 'Versão', value: '1.4'},
            {label: 'Executado Em', value: date + ' - ' + time},
        ]
    }
});