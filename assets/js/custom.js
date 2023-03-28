"use strict";
const plusBtns = document.querySelectorAll(".plus_btn");
const minusBtns = document.querySelectorAll(".minus_btn");
for (var i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", function () {
    var inbox = this.closest('.card-subtitle').querySelector('.form-control')
    var inputVal = this.closest('.card-subtitle').querySelector('.form-control').value;
    var inputVal = Number(inputVal);
    inputVal++;
    inbox.value = inputVal;
    console.log(inputVal);
  });
}
for (var i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener("click", function () {
    var inbox = this.closest('.card-subtitle').querySelector('.form-control')
    var inputVal = this.closest('.card-subtitle').querySelector('.form-control').value;

    if (inputVal > 0) {
      var inputVal = Number(inputVal);
      inputVal--;
      inbox.value = inputVal;
      console.log(inputVal);
    }
  });
}

var persons = [
  {
    firstName: "John",
    lastName: "Walker",
    age: 51,
    imgSrc: "assets/images/jewelry_img_1.jpg",
    eyeColor: "Blue",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "Vaibhavi",
    lastName: "Ashish",
    age: 26,
    imgSrc: "assets/images/jewelry_img_1.jpg",
    eyeColor: "Brown",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "Warhan",
    lastName: "Doelos",
    age: 52,
    imgSrc: "assets/images/jewelry_img_2.jpg",
    eyeColor: "Green",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "Loob",
    lastName: "Morgen",
    age: 53,
    imgSrc: "assets/images/jewelry_img_3.jpg",
    eyeColor: "Red",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "Mark",
    lastName: "Spector",
    age: 54,
    imgSrc: "assets/images/jewelry_img_4.png",
    eyeColor: "Gray",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "Steawen",
    lastName: "Woltman",
    age: 55,
    imgSrc: "assets/images/jewelry_img_2.jpg",
    eyeColor: "Light Blue",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "You",
    lastName: "Me",
    age: 55,
    imgSrc: "assets/images/jewelry_img_5.png",
    eyeColor: "Dark Blue",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "You",
    lastName: "Me",
    age: 55,
    imgSrc: "assets/images/jewelry_img_5.png",
    eyeColor: "Blue",
    fullName: () => { return this.firstName + " " + this.lastName }
  },
  {
    firstName: "You",
    lastName: "Me",
    age: 55,
    imgSrc: "assets/images/jewelry_img_5.png",
    eyeColor: "Light Red",
    fullName: () => { return this.firstName + " " + this.lastName }
  }
];

// console.log(persons[0].fullName());
// console.log(persons.length);

let objName = persons;
// console.log(objName);

for (let x = 0; x < objName.length; x++) {
  const thiss = objName;
  // console.log(thiss[x]);
  const classs = document.querySelector('.dynamic');
  const tag1 = document.createElement("p");
  const tag2 = document.createElement("p");
  const tag3 = document.createElement("p");
  const tag4 = document.createElement("p");
  const div = document.createElement("div");
  const nodediv = document.createElement("div");
  const nodediv2 = document.createElement("div");
  const img = document.createElement("img");
  const fName = document.createTextNode('First-Name:- ' + thiss[x].firstName);
  const lName = document.createTextNode('Last-Name:- ' + thiss[x].lastName);
  const age = document.createTextNode('age:- ' + thiss[x].age);
  const eyeColor = document.createTextNode('Eye-Color:- ' + thiss[x].eyeColor);

  nodediv.append(div);
  nodediv2.append(div);
  tag1.append(fName);
  tag2.append(lName);
  tag3.append(age);
  tag4.append(eyeColor);

  classs.appendChild(div).classList.add('col-md-4', 'col-lg-3', 'col-lg-3' + x);
  classs.childNodes[x].appendChild(nodediv).classList.add('img_wrapper');
  classs.childNodes[x].appendChild(nodediv2).classList.add('info_text');

  classs.childNodes[x].childNodes[1].appendChild(tag1).classList.add('text');
  classs.childNodes[x].childNodes[1].appendChild(tag2).classList.add('text');
  classs.childNodes[x].childNodes[1].appendChild(tag3).classList.add('text');
  classs.childNodes[x].childNodes[1].appendChild(tag4).classList.add('text');
  classs.childNodes[x].childNodes[0].appendChild(img).classList.add('img-fluid');

  const setAttributes = (el, attrs) => {
    for (var x in attrs) {
      el.setAttribute(x, attrs[x]);
    }
  }
  setAttributes(img, { "src": thiss[x].imgSrc, "style": "height:200px;object-fit:cover;width:100%" });
}


