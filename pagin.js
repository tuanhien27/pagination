// phân trang

var arrTotal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function beforePagin() {
    console.log('mảng nhập vào:' + arrTotal);
    var pagination = Math.ceil((arrTotal.length)/5); 
    //console.log(pagination); //  
    
    var arrShow = [];
    for (let i = 1; i <= pagination; i++) {
        arrShow.push(i);
    }
    console.log('mảng các pagination: ' + arrShow); 
    
    var addButton = arrShow.map(function(value){
        return `
        <button class="button-total" onclick="showPage(${value})">${value}</button> 
        `
      // khác bọt là chỗ chèn thẳng ${value} vào làm tham số dạng template string
    })
    //console.log(addButton); // ra được 2 button trong mảng
    var listPage = document.getElementById('list-page');
    listPage.innerHTML = addButton.join(''); // dc 3 button, do thành 1 string

}

beforePagin(); // tạo button tương ứng với số pagination


function showPage(val) { //show các page khi click vào button tương ứng
    console.log(`đây là pagination thứ: ${val}`); //1,2,3
   
    for (let indeX = 1; indeX <= arrTotal.length; indeX++) {
        if (((indeX < (val * 5)) && (indeX > (val - 1)*5)) && (indeX % 5 == 1) ) {
            console.log(`indeX là:${indeX}`); //1
            var arrFinish = arrTotal.slice(indeX-1,indeX+4); 
            console.log('các trang là: ' + arrFinish); // tìm dc các phần tử trong mảng khi log 1,2,3,4,5 //6
            
            arrFinish.forEach(function(v) {
                console.log('giá trị là '+v);
                let detail = document.querySelector('#page-detail'); // đây là bố, vật bám
                let btn = document.createElement('button'); // đây là con, gắn element cho con, tương tác vs thèn con
                btn.setAttribute("class", "button-child"); // class là button-child
                
                console.log(btn);
                btn.innerHTML = `
                <a>${v}</a>
                `
                detail.appendChild(btn); // con bám vào bố => ok
            })
            

        }

    let btnHidden = document.querySelector('.hidden');
    btnHidden.style.display = "block";
    }

    pageOf(); 
}

function pageOf() {
    console.log('chào cả nhà');
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




 




