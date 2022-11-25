let ListaID = [];
let ListaNome = [];
let Descricao = [];
let Info_1 = [];
let Info_2 = [];
let Info_3 = [];
let Info_4 = [];
let Info_5 = [];
let Info_6 = [];
let Info_7 = [];
let Info_8 = [];
let Info_9 = [];
let Info_10 = [];


const carregar = async() => {            
    const url = 'https://api.thecatapi.com/v1/breeds';
    const dados = await fetch(url);
    const dadosjson = await dados.json();
    console.log(dadosjson);

    var i=0
    while (i<dadosjson.length){
        ListaID.push(dadosjson[i].id);
        ListaNome.push(dadosjson[i].name);  
        Descricao.push(dadosjson[i].description);
        Info_1.push(dadosjson[i].adaptability);
        Info_2.push(dadosjson[i].affection_level);
        Info_3.push(dadosjson[i].energy_level);
        Info_4.push(dadosjson[i].health_issues);
        Info_5.push(dadosjson[i].hypoallergenic);
        Info_6.push(dadosjson[i].intelligence);
        Info_7.push(dadosjson[i].life_span);
        Info_8.push(dadosjson[i].origin);
        Info_9.push(dadosjson[i].dog_friendly);
        Info_10.push(dadosjson[i].rare);
        i++;
    }
        
    var select = document.getElementById("SelecaoRacas");
    for(var i = 0; i < ListaNome.length; i++) {
        var opt = ListaNome[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
carregar();

const clicar = async() => {
    var selected = document.getElementById("SelecaoRacas");
    var value = selected.value;

    var i=0
    while (i<ListaNome.length){
        if(ListaNome[i] == value){
            const url1 = 'https://api.thecatapi.com/v1/images/search?breed_ids='+ListaID[i];
            const dados1 = await fetch(url1);
            const dadosjson1 = await dados1.json();
            console.log(Descricao[i]);
            

            document.getElementById("Descricao").innerHTML = "Description: " + Descricao[i];
            document.getElementById("Info_1").innerHTML = "Adaptability: " + Info_1[i];
            document.getElementById("Info_2").innerHTML = "Affection level: " + Info_2[i];
            document.getElementById("Info_3").innerHTML = "Energy level: " + Info_3[i];
            document.getElementById("Info_4").innerHTML = "Health issues: " + Info_4[i];
            document.getElementById("Info_5").innerHTML = "Hypoallergenic: " + Info_5[i];
            document.getElementById("Info_6").innerHTML = "Intelligence: " + Info_6[i];
            document.getElementById("Info_7").innerHTML = "Life span: " + Info_7[i];
            document.getElementById("Info_8").innerHTML = "Origin: " + Info_8[i];
            document.getElementById("Info_9").innerHTML = "Dog friendly: " + Info_9[i];
            document.getElementById("Info_10").innerHTML = "Rare: " + Info_10[i];
            document.getElementById("Imagem").src = dadosjson1[0].url;
        }
        i++;
    }
}

const element = document.getElementById("btnBusca");
            element.addEventListener("click", clicar);



            
