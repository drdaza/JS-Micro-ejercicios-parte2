export default function listGifts(letter) {
    // ¡Tú puedes!
    let letterSeparete =  letter.trim().split(' ');
    const listGifts= {};
    letterSeparete.forEach(element => {
        if(!element.startsWith('_')){
            if(listGifts[element]){
                listGifts[element]++;
            }
            else{
                listGifts[element]=1;
            }
        }
    });
    return listGifts;
   
   }