var from = document.getElementById('formPart')
// console.log(from.length);
const fName = document.getElementById('FirstName');
const lName = document.getElementById('lastName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const gender = document.getElementById('gender');

const radi = document.querySelectorAll('#formPart .form-control')
// console.log(radi.length);
for (let s = 0; s < radi.length; s++) {
  radi[s].addEventListener('keyup', () => {

    console.log();

    if (radi[s].type == "date" || String(radi[s].nodeName) == "SELECT") {
      return false
    } else {

      const remClass = radi[s].previousElementSibling.className;
      const n = remClass.split(" ");
      const classNam = n[n.length - 1];
      const placeholder = radi[s].getAttribute('placeholder');
      console.log(classNam);
      document.getElementById(classNam).innerHTML = "<b>" + placeholder + ":- </b>" + radi[s].value;
      if (radi[s].value.length <= 0) {
        document.getElementById(classNam).innerHTML = "<b>" + placeholder + ":- </b>";
      }
    }

  })
}

gender.addEventListener('change', () => {
  const classNam = gender.previousElementSibling.getAttribute('data-id');
  document.getElementById(classNam).innerHTML = "<b> Gender:- </b>" + gender.value;
  if (gender.value.length <= 0) {
    document.getElementById(classNam).innerHTML = "<b> Gender:- </b>";
  }
});



const radioBtn = document.getElementsByName('hobbies');
const checkboxs = document.getElementsByName('hobbies2');
const radioBtnText = document.getElementById('hobbies');
const checkboxText = document.getElementById('hobbies2');

for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener("change", function () {

    // console.log(this);
    var rate_value;
    for (var i = 0; i < radioBtn.length; i++) {
      if (radioBtn[i].checked) {
        rate_value = radioBtn[i].nextElementSibling.innerHTML;
        radioBtnText.innerHTML = rate_value;
      }
    }
  });
}
for (let i = 0; i < checkboxs.length; i++) {
  checkboxs[i].addEventListener("click", function () {
    var checkbox_value = [];
    checkboxText.innerHTML = '';
    for (var checkbox of checkboxs) {
      if (checkbox.checked) {
        checkbox_value = checkbox.nextElementSibling.innerHTML;
        // checkboxText.innerHTML = '';
        checkboxText.append(checkbox_value + ', ');
      };
    };
    console.log(checkbox_value);
  });
};


const dateS = document.getElementById('selectDate')
const dateStore = [];
dateS.addEventListener('change', function () {
  const printDate = document.getElementById('selectDateText')
  const currentDate = this.value;
  const p = document.createElement('span');
  const span = document.createElement('span');
  const a = document.createElement('a');
  const img = document.createElement('img');

  console.log(currentDate);
  if (dateStore.indexOf(currentDate) > -1) {
    console.log('Date is not Here');
  } else {
    console.log('Date is her');
    printDate.appendChild(p);
    dateStore.push(currentDate)
  }

  console.log(dateStore);
  img.setAttribute('src', 'assets/images/close_black.png');
  a.setAttribute('class', 'close_icon');
  img.setAttribute('class', 'img-flud');
  a.setAttribute('href', 'javascript:void(0)');
  span.setAttribute('class', 'date');
  p.setAttribute('class', 'date_box');

  a.appendChild(img);
  span.append(currentDate);
  p.appendChild(span);
  p.appendChild(a);

  // console.log(printDate);
  const closeIcon = document.querySelectorAll('.close_icon')
  for (let e = 0; e < closeIcon.length; e++) {

    closeIcon[e].addEventListener('click', function () {
      this.previousElementSibling.parentNode.remove();
      const posDate = this.previousElementSibling.innerHTML;

      for (let d = 0; d < dateStore.length; d++) {
        if (dateStore[d] === posDate) {
          dateStore.splice(d, 1);
          console.log(dateStore);
        }
      }
    });
  };
});



