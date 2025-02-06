let str = "Hello world....$#/";
let symbls = "./#$";
for (const element of symbls) {
    str = str.split(element).join("")
    console.log(str)
}