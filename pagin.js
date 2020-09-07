var arrTotal = [1,2,3,4,5,6,7,8,9,10,11,12,13,147,8,9,10,11,12,13,14];

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
showPage(1); // load trang là show luôn button đầu tiên

function showPage(val) { //show các page khi click vào button tương ứng
    console.log(`đây là pagination thứ: ${val}`); //1,2,3,4,5
   
    for (let indeX = 1; indeX <= arrTotal.length; indeX++) {
        if (((indeX < (val * 5)) && (indeX > (val - 1)*5)) && (indeX % 5 == 1) ) {
            console.log(`indeX là:${indeX}`); //1
            var arrFinish = arrTotal.slice(indeX-1,indeX+4); 
            console.log('các trang là: ' + arrFinish); // tìm dc các phần tử trong mảng khi log 1,2,3,4,5 //6
            
            let detail = document.querySelector('#page-detail'); // đây là bố, vật bám
            let elm = document.createElement('div');
            let inner = document.querySelector('.inner');
            //console.log(inner);
            elm.setAttribute('class', 'inner');
            arrFinish.forEach(function(v) {
                console.log('giá trị là '+v);
                let btn = document.createElement('button'); // đây là con, gắn element cho con, tương tác vs thèn con
                btn.setAttribute("class", "button-child"); // class là button-child
                //console.log(btn);
                btn.innerHTML = `
                <a>${v}</a>
                `
                elm.appendChild(btn); // btn bám vào elm => ok
            })

            detail.replaceChild(elm, inner);

        }

    let btnHidden = document.querySelector('.hidden');
    btnHidden.style.display = "block";
    }
    
    var allBtn = document.querySelectorAll('.button-total'); //5
    //console.log(allBtn);
    //if (val >)
    for (let j = 0; j < allBtn.length; j++) {
        allBtn[j].style.backgroundColor = "white";
    }
    allBtn[val-1].style.backgroundColor = "yellow";

}

//-------------- nut next va previous ----------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex +=n);
}

function showSlides(n) {
    var slides = document.querySelectorAll('.button-total'); //5
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.backgroundColor = "white";
    }
    if (n > slides.length) { 
        slideIndex = 1;
        showPage(1);
        slides[0].style.backgroundColor = "yellow";
    };
    if (n < 1 ) {
        slideIndex= slides.length;
        showPage(5);
        slides[4].style.backgroundColor = "yellow";
    };
    
    if (n >= 1 && n <= slides.length) {
        slides[n - 1].style.backgroundColor = "yellow";
        showPage(n);
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




 




