
var input = [
    ["Xiaomi Redmi 5A", "Smartphone", "1199000"],
    ["Macbook Air", "Laptop","13775000"],
    ["Samsung Galaxy J7", "Smartphone", "3549000"],
    ["DELL XPS 13", "Laptop", "26799000"],
    ["Xiaomi Mi 6", "Smartphone", "5399000"],
    ["LG V30 Plus", "Smartphone", "10499000"]
]

function ubah(input){
    var pusing = new Object();
    
    for(i = 0; i < input.length; i++)
        pusing +='name: ' + input [i] [0] + '\n' +
        'category: ' + input [i] [1] + '\n' +
        'price: Rp' + input [i].slice (2,4).join (' ') + '\n' + '\n'
    

    return pusing;
}

console.log(ubah(input))