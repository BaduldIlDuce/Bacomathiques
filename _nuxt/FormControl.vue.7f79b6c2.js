import{d as c,C as t,o as u,a as d,B as i}from"./entry.adf4248a.js";const h=["id","name","type","placeholder","value"],C=c({name:"SkiFormControl",__name:"FormControl",props:{id:{},name:{},type:{default:"text"},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(l,{emit:n}){const o=l,m=n,p=t(()=>o.name?o.name:o.id),s=t(()=>o.type==="checkbox"?"form-check-input":"form-control"),r=e=>{const a=e.target;m("update:modelValue",a.value)};return(e,a)=>(u(),d("input",{id:e.id,name:p.value,type:e.type,placeholder:e.placeholder,class:i(s.value),value:e.modelValue,onInput:r},null,42,h))}});export{C as _};
