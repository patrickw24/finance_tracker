const incomeModal= ()=>{
    let incomeM= new bootstrap.Modal(document.getElementById("incomeModal"))

    incomeM.show()
}

const expenseModal= ()=>{

    let expenseM= new bootstrap.Modal(document.getElementById("expenseModal"))

    expenseM.show()
}


const showIncome= ()=>{

    let type = transType.value

    if(type === "Income"){
        divAmount.style.display= "block"
        divIncome.style.display= "block"
        divExpenses.style.display= "none"
    }else if(type === "Expenses"){
        divAmount.style.display= "block"
        divExpenses.style.display= "block"
        divIncome.style.display= "none"
    }

    if(type === ""){
        divExpenses.style.display= "none"
        divIncome.style.display= "none"
    divAmount.style.display= "none"
    }

}

const saveUser = ()=>{

    event.preventDefault()
    let user = inputUser.value
    window.localStorage.setItem('username', user)
}

const getUser = ()=>{

    
    let user = window.localStorage.getItemItem('username', user)
    setUser.innerHTML= user
}

