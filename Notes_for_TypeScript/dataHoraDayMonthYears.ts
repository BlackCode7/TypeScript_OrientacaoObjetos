function dayMonthYears(){
    let allDate = new Date()
    let day = allDate.getDate()     
    let dayWeek = allDate.getDay()
    let dayMonth = allDate.getMonth()
    let years = allDate.getFullYear()    

    console.log(day, dayWeek, dayMonth, years)
}
dayMonthYears()

function yearsAdd(day: number, dayWeek: number, dayMonth: number, yearsAdd: any) {
    throw new Error("Function not implemented.")
}
