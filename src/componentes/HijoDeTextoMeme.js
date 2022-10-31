
let HijoDeTextoMeme = (props)=>{
        
    return (
        <div>
            <p className="border border-3 justify-text-start m-3">lo que se escribe en el input aparece acá abajo (usando props): </p>
            <p className="border border-3 border-dark justify-text-start m-3">{props.textoQueLePaso}</p>    
        </div>
    );
}


export default HijoDeTextoMeme;