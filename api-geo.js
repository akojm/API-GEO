//************************ LIEN DE L'API  *********************************/

//https://geo.api.gouv.fr/communes?codePostal=78000&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre //

document.getElementById('cp').addEventListener('input', function (){
   
if(this.value.length == 5){
    let url =  `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre//`;

 fetch(url)
 .then((response)=>response.json() // tranformer ma response en format JSON //
 .then((data)=> {
     console.log(data)
    let affichage = "<ul>"; // creation d'une variable pour gerer une liste à puce //
    for(let ville of data){ // Boucle for pour parcourir mon ou mes tableau //
    affichage +=`<strong><li>${ville.nom}</strong> - ${ville.population} - habitants</li>`; // affichage dans une variable le non et le nb d'habitant //
    }
    affichage += "</ul>" // fermeture de ma liste//
    
    document.querySelector(".ville").innerHTML= affichage; // affichage ma requete ou donnée dans ma div de classe ville //
    })
 ).catch((error) =>console.log('erreur' + error)) // Gestion des erreurs et probleme de l'API //
  
}
})