document.getElementById('filefield').addEventListener('change', function () {

  const file = this.files;
  const dateStore = [];
  const filess = document.getElementById('filefiel');
  const flNumPrint = document.getElementById('selectedFilesNumber');
  flNumPrint.innerHTML = 'Please select files'
  if (file.length > 0) {
    filess.innerHTML = ' ';
    const dateStore = [];
    for (let i = 0; i < file.length; i++) {

      const currentFile = file[i].name;

      const p = document.createElement('span');
      const span = document.createElement('span');
      const a = document.createElement('a');
      const img = document.createElement('img');

      img.setAttribute('src', 'assets/images/close_black.png');
      img.setAttribute('class', 'img-flud');
      a.setAttribute('class', 'close_icon');
      a.setAttribute('href', 'javascript:void(0)');
      span.setAttribute('class', 'file');
      p.setAttribute('class', 'file_wrapper');

      a.appendChild(img);
      span.append(currentFile);
      p.appendChild(span);
      p.appendChild(a);

      // if(dateStore.indexOf(currentDate) > -1){
      //   console.log('Date is not Here');
      // }else{
      //   console.log('Date is her');
      console.log(p);
      filess.appendChild(p);
      dateStore.push(currentFile)
      // }
      const flNumber = dateStore.length
      const flNumPrint = document.getElementById('selectedFilesNumber')
      console.log(flNumber);
      flNumPrint.innerHTML = flNumber + ' Files selected'
      const closeIcon = document.querySelectorAll('.close_icon')
      for (let e = 0; e < closeIcon.length; e++) {

        closeIcon[e].addEventListener('click', function () {
          this.previousElementSibling.parentNode.remove();
          const posDate = this.previousElementSibling.innerHTML;
          console.log(flNumber);
          for (let d = 0; d < dateStore.length; d++) {
            if (dateStore[d] === posDate) {
              dateStore.splice(d, 1);
              console.log(dateStore);
              const flNumber = dateStore.length
              flNumPrint.innerHTML = flNumber + ' Files selected'
              if (flNumber == 0) {
                flNumPrint.innerHTML = 'Please select files';
              }
            }
          }

        });
      };
    }
    console.log(dateStore);
  } else if (file.length == 0) {
    filess.innerHTML = ' ';
    const dateStore = [];
    console.log(dateStore);
    flNumPrint.innerHTML = 'Please select files'
  }

})

const addFieldBtn = document.getElementById('addFieldBtn');
const numFilds = document.getElementById('dynFilds');
const inbox = document.querySelectorAll('.form-group');

addFieldBtn.addEventListener('click', () => {

  const ins = document.createElement('input');
  const lbl = document.createElement('label');
  const div = document.createElement('div');
  div.setAttribute('class', 'form-group')
  div.appendChild(lbl);
  div.appendChild(ins);
  lbl.innerHTML = 'This is label ' + numFilds.length;

  var setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  setAttributes(ins, { "class": "form-control input-box ", "id": "input" + numFilds.length, 'placeholder': "Normal input box " + numFilds.length });

  setAttributes(lbl, { "class": "form-label mt-3", "for": "input" + numFilds.length });

  document.getElementById('dynFilds').appendChild(div)
});




