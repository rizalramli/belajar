"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Unknown"] = -1] = "Unknown";
})(Gender || (Gender = {}));
;
let JenisKelamin = Gender.Male;
console.log(JenisKelamin);
