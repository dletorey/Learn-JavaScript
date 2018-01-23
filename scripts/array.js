/* Longhand array */
var studentName = [];
studentName[0] = "Dave";
studentName[1] = "Dom";
studentName[2] = "Hank";
studentName[3] = "Hamish";
studentName[4] = "Oli";

// document.write(studentName[3]);

var teacherName = ["kate", "nate", "marta", "jack", "mark"];
document.write(teacherName[0]);

var newArray = Array(5);

// teacherName.length();
document.write(teacherName.length);

function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
