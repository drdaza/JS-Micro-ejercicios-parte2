export function AsignDNI(){
    let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let InputAge = document.getElementById('number-asign');
    const ButtonAsign = document.getElementById('asign-info');
    const ButtonCancel = document.getElementById('button-cancel');

    ButtonAsign.addEventListener('click', ()=>{
        let numberParse = parseInt(InputAge.value);
        
        if(typeof(numberParse)=='number' && numberParse > 0){
            let Result = numberParse % 23;
            let Asign = `${numberParse}-${letters[Result]}`;
            renderDNI(Asign)
        }
        else{
            alert('The input should be a number')
        }
        InputAge.value = '';
    })
    ButtonCancel.addEventListener('click', ()=>{
       ButtonAsign.disabled = "disabled";
       InputAge.disabled = "disabled";
    })

}
AsignDNI()
export function renderDNI(value){
    let renderArea = document.getElementById('dni-area');
    renderArea.innerHTML += `<h2> ${value}</h2>`;
}
export function AsignDNIVersion2(person){
    let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    
    
    
        let numberParse = parseInt(person.numberDni);
        
        if(typeof(numberParse)=='number' && numberParse > 0){
            let Result = numberParse % 23;
            person.letterDni = `${letters[Result]}`;
            
        }
        else{
            return 'The input should be a number'
        }
        return person
    
}