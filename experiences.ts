async function ageForExperience(tab:number[],isMostExperienced : boolean) {

    for (let i = 0; i < tab.length; i++) {
        const element = tab[i];
        const max  = Math.max(element)
        const min  = Math.min(element)

        for (let j = 0; j < tab.length - i ; j++) {
            const el = tab[j]; 
            const maxJ  = Math.max(el)
            const minJ  = Math.min(el)

            if(isMostExperienced == true && el != element && max != maxJ ){
                return [j,i]
            }else if(isMostExperienced == true && min!= minJ)
            {
                return [j,i]
            }
            
        }
       
    }
}