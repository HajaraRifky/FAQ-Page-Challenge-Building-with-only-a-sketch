var getImagePath = document.getElementsByClassName("showbtn")
var gettext = document.getElementsByClassName("texttoshow")
var pTagContents = document.getElementsByTagName("p")


function showText(num, textid) {

    changeStatus()//function to close ever text other than the one selected

    const textToChange = document.getElementById(textid);
    textToChange.className = "texttoshow";
    console.log(getImagePath[num].src)

    if (getImagePath[num].src === 'https://hajararifky.github.io/FAQ-Page-Challenge-Building-with-only-a-sketch/assets/images/icon-plus.svg
') {
        getImagePath[num].src = "assets/images/icon-minus.svg"
        textToChange.className = "textfromhide";
        pTagContents[num].className = "textfromhide";

    }



}

function changeStatus() {

    for (let index = 0; index < pTagContents.length; index++) {

        if (pTagContents[index].className != "inactive") {

            getImagePath[index].src = "assets/images/icon-plus.svg"
            pTagContents[index].className = "texttoshow";


        }
    }
}


