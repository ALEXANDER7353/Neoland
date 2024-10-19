 // EJERCISIOS JS Loops

 //1: Usa includes**

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta',
    'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
   
    let conLetraS = products.filter(e => e.includes('Camiseta'))

    console.log(conLetraS); 
  

    //2: Condicionales avanzados

    //Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved 
    //a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
     
    const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
              {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
              {name: 'Juan Miranda', T1: false, T2: true, T3: true},
              {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
              {name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]
          
 
   for (const alumn of  alumns) {
      if (alumn.T1 + alumn.T2 + alumn.T3 >= 2) {
          alumn.isApproved = true;
          
      } else {
          alumn.isApproved = false ;
      }
   }console.log(alumns);
   



    
     
       //3: Probando For...of

    const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
        
    let valores = placesToTravel.values();

    for (const element of placesToTravel) {


        console.log(element);
    }
   

    //4: Probando For...in

   const alien = {
        name: 'Wormuck',
        race: 'Cucusumusu',
        planet: 'Eden',
         weight: '259kg'
    };
    for (const claves in alien) {
        console.log(`estas son las claves :  ${alien[claves]}`);
        
      
    }


    //5: Probando For
    //Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
    // Imprime en un console log el array. Puedes usar este array:

    const elementos = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},
         {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

    let menoselemtos=elementos.splice (1,1)

    let nuevosDeportes = elementos.splice (2,1)

    console.log(elementos);


    // 6: Mixed For...of e includes

    //Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
     //Recuerda que puedes usar la función.includes() para comprobarlo.Puedes usar este array:
    const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (const element of toys) {
     let menostoys = toys.splice(3, 4);
     console.log(menostoys);
     
      

      
      
    
     
   
   }
    


    //7: For...of avanzado
    //Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) 
   //al array popularToys. Imprimelo por consola.. Puedes usar este array:

   

    const toys1 = [
   {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
   {id: 11, name: 'Action Woman', sellCount: 24}, 
   {id: 23, name: 'Barbie Man', sellCount: 15}, 
   {id: 40, name: 'El gato con Guantes', sellCount: 8},
   {id: 40, name: 'El gato felix', sellCount: 35}
    ]

   
    const popularToys = [];
   
    for (const e of toys1) {
      let toys  = toys1.map(function (toys1) {
          return toys1.sellCount >= 15; 
      });
              
      
     
          }
          const popularToys1 = toys.concat(popularToys)
          console.log(popularToys1);
          
          
        
         
          
      
        
        


 

     


      
      
    
    
    
    
    