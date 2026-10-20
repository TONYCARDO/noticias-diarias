let noticias=[];
let categoriaActual='todas';

async function cargar(){
 try{
  const r=await fetch('data/noticias.json?v='+Date.now());
  const d=await r.json();
  noticias=d.noticias||[];
  document.getElementById('fecha-actualizacion').textContent='Última actualización: '+d.actualizado;
  mostrar();
 }catch(e){
  document.getElementById('noticias').innerHTML='<p class="vacio">No se pudieron cargar las noticias.</p>';
 }
}

function mostrar(){
 const cont=document.getElementById('noticias');
 const lista=categoriaActual==='todas'?noticias:noticias.filter(n=>n.categoria===categoriaActual);
 if(!lista.length){cont.innerHTML='<p class="vacio">No hay noticias en esta categoría.</p>';return;}
 cont.innerHTML=lista.map(n=>`
  <article class="card">
   <img src="${n.imagen}" alt="${n.titulo}">
   <div class="contenido">
    <span class="etiqueta">${n.categoria}</span>
    <h2>${n.titulo}</h2>
    <p>${n.resumen}</p>
    <p class="meta">${n.fecha} · Fuente: ${n.url?'<a href="'+n.url+'" target="_blank">'+n.fuente+'</a>':n.fuente}</p>
   </div>
  </article>`).join('');
}

document.querySelectorAll('#categorias button').forEach(b=>{
 b.addEventListener('click',()=>{
  document.querySelectorAll('#categorias button').forEach(x=>x.classList.remove('activo'));
  b.classList.add('activo');
  categoriaActual=b.dataset.cat;
  mostrar();
 });
});

cargar();