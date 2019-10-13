    //Menu :
    function openNav(){
        document.getElementById('mySidenav').style.width="250px";
    }
    function closeNav(){
        document.getElementById("mySidenav").style.width="0";
    }

    //reservation :
    function resa() {
        document.getElementById("contenuForm").style.visibility="visible";
        closeNav();
    }
    
    //fonction pour reserver :
    function reserver() {
        document.getElementById('md').innerHTML= document.getElementById("nb").value;
        document.getElementById('lieu').innerHTML= document.getElementById("localisation").value;
        document.getElementById("infoResa").style.visibility = "visible";

        //condition de modification du nombre de vélo disponible :
        if(document.getElementById("localisation").value === document.getElementById("tmElt").value){
            document.getElementById("tm").innerHTML = 7-document.getElementById("nb").value;
        }

        if(document.getElementById("localisation").value === document.getElementById("gareElt").value){
            document.getElementById("gare").innerHTML = 7-document.getElementById("nb").value;
        }

        if(document.getElementById("localisation").value === document.getElementById("svElt").value){
            document.getElementById("sv").innerHTML = 7-document.getElementById("nb").value;
        }

        if(document.getElementById("localisation").value === document.getElementById("pbsElt").value){
            document.getElementById("pbs").innerHTML = 7-document.getElementById("nb").value;
        }

        if(document.getElementById("localisation").value === document.getElementById("ppElt").value){
            document.getElementById("pp").innerHTML = 7-document.getElementById("nb").value;
        }

        // Suppresion du message après 2 secondes : 
        setTimeout(function () {
            document.getElementById("infoResa").style.visibility = "hidden";   
        }, 3000);

        document.getElementById("contenuForm").style.visibility = "hidden"; 
        alert("Code d'activation : "+ nbAleatoire() + "\nCe code doit être utilisé dans les trentes minutes");
    }


    // Fonction générent un code à 4 chiffre entier et aléatoire :
    function nbAleatoire(){
        //Math.random donne un nombre a virgule, Math.floor permet d'avoir un nombre entier. 
        return Math.floor(Math.random() * (9999 - 1000)) + 1000;
    }



    // Création d'un élément bouton pour afficher tous les marqueurs :
    var btElt = document.createElement("button");
    btElt.id = "boutonMarqueur";
    btElt.innerHTML="Afficher tous les marqueurs";
    btElt.style.fontSize = "15px";
    btElt.onclick = mark;      //on definit la fonction mark() sur le bouton
    document.getElementById("contenuMap").appendChild(btElt);




    // Création de la map :
    var options = {
        center: new google.maps.LatLng(48.65, -2.0167),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
        
    var map = new google.maps.Map(document.getElementById("map"), options);
    

    // Fonction qui créé tous les marqueurs :
    function mark(){
         var map = new google.maps.Map(document.getElementById("map"), options);    
        //creation d'un marqueur :
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(48.658395, -1.999798),
            map: map,
            title: "Saint-Malo - Thermes Marins"
            //icon: new google.maps.MarkerImage('icon.png')
        });

       //creation d'une fenetre d'infos :
        var infoWindowOptions = {
            content: '<h3>1 - Thermes Marins de Saint-Malo</h3>',
                //+ '<a href=""</a>'
                //+ '<br/><img src="image.jpg" width="200px" />',
            position: {lat: 48.658395, lng: -1.999798}    
        };
        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);

            //Changement de couleur après click sur le marqueur qui sera supprimé au bout de 2sec :
            document.getElementById("p1").classList.add("divBis");
            setTimeout(function () {
                document.getElementById("p1").classList.remove("divBis");
            }, 1000);
        });



        // creation d'un marqueur :
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(48.646682, -2.004243),
            map: map,
            title: "Saint-Malo - Gare"
            //icon: new google.maps.MarkerImage('icon.png')
        });
        
        //creation d'une fenetre d'infos :
        var infoWindowOptions1 = {
            content: '<h3>2 - Gare de Saint-Malo</h3>',
            position: {lat: 48.646682, lng: -2.004243}    

        };
        var infoWindow1 = new google.maps.InfoWindow(infoWindowOptions1);
        google.maps.event.addListener(marker1, 'click', function() {
            infoWindow1.open(map, marker1);

            //Changement de couleur après click sur le marqueur qui sera supprimé au bout de 2sec :
            document.getElementById("p2").classList.add("divBis");
            setTimeout(function () {
                document.getElementById("p2").classList.remove("divBis");
            }, 1000);
        });


        // creation d'un marqueur :
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(48.650631, -2.023176),
            map: map,
            title: "Porte st-Vincent"
            //icon: new google.maps.MarkerImage('icon.png')
        });
        
        //creation d'une fenetre d'infos :
        var infoWindowOptions2 = {
            content: '<h3>3 - Porte Saint-Vincent (porte principale de la cité Corsaire)</h3>',
            position: {lat: 48.650631, lng: -2.023176}    
        };
        var infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
        google.maps.event.addListener(marker2, 'click', function() {
            infoWindow2.open(map, marker2);

            //Changement de couleur après click sur le marqueur qui sera supprimé au bout de 2sec :
            document.getElementById("p3").classList.add("divBis");
            setTimeout(function () {
                document.getElementById("p3").classList.remove("divBis");
            }, 1000);
        });


        // creation d'un marqueur :
        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(48.638028, -2.019437),
            map: map,
            title: "plage des Bas Sablons"
            //icon: new google.maps.MarkerImage('icon.png')
        });

        //creation d'une fenetre d'infos :
        var infoWindowOptions3 = {
            content: '<h3>4 - Plage des Bas Sablons</h3>',
            position: {lat: 48.638028, lng: -2.019437}    

        };
        var infoWindow3 = new google.maps.InfoWindow(infoWindowOptions3);
        google.maps.event.addListener(marker3, 'click', function() {
            infoWindow3.open(map, marker3);
  
            //Changement de couleur après click sur le marqueur qui sera supprimé au bout de 2sec :
            document.getElementById("p4").classList.add("divBis");
            setTimeout(function () {
                document.getElementById("p4").classList.remove("divBis");
            }, 1000);
        });


        // creation d'un marqueur :
        var marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(48.676041, -1.979992),
            map: map,
            title: "<h3>5 - Plage du pont</h3>"
        });

        //creation d'une fenetre d'infos :
        var infoWindowOptions4 = {
            content: marker4.title/*'<h3>5 - Plage du Pont</h3>' 
                + '<p>Nombre de vélo disponible : 8</p>'
                + '<a href=""</a>'*/,
            position: {lat: 48.676041, lng: -1.979992}    
        };  
        var infoWindow4 = new google.maps.InfoWindow(infoWindowOptions4);
        google.maps.event.addListener(marker4, 'click', function() {
            infoWindow4.open(map, marker4);

            //Changement de couleur après click sur le marqueur qui sera supprimé au bout de 2sec :
            document.getElementById("p5").classList.add("divBis");
            setTimeout(function () {
                document.getElementById("p5").classList.remove("divBis");
            }, 1000);
        });

        document.getElementById("p1").classList.remove("divBis");
        document.getElementById("p2").classList.remove("divBis");
        document.getElementById("p3").classList.remove("divBis");
        document.getElementById("p4").classList.remove("divBis");
        document.getElementById("p5").classList.remove("divBis");
    }   

  
    document.write(mark());
   
    // ou 'mark();'     


    function emplacement() {
            
            document.getElementById("p1").classList.add("divBis");

            var options = {
                center: new google.maps.LatLng(48.658395, -1.999798),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
          
        var map = new google.maps.Map(document.getElementById("map"), options);

        //creation d'un marqueur :
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(48.658395, -1.999798),
            map: map,
            title: "Saint-Malo - Thermes Marins"
            //icon: new google.maps.MarkerImage('icon.png')
        });

       //creation d'une fenetre d'infos :
        var infoWindowOptions = {
            content: '<h3>1 - Thermes Marins de Saint-Malo</h3>',
                
               // + '<a href=""</a>'
               // + '<br/><img src="image.jpg" width="200px" />',
            position: {lat: 48.658395, lng: -1.999798}    
        };
        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);

           
        });

    }
  
    function emplacement2(){

            document.getElementById("p2").classList.add("divBis");
        
            var options = {
                center: new google.maps.LatLng(48.646682, -2.004243),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

        var map = new google.maps.Map(document.getElementById("map"), options);

         // creation d'un marqueur :
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(48.646682, -2.004243),
            map: map,
            title: "Saint-Malo - Gare"
            //icon: new google.maps.MarkerImage('icon.png')
        });
        
        //creation d'une fenetre d'infos :
        var infoWindowOptions1 = {
            content: '<h3>2 - Gare de Saint-Malo</h3>' ,
            position: {lat: 48.646682, lng: -2.004243}    

        };
        var infoWindow1 = new google.maps.InfoWindow(infoWindowOptions1);
        google.maps.event.addListener(marker1, 'click', function() {
            infoWindow1.open(map, marker1);


        });
    } 

    function emplacement3(){

        document.getElementById("p3").classList.add("divBis");

        var options = {
                center: new google.maps.LatLng(48.650631, -2.023176),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

        var map = new google.maps.Map(document.getElementById("map"), options);

        // creation d'un marqueur :
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(48.650631, -2.023176),
            map: map,
            title: "Porte st-Vincent"
            //icon: new google.maps.MarkerImage('icon.png')
        });
        
        //creation d'une fenetre d'infos :
        var infoWindowOptions2 = {
            content: '<h3>3 - Porte Saint-Vincent (porte principale de la cité Corsaire)</h3>',
            position: {lat: 48.650631, lng: -2.023176}    
        };
        var infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
        google.maps.event.addListener(marker2, 'click', function() {
            infoWindow2.open(map, marker2);
        });
    }

    function emplacement4(){

        document.getElementById("p4").classList.add("divBis");

        var options = {
            center: new google.maps.LatLng(48.638028, -2.019437),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        // creation d'un marqueur :
        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(48.638028, -2.019437),
            map: map,
            title: "plage des Bas Sablons"
            //icon: new google.maps.MarkerImage('icon.png')
        });

        //creation d'une fenetre d'infos :
        var infoWindowOptions3 = {
            content: '<h3>4 - Plage des Bas Sablons</h3>' ,
            position: {lat: 48.638028, lng: -2.019437}    

        };
        var infoWindow3 = new google.maps.InfoWindow(infoWindowOptions3);
        google.maps.event.addListener(marker3, 'click', function() {
            infoWindow3.open(map, marker3);
        });
    }

    function emplacement5(){

        document.getElementById("p5").classList.add("divBis");

        var options = {
            center: new google.maps.LatLng(48.676041, -1.979992),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        // creation d'un marqueur :
        var marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(48.676041, -1.979992),
            map: map,
            title: "<h3>5 - Plage du pont</h3>"
            //icon: new google.maps.MarkerImage('icon.png')
        });

        //creation d'une fenetre d'infos :
        var infoWindowOptions4 = {
            content: marker4.title/*'<h3>5 - Plage du Pont</h3>' 
                + '<p>Nombre de vélo disponible : 8</p>'
                + '<a href=""</a>'*/,
            position: {lat: 48.676041, lng: -1.979992}    
        };
        var infoWindow4 = new google.maps.InfoWindow(infoWindowOptions4);
        google.maps.event.addListener(marker4, 'click', function() {
            infoWindow4.open(map, marker4);
        });

    }













