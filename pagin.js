// phân trang

var arrTotal = [1,2,3,4,5,6,7];

var pagination = Math.ceil((arrTotal.length)/5); 
console.log(pagination); //  pagination = 2

var arrShow = [];

for (let i = 1; i <= pagination; i++) {
    arrShow.push(i);
}
console.log(arrShow); //[1,2]

var addButton = arrShow.map(function(value){
    return `
    <button onclick="showPage(${value})">${value}</button> 
    `
  // khác bọt là chỗ chèn thẳng ${value} vào làm tham số dạng template string
})
//console.log(addButton); // ra được 2 button trong mảng

var listPage = document.getElementById('list-page');
listPage.innerHTML = addButton.join(''); // dc 3 button, do thành 1 string
//ok



function showPage(val) {
    console.log(`đây là page thứ: ${val}`); //1,2
    for (let indeX = 1; indeX < arrTotal.length; indeX++) {
        if (((indeX < (val * 5)) && (indeX > (val - 1)*5)) && (indeX % 5 == 1) ) {
            console.log(`indeX là:${indeX}`);
            var arrFinish = arrTotal.slice(indeX-1,indeX+4);
            console.log('kết quả là: ' + arrFinish);
        }
    }
}




//---------------------------------
// a dev
// let a = [1,2,3,4,5,6,7];
// function showButton(arr) {
//   let count = Math.ceil(arr.length / 3);
//    let parent = document.querySelector('#a');          
//   for(let i = 1; i <= count; i++ ) {
//     let b = document.createElement('button');
//     b.innerHTML = `
//   <a onclick="paginate(${i})">${i}</a>
// `;
//     parent.appendChild(b);
//   }
// }
// function paginate(number) {
//     console.log(number);
//   }
// showButton(a);




 