const color = document.getElementById('color');
const range = document.getElementById('range');
color.addEventListener('change', () => {
  console.log();
  document.getElementById('prtType').parentElement.style.backgroundColor = color.value

});
range.addEventListener('input', () => {
  document.getElementById('rangeNumber').innerHTML = range.value + 'px';
});

document.getElementById('rangeNumber').innerHTML = range.value + 'px';
const typBox = document.getElementById('type');
const ClassBox = document.getElementById('className');
const pleaseHolderBox = document.getElementById('pleaseHolder');

typBox.addEventListener('input', () => {
  if (typBox.value == "radio" || typBox.value == "checkbox" || typBox.value == 'range' || typBox.value == 'color') {
    ClassBox.setAttribute('value', 'd-block mb-3')
    pleaseHolderBox.setAttribute('value', ' ')
    pleaseHolderBox.value = '';
    pleaseHolderBox.setAttribute('disabled', 'disabled')
    // setAttributes(pleaseHolderBox, {'disabled': 'disabled',"value": ' '});
  } else {
    ClassBox.setAttribute('value', 'form-control mb-3')
    ClassBox.removeAttribute('disabled')
    pleaseHolderBox.removeAttribute('disabled')
    pleaseHolderBox.setAttribute('value', '')
  }
})
document.getElementById('AddTypeBtn').addEventListener('click', () => {
  const inp = document.createElement('input');

  const typ = document.getElementById('type').value;
  const idName = document.getElementById('idName').value;
  const className = document.getElementById('className').value;
  const pleaseHolder = document.getElementById('pleaseHolder').value;
  const range = document.getElementById('range');

  // console.log(arrLng);
  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  setAttributes(inp, { 'type': typ, "class": className, "id": idName, 'placeholder': pleaseHolder });
  // const inpAttrLen = inp.attributes;
  const dateSt = [];
  for (let d = 0; d < inp.attributes.length; d++) {
    if (inp.attributes[d].value == '') {
      const rmvName = inp.attributes[d].name;
      // inp.removeAttribute(rmvName)
      dateSt.push(rmvName);
    } else {
      // console.log('it is not Empyt');
    }
  }
  for (let r = 0; r < dateSt.length; r++) {
    inp.removeAttribute(dateSt[r]);
  }
  inp.style.fontSize = range.value + "px"
  document.getElementById('prtType').appendChild(inp);


});

const idWr = document.getElementById('imagesWrapper');
const imgsa = document.querySelectorAll('.imds')
// console.log(imgsa.length); 
for (let i = 0; i < imgsa.length; i++) {
  const imgsaWidth = imgsa[i].width;
  imgsa[i].style.cssText = `height :` + imgsaWidth + `px;margin-bottom:24px;border-radius:10px;object-fit: cover;`;
}


const pTags = document.querySelectorAll('.peres p');
for (let p = 0; p < pTags.length; p++) {
  const element = pTags[p];
  element.innerHTML = "ss4454 -- " + p;
};

let arrt = ['Lost', 'Space', 'Veronica', 'Buster']


//arrow function task 1!

const confirm = question => {
  const answer = prompt(question);
  if(answer === "yes") return true;
  else if (answer === "no") return false;
};
  
const ask = (question, yes, no) => {
  if(confirm(question)) yes();
  else no();
};
  
// ask("Do you agree?",() => { alert("You agreed."); },() => { alert("You canceled the execution.");});

console.log(geoplugin_countryCode());

const priceClass = document.querySelectorAll('.prices');
const price = priceClass.forEach(function(item){
  let itemsVal =  item.childNodes[1].textContent.replace("₹","");
  console.log(itemsVal);

  let p = Number();
  const myInterval = setInterval(myTimer, (itemsVal/p)*9000);
  function myTimer() {
    p++;
    item.innerHTML = "₹" + p;
    if (p >= itemsVal) {
      myStopFunction();
    }
  }
  
  function myStopFunction() {
    clearInterval(myInterval);
  }
})


