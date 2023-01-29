// function makeStringFromArray(array, delimiter) {
//     let string = ""; 
//     join = array.join(delimiter);
//     string = join;
//     return string;
// }



function slugify(title) {
    let slug = title.toLowerCase().split(" ").join("-");
    return slug;
}