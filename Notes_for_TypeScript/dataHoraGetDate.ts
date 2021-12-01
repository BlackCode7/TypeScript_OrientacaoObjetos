//O método getDate() retorna o dia do mês da data especificada de acordo com a hora local.
function dataHora(){
    //return date complet
    let day = new Date();
    console.log(day)
}
dataHora()

function data() {
    let date = new Date();
    let DayWeek = date.getDay()
    // This possible make operational mathematic in days week
    console.log(` Days Of the week `,DayWeek)
    console.log(` Days Of the week add 1 number -> `,DayWeek + 1)
}
data()

console.log(dataHora(), data())

    // let dayTest = new Date()
    // console.log(dayTest)
    //let dayDia = day.getDate();
    // accept data in format string    
    //let dayTestDia = dayTest.getDate();
    // Nothing result
    //let resultDates = dayDia - dayTestDia    
    // console.log(resultDates);
    // console.log(dayTest);
    // console.log(day);    
    // if (day == dayTest) {       
    //     return `${day} ---> ${dayTest}`;
    // }
    // return false;