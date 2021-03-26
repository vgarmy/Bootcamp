function getMaths() {
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
    var totalMarks = 400;
    var MakrksObtained = maths + physics + chemistry + english;
    var percentage = MakrksObtained / totalMarks * 100;

    document.getElementById("procentage").innerHTML = percentage + " %";

    if (percentage > 90) {
        grade = "A+";
    } else if (percentage < 90 && percentage > 80) {
        grade = "A";
    } else if (percentage < 80 && percentage > 60) {
        grade = "B";
    } else if (percentage < 60) {
        grade = "F";
    }

    document.getElementById("grade").innerHTML = grade;
    if (percentage < 60) {
        document.getElementById("pass").innerHTML = "Sorry! You shall not pass!!!";
    } else {
        document.getElementById("pass").innerHTML = "You shall pass!!!";
    }

}