// Card Filds

const cardClass = document.querySelector('.cardFilds');
document.getElementById('addNewCard').addEventListener('click', ()=>{
    var elements = document.querySelectorAll("#formDetails p");
    var names = '';
    for(let i = 0; i < elements.length; i++) {
      names += "<p>" + elements[i].innerHTML +  "</p>";
    }
    cardClass.innerHTML += "<div class='col-4'><div class='card'><div class='card-header'><div class='img_wrapper text-center border-0 my-3 position-relative'><img src='assets/images/jewelry_img_3.jpg' class='rounded-circle card-imgs' width='100' height='100' alt=''><a href='javascript:void(0)' class='icon'><i class='fa-solid fa-pen-to-square position-relative'></i></a><input type='file' class='d-none' id='imgFile' accept='image/png, image/gif, image/jpeg'></div></div><div class='card-body'>" + names + "</div></div></div>";

    const fileInput = document.getElementById('imgFile');
    document.querySelector('.icon').addEventListener('click',()=>{
      fileInput.click();
    })
    fileInput.onchange = ((items)=>{    
      previewFile(items )
    })

    function previewFile(input) {
      const preview = document.querySelector('img');
      const file = document.querySelector('input[type=file]').files[0];
      console.log(input);
      const reader = new FileReader();
    
      reader.addEventListener("load", () => {
        // convert image file to base64 string
        preview.src = reader.result;
      }, false);
    
      if (file) {
        reader.readAsDataURL(file);
      }
    }

    
    
})







// $(".prices").each(countUp);
// function countUp() {
//     var num = $(this).text();
//     var decimal = 0;
//     if (num.indexOf(".") > 0) { // if number is Decimal
//         decimal = num.toString().split(".")[1].length;
//     }
//     $(this).prop("Counter", 0.0).animate({
//         Counter: $(this).text()
//     },
//     {
//         duration: 2000,
//         easing: "swing",
//         step: function (now) {
//             $(this).text("$" + parseFloat(now).toFixed(decimal));
//         }
//     });
// }

// Promt property
// let login = prompt("Hello gays Please enter text in below text-box", "Hellow") 

// let message = (login == "Employee")?"Hello":(login == "Director")?'Greetings':(login == "")? "No login": "This is going wrong"
// console.log(message); 


// document.querySelector('input[name=doLoop]').addEventListener('keydown',function()  {
//   let num;
//   do {
//     num = this.value;
//   } while (num <= 100 && num) alert('this is going wr');

// })




// radioBtn.addEventListener('change', () =>{

// })
// var input = document.querySelector('.form-control');
// input.addEventListener( fromFun())


// class Employee {
//   constructor(name, year, hostId){
//     this.name = name;
//     this.year = year;
//     this.hostId = hostId;  
//   }
//   age(x) {
//     return x - this.year;
//   }
// }
// let date = new Date();
// let year = date.getFullYear();

// let newEmployee1 = new Employee('Warner', 1990, 'ADF545EW1');
// let newEmployee2 = new Employee('Boris', 1996, 'GH5887SV');
// let newEmployee3 = new Employee('Mark', 1998, '45ADRCC6');
// let newEmployee4 = new Employee('Denver', 1985, 'RED454WF');

// console.log(newEmployee1.name);
// console.log(newEmployee2.age(year));
// console.log(newEmployee3.age(year));
// console.log(newEmployee4.age(year));
let input = document.querySelector('#input-form input[type=file]')
// console.log(input );
function myfun(input) {
console.log(input.value);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    console.log(reader);

    reader.addEventListener("load",function() {
        var avatarImg = new Image();
        var src = reader.result;
        avatarImg.src = src;
        document.getElementById('imgpath').setAttribute('src',src)
      },
      false
    );
    reader.readAsDataURL(input.files[0]);
  }
}
myfun(input)