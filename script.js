var box = document.getElementsByClassName("box")
for (let i = 0; i < box.length; i++) {
    let bntPlus = box[i].children[4].children[2]
    let prixUnit = box[i].children[2].children[1]
    let totalUnit = box[i].children[3].children[1]
    let num = box[i].children[4].children[1]
    let supp = box[i].children[5].children[1].children[0]
    let like = box[i].children[5].children[0].children[0]
    let qty = parseInt(num.innerText)
    let prixUnitaire = parseInt(prixUnit.innerText)

    bntPlus.addEventListener("click", function () {
        qty++;
        num.innerText = qty
        totalUnit.innerText = qty * prixUnitaire
        somme();
    })
    let bntMoins = box[i].children[4].children[0]
    bntMoins.addEventListener("click", function () {
        qty--;
        if (qty < 1) {
            qty = 0;
        }
        num.innerText = qty
        totalUnit.innerText = qty * prixUnitaire
        somme();
    })


    like.addEventListener('click', function () {
        if (like.style.color == "red") {
            like.style.color = "black"
        }
        else {
            like.style.color = "red"
        }
    })

    let supprr = box[i]
    if (supprr) {
        supp.addEventListener("click", function () {
            supprr.remove();

        })
    }
}
let tota1 = document.getElementById('tyu')
function somme() {
    let sum = 0;
    let total = document.getElementsByClassName("price")
    for (let index = 0; index < total.length; index++) {
        let totalUnit = parseInt(total[index].innerText)
        sum = sum + totalUnit
    }
    tota1.innerText=sum
}