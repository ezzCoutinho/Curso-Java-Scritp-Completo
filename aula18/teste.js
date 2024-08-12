const data = new Date();

function zeroAesquerda (numeroDadata) {
    return numeroDadata >= 10 ? numeroDadata : `0${numeroDadata}`
}

function criandoDatas(datas) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() +1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const minutos = zeroAesquerda(data.getMinutes());
    const segundos = zeroAesquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const dia = criandoDatas(); // executando a fuction

console.log(dia);