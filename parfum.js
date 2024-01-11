const scriptURL = "https://script.google.com/macros/s/AKfycbyIM6HD32IdtJ_aNPdWmCihRsKbsqhGstda_BC_zVTE4hTB1nr0BgT5U6rz78r4OGtd/exec";
const form = document.forms["contact-form"];

var genreSelect, perfumeSelect, size, parfumFisrt , countDiv , count , tableData , firstName , lastName , phoneNumber , whatsappNumber;
countDiv = document.getElementById('countDiv');
divData = document.getElementById('divData');
firstName = document.getElementById('firstName');
lastName = document.getElementById('lastName');
phoneNumber = document.getElementById('phoneNumber');
whatsappNumber= document.getElementById('whatsappNumber')

count = 0;
emoji ='🙁';
// countDiv.innerHTML = `<div id="card-list">The number of perfumes that you added to the card list is <span style="color: red;">${count}</span> you can't send the order ${emoji}</div>`;
let perfumeNumber =` عدد العطور التي أضفتها إلى القائمة هو` + `<span style="color: red;">${count}</span> `;
let warning = 'للاسف لا يمكنك إرسال الطلبية'+ ` ${emoji} ` ;
let condition = '. المرجو اضافة ثلاثة عطور على الاقل إلى القائمة' ;
countDiv.innerHTML = `<div id="card-list">  ${perfumeNumber} ${warning} ${condition}</div>`;

let commandes = [];


function updatePerfumeOptions() {
  genreSelect = document.getElementById("genreSelect");
  var hommeOptions = document.getElementById("hommeOptions");
  var femmeOptions = document.getElementById("femmeOptions");
  var genderFirst = document.getElementById("genderFirst");
  perfumeSelect = document.getElementById('perfumeSelect');
  size = document.getElementById("size");
  parfumFisrt = document.getElementById("parfumFisrt");
  document.getElementById('size').selectedIndex = 0;

  if (genreSelect.value === "Homme") {
    hommeOptions.style.display = "block";
    femmeOptions.style.display = "none";
    genderFirst.style.display = "none";
  } else if (genreSelect.value === "Femme") {
    hommeOptions.style.display = "none";
    femmeOptions.style.display = "block";
    genderFirst.style.display = "none";
  } else {
    hommeOptions.style.display = "none";
    femmeOptions.style.display = "none";
    genderFirst.style.display = "block";
  }

  if (perfumeSelect.value != null) {
    document.getElementById('perfumeSelect').selectedIndex = 0;

    sizeSelected.style.display = "block";
    parfumFisrt.style.display = "none";
  }
}

function addToCard() {

  
  // Check if genreSelect, perfumeSelect, and size elements exist
  if (genreSelect && perfumeSelect && size) {
    // Check if values are not null or undefined
    if (genreSelect.value && perfumeSelect.value && size.value) {
      const newCommande = {
        gender: genreSelect.value,
        parfum: perfumeSelect.value,
        size: size.value,
      };
      console.log(newCommande);
      commandes.push(newCommande);
      console.log(commandes);

      count++;
      if (count < 3) {
        // countDiv.innerHTML = `<div id="card-list">The number of perfumes that you added to the card list is <span style="color: red;">${count}</span> you can't send the order ${emoji}</div>`;
        perfumeNumber =`عدد العطور التي أضفتها إلى القائمة هو` + `<span style="color: red;">${count}</span> `;
        warning = 'للاسف لا يمكنك إرسال الطلبية'+ ` ${emoji} ` ;
        condition = 'المرجو اضافة ثلاثة عطور على الاقل إلى القائمة' ;
        countDiv.innerHTML = `<div id="card-list">  ${perfumeNumber} ${warning} ${condition}</div>`;
      } else {
        emoji = '🙂';
        // countDiv.innerHTML = `<div id="card-list">The number of perfumes that you added to the card list is <span style="color: red;">${count}</span> now you can send the order or add more and send it${emoji}</div>`;
        
// let warning = `<span style="color: red;">${count}</span> `+'الان يمكنك ارسال الطلبية';
// let condition = 'او قم باضافه عطور اخرى الى القائمه ثم ارسل الطلبية' ;
// countDiv.innerHTML = `<div id="card-list"> ${perfume} ${warning} ${condition}</div>`;

perfumeNumber =`عدد العطور التي أضفتها إلى القائمة هو` + `<span style="color: green;">${count}</span> `;
        warning = 'الان يمكنك ارسال الطلبية'+ ` ${emoji} ` ;
condition = 'او قم بإضافة عطور اخرى الى القائمة ثم ارسل الطلبية' ;
        countDiv.innerHTML = `<div id="card-list">  ${perfumeNumber} ${warning} ${condition}</div>`;


      }

      document.getElementById('size').selectedIndex = 0;
      document.getElementById('perfumeSelect').selectedIndex = 0;
      document.getElementById('genreSelect').selectedIndex = 0;
    } else {
      Swal.fire({
        title: "حدث خطأ",
        text: "تأكد أنك قمت بإختيار نوع الجنس واسم العطر والحجم",
        showConfirmButton:true,
        icon: "warning"
      });
    }
  } else {
    // Log details about the missing elements
    console.error('Elements not found. Check your HTML structure.');
    console.log('genreSelect:', genreSelect);
    console.log('perfumeSelect:', perfumeSelect);
    console.log('size:', size);
  }
}


