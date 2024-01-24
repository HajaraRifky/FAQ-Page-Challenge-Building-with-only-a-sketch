var getImagePath = document.getElementsByClassName("showbtn")
var pTagContents = document.getElementsByTagName("p")

function showText(sectionNum, textid) {

    changeStatus()//function to close ever text other than the one selected

    const textToChange = document.getElementById(textid);
    textToChange.className = "texttoshow";
    console.log(getImagePath[sectionNum].src)

    if (getImagePath[sectionNum].src === "https://hajararifky.github.io/FAQ-Page-Challenge-Building-with-only-a-sketch/assets/images/icon-plus.svg"){
        getImagePath[sectionNum].src = "assets/images/icon-minus.svg"
        textToChange.className = "textfromhide";
        pTagContents[sectionNum].className = "textfromhide";

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


