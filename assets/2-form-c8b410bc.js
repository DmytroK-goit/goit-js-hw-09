const a=document.querySelector(".feedback-form");let e={email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("formData");t&&(e=JSON.parse(t),a.elements.email.value=e.email,a.elements.message.value=e.message)});a.addEventListener("input",t=>{const{name:o,value:m}=t.target;o in e&&(e[o]=m,localStorage.setItem("formData",JSON.stringify(e)))});a.addEventListener("submit",t=>{t.preventDefault(),console.log("Form submitted:",e),localStorage.removeItem("formData"),a.reset()});
//# sourceMappingURL=2-form-c8b410bc.js.map