// function sendData(event) {
//   event.preventDefault();
  
//   if (!firstName.value || !lastName.value || !phoneNumber.value || !whatsappNumber.value) {
//     Swal.fire({
//       title: "المعلومات الشخصية غير كاملة",
//       text: "تأكد أنك قمت بملء كل الخانات المتعلقة بالمعلومات الشخصية",
//       showConfirmButton:true,
//       icon: "warning"
//     });
//   } else if (commandes.length < 3) {
//     Swal.fire({
//       title: "عدد العطور في القائمة اقل من الحد الادنى",
//       text: "تأكد من أنك قمت بإضافة ثلاثة عطور على الأقل إلى القائمة",
//       showConfirmButton:true,
//       icon: "warning"
//     });
//   } else if( firstName && lastName && phoneNumber && whatsappNumber && commandes.length >= 3){
//     for (let i = 0; i < commandes.length; i++) {
//       divData.innerHTML += `
//         <input name="gender ${i + 1}" value="${commandes[i].gender}">
//         <input name="perfume ${i + 1}" value="${commandes[i].parfum}">
//         <input name="size ${i + 1}" value="${commandes[i].size}">
//       `;
//     }
//        Swal.fire({
//       title: 'المرجو منكم الانتظار قليلا',
//       html: 'يتم تحميل الطلبية', // Ajoutez l'attribut html si vous le souhaitez ou supprimez-le
//       allowOutsideClick: false,
//       showConfirmButton:false,
//       willOpen: () => {
//           Swal.showLoading();
//       },
//   })

//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then((response) => Swal.fire({
//           title: "جيد جدا",
//           text: "لقد ثم ارسال الطلبية بنجاح سنتواصل معكم في اقرب وقت ممكن",
//           icon: "success"
//         }))
//         .then(()=>{window.location.reload();})
//         .catch((error) => console.log('Error', error.message));
//     });
//   }
// }

//new

function sendData(event) {
  event.preventDefault();

  if (!firstName.value || !lastName.value || !phoneNumber.value || !whatsappNumber.value) {
    Swal.fire({
      title: "المعلومات الشخصية غير كاملة",
      text: "تأكد أنك قمت بملء كل الخانات المتعلقة بالمعلومات الشخصية",
      showConfirmButton: true,
      icon: "warning"
    });
  } else if (commandes.length < 3) {
    Swal.fire({
      title: "عدد العطور في القائمة أقل من الحد الأدنى",
      text: "تأكد من أنك قمت بإضافة ثلاثة عطور على الأقل إلى القائمة",
      showConfirmButton: true,
      icon: "warning"
    });
  } else {
    const formData = new FormData(); // Create a new FormData object

    for (let i = 0; i < commandes.length; i++) {
      formData.append(`gender ${i + 1}`, commandes[i].gender);
      formData.append(`perfume ${i + 1}`, commandes[i].parfum);
      formData.append(`size ${i + 1}`, commandes[i].size);
    }

    // Append other form data
    formData.append('fullName', firstName.value);
    formData.append('address', lastName.value);
    formData.append('phoneNumber', phoneNumber.value);
    formData.append('whatsappNumber', whatsappNumber.value);

    Swal.fire({
      title: 'المرجو منكم الانتظار قليلا',
      html: 'يتم تحميل الطلبية',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: "جيد جدا",
            text: "لقد تم إرسال الطلبية بنجاح، سنتواصل معكم في أقرب وقت ممكن",
            icon: "success"
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: "خطأ",
          text: "حدث خطأ أثناء إرسال الطلبية، يرجى المحاولة مرة أخرى",
          icon: "error"
        });
      });
  }
}






// // The rest of your code...


// // Or with jQuery

// $(document).ready(function () {
//   $(".modal").modal();
// });

// function submitForm() {
//   Swal.fire({
//     title: "Please Wait!",
//     html: "Data Uploading", // Ajoutez l'attribut html si vous le souhaitez ou supprimez-le
//     allowOutsideClick: false,
//     showConfirmButton: false,
//     willOpen: () => {
//       Swal.showLoading();
//     },
//   });
// }

function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

function changeBg(bg, title, src) {
  const img = document.querySelector("#imagebox");

  const input = document.querySelector("#select");
  const inputV = document.querySelector("#inputV");

  img.src = `${bg}`;
  input.value = `${title}`;
  inputV.value = `${src}`;
}



// $(document).ready(function () {
//   $(".carousel").carousel();
// });
