window.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("[data-ajax-form]").forEach((e=>{!function e(t){t.addEventListener("submit",(a=>{a.preventDefault();const n=new FormData(t);a.submitter&&n.append(a.submitter.name,a.submitter.value),function(e,t,a){const n=new XMLHttpRequest;n.open("POST",e.action,!0),n.setRequestHeader("Accept","text/html"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-Contao-Ajax-Form",e.querySelector('[name="FORM_SUBMIT"]').value),e.ariaBusy="true",e.dataset.ajaxForm="loading",n.onload=()=>{e.dispatchEvent(new CustomEvent("ajax-form-onload",{bubbles:!0,detail:{body:t,form:e,xhr:n}})),e.ariaBusy="false",e.dataset.ajaxForm="",a(n)},n.send(t||null)}(t,n,(a=>{const n=a.getResponseHeader("X-Ajax-Location");if(n)return void(window.location.href=n);const o=document.createElement("template");o.innerHTML=a.responseText.trim();const r=o.content.firstElementChild;t.replaceWith(r),e(r)}))}))}(e)}))}));
//# sourceMappingURL=ajax-form.8d9f14a4.js.map