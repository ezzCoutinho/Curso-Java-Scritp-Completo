recursiva = (max) => {
    if (max > 11280) return; // condição
    console.log(max); 
    max++; // incrementação
    recursiva(max); // se chama de volta, até a condição for true.
}

recursiva(-10) // base ou começo