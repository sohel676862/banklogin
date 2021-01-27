const logIn = document.getElementById("login")


logIn.addEventListener('click', function() {
    const loginarea = document.getElementById('login_area')
    const transaction_area = document.getElementById('transaction_area')
    loginarea.style.display = "none"
    transaction_area.style.display = "block"

})

//log in button venent hangler

const diposit_amont = document.getElementById('diposit_amont').value;

console.log(diposit_amont)
    ///deposit button




deposit.addEventListener('click', function() {
    const diposit_amont = document.getElementById('diposit_amont').value;
    const diposit_numer = parseFloat(diposit_amont)
    if (diposit_numer != NaN) {
        upadate("withdawMoney", diposit_numer)

    }

    console.log(diposit_numer)
    const currentDiposit = document.getElementById('currentDipost').innerText;


    const currentDipositNumber = parseFloat(currentDiposit)
    const totalDeposite = diposit_numer + currentDipositNumber
    document.getElementById('currentDipost').innerText = totalDeposite;
    // currentDiposit = totalDeposite;


    function upadate(id, diposit_numer) {
        const withdawMoney = document.getElementById(id).innerText;
        const withDawMoneynumber = parseFloat(withdawMoney)
        const totalwithdawmoney = withDawMoneynumber + diposit_numer
        document.getElementById('withdawMoney').innerText = totalwithdawmoney

    }

    document.getElementById('diposit_amont').value = ""



})