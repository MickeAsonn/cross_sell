
let entries = [];
function save(){
  const form = new FormData(document.getElementById('form'));
  const obj = {};
  form.forEach((v,k)=> obj[k]=v);
  document.querySelectorAll('input[type=checkbox]').forEach(cb=> obj[cb.name]=cb.checked?'Ja':'');
  entries.push(obj);
  console.log(entries);
  alert('Sparad!');
}
