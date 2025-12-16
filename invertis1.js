let btn = document.getElementById("admission1");
let admissionBox = document.getElementById("admission");
let footer = document.querySelector(".footer");
let left=document.querySelector(".leftcol");


btn.addEventListener("click", function () {
    admissionBox.classList.toggle("active");
    admissionBox.style.display = "block";
    academicbox.style.display = "none";
    fees.style.display = "none";
    application.style.display = "none";
    left.classList.remove();
});

const academic = document.getElementById("academic2");

function toggleAcademic(){
  if(academic.classList.contains("active")){
    academic.style.maxHeight = null;
    academic.classList.remove("active");
  }else{
    academic.classList.add("active");
    academic.style.maxHeight = academic.scrollHeight + "px";
  }
}

let btn1 = document.getElementById("academic1");
let academicbox = document.getElementById("academic2");
btn1.addEventListener("click", function () {
    academicbox.classList.toggle("active");
    academicbox.style.display = "block";
    admissionBox.style.display = "none";
    left.classList.toggle("leftcol_active");

    fees.style.display = "none";
    application.style.display = "none";
    if (academicbox.classList.contains("active")) {
        btn1.textContent = "Academic";
    } else {
        btn1.textContent = "Academic";
    }
});


let course_detail=document.querySelector(".course_detail");
let course_plus=document.getElementById("core_icon");
course_plus.addEventListener("click",function(){
    elective_detail.classList.remove("elective_detail_show");
    elective_icon.textContent="+";
    course_detail.classList.toggle("course_detail_show")
    if(course_detail.classList.contains("course_detail_show")){
        course_plus.textContent="-"
    }
    else{
        course_plus.textContent="+";
    }
});

let elective_detail=document.querySelector(".elective_detail");
let elective_icon=document.getElementById("elective_icon");
elective_icon.addEventListener("click",function(){
    course_detail.classList.remove("course_detail_show");
    course_plus.textContent="+";
    elective_detail.classList.toggle("elective_detail_show");
    if(elective_detail.classList.contains("elective_detail_show")){
        elective_icon.textContent="-";
    }
    else{
        elective_icon.textContent="+";
    }
})

let feesBtn = document.getElementById("fees1");
let fees = document.getElementById("fees");
feesBtn.addEventListener("click", function () {
    fees.classList.toggle("active");
    fees.style.display = "block";
    admissionBox.style.display = "none";
    academicbox.style.display = "none";
    application.style.display = "none";
});
let applicationBtn = document.getElementById("application1");
let application = document.getElementById("application");
applicationBtn.addEventListener("click", () => {
    application.classList.toggle("active");
    application.style.display = "block";
    admissionBox.style.display = "none";
    academicbox.style.display = "none";
    fees.style.display = "none";
});


const invertisImg=document.querySelector(".invertisImg");
invertisImg.addEventListener("click",function(){
    window.open("https://www.invertisuniversity.ac.in/","_blank","noopener");
});

