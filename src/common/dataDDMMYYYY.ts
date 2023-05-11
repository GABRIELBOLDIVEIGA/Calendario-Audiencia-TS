export default function formataData(data: string) {
    const dia = new Date(data).getDate(); 
    const mes = new Date(data).getMonth();
    const ano = new Date(data).getFullYear()

    const d = +dia < 10 ? `0${dia}` : dia;
    const m = +mes < 10 ? `0${mes}` : mes;
    
    const dataFromatada = `${d}/${m}/${ano}`;

    return dataFromatada;
}