const logIn = document.getElementById("login")


logIn.addEventListener('click', function() {
    const loginarea = document.getElementById('login_area')
    const transaction_area = document.getElementById('transaction_area')
    loginarea.style.display = "none"
    transaction_area.style.display = "block"

})


//again practic
///dipost--- amout

const deposit = document.getElementById('deposit')
deposit.addEventListener('click', function() {
    // const diposit_amontInput = document.getElementById('diposit_amont').value
    // const dipositConvarNumber = parseFloat(diposit_amontInput)
    const diposit_amontInput = getinputData('diposit_amont')

    addspandiposit("dipositblance", diposit_amontInput)
    addspandiposit("currentvalance", diposit_amontInput)
    document.getElementById('diposit_amont').value = ""
})

function addspandiposit(id, dipositConvarNumber) {
    const dipositblance = document.getElementById(id).innerText;
    const dipositblanceConvarNUmber = parseFloat(dipositblance)
    const totaldiposit = dipositConvarNumber + dipositblanceConvarNUmber
    document.getElementById(id).innerText = totaldiposit;
}
///input valur

function getinputData(id) {
    const withdrawamount_input = document.getElementById(id).value;
    const withdrawamountConvar = parseFloat(withdrawamount_input)
    return withdrawamountConvar;
}

///withdrow money
const withdrawbtn = document.getElementById('withdrawbtn')
withdrawbtn.addEventListener('click', function() {
    // const withdrawamount_input = document.getElementById('withdrawamount').value;
    // const withdrawamountConvar = parseFloat(withdrawamount_input)
    const withdrawamountConvar = getinputData('withdrawamount')
    addwithdraw('winthrow', withdrawamountConvar)
})

function addwithdraw(id, withdrawamountConvar) {
    const dipositblance = document.getElementById(id).innerText;
    const dipositblanceConvarNUmber = parseFloat(dipositblance)
    const totaldiposit = withdrawamountConvar + dipositblanceConvarNUmber
    document.getElementById(id).innerText = totaldiposit;
    document.getElementById('withdrawamount').value = ""
}