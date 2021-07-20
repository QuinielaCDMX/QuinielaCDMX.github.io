$(document).ready(function() {


    // var html_aciertos = '';


    // for (let i = 0; i < aciertos.length; i++) {

    //     html_aciertos =
    //     '<p id="'+ aciertos[i].Quiniela_id +'">'+ aciertos[i].aciertos +'</p>';

    //     $("#RA"+aciertos[i].Quiniela_id).html(html_aciertos);
    // }

    let QT=0,L1=0,E1=0,V1=0,L2=0,E2=0,V2=0,L3=0,E3=0,V3=0,L4=0,E4=0,V4=0,
        L5=0,E5=0,V5=0,L6=0,E6=0,V6=0,L7=0,E7=0,V7=0,L8=0,E8=0,V8=0, L9=0, E9=0, V9=0, L10=0, E10=0, V10=0,
        Q1=0, Q2=0, Q3=0, Q4=0, Q5=0, Q6=0, Q7=0, Q8=0, Q9=0, Q10=0;

        var RespuestaApuesta = '', Nombre='';

        function QuinielaTotal () {
            Q1 = L1+E1+V1;
            Q2 = L2+E2+V2;
            Q3 = L3+E3+V3;
            Q4 = L4+E4+V4;
            Q5 = L5+E5+V5;
            Q6 = L6+E6+V6;
            Q7 = L7+E7+V7;
            Q8 = L8+E8+V8;
            Q9 = L9+E9+V9;
            Q10 = L10+E10+V10;

            let CostoTotal = 0;


             QT = Q1 * Q2 * Q3 * Q4 * Q5 * Q6 * Q7 * Q8 * Q9 * Q10;

             CostoTotal = QT * 15;


            RespuestaL1 = (L1 == 1) ? "L": "";
            RespuestaE1 = (E1 == 1) ? 'E': "";
            RespuestaV1 = (V1 == 1) ? "V": "" ;

            RespuestaL2 = (L2 == 1) ? "L": "";
            RespuestaE2 = (E2 == 1) ? 'E': "";
            RespuestaV2 = (V2 == 1) ? "V": "" ;

            RespuestaL3 = (L3 == 1) ? "L": "";
            RespuestaE3 = (E3 == 1) ? 'E': "";
            RespuestaV3 = (V3 == 1) ? "V": "" ;

            RespuestaL4 = (L4 == 1) ? "L": "";
            RespuestaE4 = (E4 == 1) ? 'E': "";
            RespuestaV4 = (V4 == 1) ? "V": "" ;

            RespuestaL5 = (L5 == 1) ? "L": "";
            RespuestaE5 = (E5 == 1) ? 'E': "";
            RespuestaV5 = (V5 == 1) ? "V": "" ;


            RespuestaL6 = (L6 == 1) ? "L": "";
            RespuestaE6 = (E6 == 1) ? 'E': "";
            RespuestaV6 = (V6 == 1) ? "V": "" ;


            RespuestaL7 = (L7 == 1) ? "L": "";
            RespuestaE7 = (E7 == 1) ? 'E': "";
            RespuestaV7 = (V7 == 1) ? "V": "" ;


            RespuestaL8 = (L8 == 1) ? "L": "";
            RespuestaE8 = (E8 == 1) ? 'E': "";
            RespuestaV8 = (V8 == 1) ? "V": "" ;

            RespuestaL9 = (L9 == 1) ? "L": "";
            RespuestaE9 = (E9 == 1) ? 'E': "";
            RespuestaV9 = (V9 == 1) ? "V": "" ;

            RespuestaL10 = (L10 == 1) ? "L": "";
            RespuestaE10 = (E10 == 1) ? 'E': "";
            RespuestaV10 = (V10 == 1) ? "V": "" ;


            RespuestaApuesta = RespuestaL1 + RespuestaE1 + RespuestaV1 + ' '+
                               RespuestaL2 + RespuestaE2 + RespuestaV2 + ' '+
                               RespuestaL3 + RespuestaE3 + RespuestaV3 + ' '+
                               RespuestaL4 + RespuestaE4 + RespuestaV4 + ' '+
                               RespuestaL5 + RespuestaE5 + RespuestaV5 + ' '+
                               RespuestaL6 + RespuestaE6 + RespuestaV6 + ' '+
                               RespuestaL7 + RespuestaE7 + RespuestaV7 + ' '+
                               RespuestaL8 + RespuestaE8 + RespuestaV8 + ' '+
                               RespuestaL9 + RespuestaE9 + RespuestaV9 + ' '+
                               RespuestaL10 + RespuestaE10 + RespuestaV10;

            RespuestaPartidos = {
                               Partido1 : RespuestaL1 + RespuestaE1 + RespuestaV1,
                               Partido2 : RespuestaL2 + RespuestaE2 + RespuestaV2,
                               Partido3 : RespuestaL3 + RespuestaE3 + RespuestaV3,
                               Partido4 : RespuestaL4 + RespuestaE4 + RespuestaV4,
                               Partido5 : RespuestaL5 + RespuestaE5 + RespuestaV5,
                               Partido6 : RespuestaL6 + RespuestaE6 + RespuestaV6,
                               Partido7 : RespuestaL7 + RespuestaE7 + RespuestaV7,
                               Partido8 : RespuestaL8 + RespuestaE8 + RespuestaV8,
                               Partido9 : RespuestaL9 + RespuestaE9 + RespuestaV9,
                               Partido10 : RespuestaL10 + RespuestaE10 + RespuestaV10
            }


             $("#QuinielaTotal").html("<h4><b class='text-danger'>"+ QT +"</b> Quiniela(s)</h4>");

             $("#CostoTotal").html("<h4> Costo <b class='text-danger'> $"+ CostoTotal +"</b> </h4>");


             console.log("Quiniela 1 = " + Q1);
             console.log("Quiniela 2 = " + Q2);
             console.log("Quiniela 3 = " + Q3);
             console.log("Quiniela 4 = " + Q4);
             console.log("Quiniela 5 = " + Q5);
             console.log("Quiniela 6 = " + Q6);
             console.log("Quiniela 7 = " + Q7);
             console.log("Quiniela 8 = " + Q8);
             console.log("Quiniela 9 = " + Q9);
             console.log("Quiniela 10 = " + Q10);
             console.log("Quiniela Total = " + QT);

        }




        function borrarQuiniela () {
            QT=0,L1=0,E1=0,V1=0,L2=0,E2=0,V2=0,L3=0,E3=0,V3=0,L4=0,E4=0,V4=0,
            L5=0,E5=0,V5=0,L6=0,E6=0,V6=0,L7=0,E7=0,V7=0,L8=0,E8=0,V8=0, L9=0, E9=0, V9=0, L10=0, E10=0, V10=0;

            let CostoTotal = 0;

            $("#QuinielaTotal").html("<h4><b class='text-danger'>"+ QT +"</b> Quiniela(s)</h4>");

            $("#CostoTotal").html("<h4> Costo <b class='text-danger'> $"+ CostoTotal +"</b> </h4>");
        }



        $("#borrarQuiniela").click(function() {
            $("#Local1").removeClass("btn-primary");
            $("#Local2").removeClass("btn-primary");
            $("#Local3").removeClass("btn-primary");
            $("#Local4").removeClass("btn-primary");
            $("#Local5").removeClass("btn-primary");
            $("#Local6").removeClass("btn-primary");
            $("#Local7").removeClass("btn-primary");
            $("#Local8").removeClass("btn-primary");
            $("#Local9").removeClass("btn-primary");
            $("#Local10").removeClass("btn-primary");
            $("#Empate1").removeClass("btn-primary");
            $("#Empate2").removeClass("btn-primary");
            $("#Empate3").removeClass("btn-primary");
            $("#Empate4").removeClass("btn-primary");
            $("#Empate5").removeClass("btn-primary");
            $("#Empate6").removeClass("btn-primary");
            $("#Empate7").removeClass("btn-primary");
            $("#Empate8").removeClass("btn-primary");
            $("#Empate9").removeClass("btn-primary");
            $("#Empate10").removeClass("btn-primary");
            $("#Visitante1").removeClass("btn-primary");
            $("#Visitante2").removeClass("btn-primary");
            $("#Visitante3").removeClass("btn-primary");
            $("#Visitante4").removeClass("btn-primary");
            $("#Visitante5").removeClass("btn-primary");
            $("#Visitante6").removeClass("btn-primary");
            $("#Visitante7").removeClass("btn-primary");
            $("#Visitante8").removeClass("btn-primary");
            $("#Visitante9").removeClass("btn-primary");
            $("#Visitante10").removeClass("btn-primary");
            borrarQuiniela();
            borrarLEV();
        })



        function borrarLEV(){
            $("#Partido1").html( "<h4> - </h4>" );
            $("#Partido2").html( "<h4> - </h4>" );
            $("#Partido3").html( "<h4> - </h4>" );
            $("#Partido4").html( "<h4> - </h4>" );
            $("#Partido5").html( "<h4> - </h4>" );
            $("#Partido6").html( "<h4> - </h4>" );
            $("#Partido7").html( "<h4> - </h4>" );
            $("#Partido8").html( "<h4> - </h4>" );
            $("#Partido9").html( "<h4> - </h4>" );
            $("#Partido10").html( "<h4> - </h4>" );
            $("#Local1").removeClass("btn-primary");
            $("#Local2").removeClass("btn-primary");
            $("#Local3").removeClass("btn-primary");
            $("#Local4").removeClass("btn-primary");
            $("#Local5").removeClass("btn-primary");
            $("#Local6").removeClass("btn-primary");
            $("#Local7").removeClass("btn-primary");
            $("#Local8").removeClass("btn-primary");
            $("#Local9").removeClass("btn-primary");
            $("#Local10").removeClass("btn-primary");
            $("#Empate1").removeClass("btn-primary");
            $("#Empate2").removeClass("btn-primary");
            $("#Empate3").removeClass("btn-primary");
            $("#Empate4").removeClass("btn-primary");
            $("#Empate5").removeClass("btn-primary");
            $("#Empate6").removeClass("btn-primary");
            $("#Empate7").removeClass("btn-primary");
            $("#Empate8").removeClass("btn-primary");
            $("#Empate9").removeClass("btn-primary");
            $("#Empate10").removeClass("btn-primary");
            $("#Visitante1").removeClass("btn-primary");
            $("#Visitante2").removeClass("btn-primary");
            $("#Visitante3").removeClass("btn-primary");
            $("#Visitante4").removeClass("btn-primary");
            $("#Visitante5").removeClass("btn-primary");
            $("#Visitante6").removeClass("btn-primary");
            $("#Visitante7").removeClass("btn-primary");
            $("#Visitante8").removeClass("btn-primary");
            $("#Visitante9").removeClass("btn-primary");
            $("#Visitante10").removeClass("btn-primary");
            $("#name").val('');
            borrarQuiniela();
        }

$("#enviarWhatsapp").click(function(){


    Nombre = $("#name").val();

    if(Nombre == '' || Nombre == null)
    {
        alert('Debes escribir un nombre');
    } else if(QT == 0 || QT == '')
    {
        alert('Debes llenar las casillas');
    } else {

        axios.post('/enviar_Respuesta', {
                Nombre: Nombre,
                QT:QT,
                RespuestaPartidos : RespuestaPartidos
        })
        .then(function (response){

            if(response.data == 'Exito') {
            alert('Tu apuesta ha sido exitoso, por favor comunicas con un administrador para que le depositas.');
            console.log(RespuestaApuesta);
            borrarLEV();
            var baseURL = 'https://api.whatsapp.com/send?phone=+525539644056&text='
            window.open( baseURL + RespuestaApuesta + ' ' +Nombre,"_blank");


             } else {
                 alert('Ha fallido al servidor, un favor actualizas de nuevo y llenas las casillas.')
             }
        })
        .catch(function(error){
            console.log(error);
        })
    }


    console.log(RespuestaApuesta);

})


    $("#Partido1").html( "<h4> - </h4>" );
    $("#Partido2").html( "<h4> - </h4>" );
    $("#Partido3").html( "<h4> - </h4>" );
    $("#Partido4").html( "<h4> - </h4>" );
    $("#Partido5").html( "<h4> - </h4>" );
    $("#Partido6").html( "<h4> - </h4>" );
    $("#Partido7").html( "<h4> - </h4>" );
    $("#Partido8").html( "<h4> - </h4>" );
    $("#Partido9").html( "<h4> - </h4>" );
    $("#Partido10").html( "<h4> - </h4>" );

    $("#Local1").click(function() {
        event.preventDefault();
        var Local1 = $("#Local1").hasClass("btn-primary");
        if(Local1 === true) {
            $("#Local1").removeClass("btn-primary");
            --L1;
            QuinielaTotal ()
        } else {
            $("#Local1").addClass("btn-primary");
            ++L1;
            QuinielaTotal ()
         }

    })

    $("#Empate1").click(function() {
        event.preventDefault();
        var Empate1 = $("#Empate1").hasClass("btn-primary");
        if(Empate1 === true) {
            $("#Empate1").removeClass("btn-primary");
            --E1;
            QuinielaTotal ()
        } else {
            $("#Empate1").addClass("btn-primary");
            ++E1;
            QuinielaTotal ()
        }

    })

    $("#Visitante1").click(function() {
        event.preventDefault();
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");
        if(Visitante1 === true) {
            $("#Visitante1").removeClass("btn-primary");
            --V1;
            QuinielaTotal ()
        } else {
            $("#Visitante1").addClass("btn-primary");
            ++V1;
            QuinielaTotal ()
        }

    })



    $("#Local1").click(function() {

        var Local1 = $("#Local1").hasClass("btn-primary");
        var Empate1 = $("#Empate1").hasClass("btn-primary");
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");

    if(Local1 === true & Empate1 ===true & Visitante1 === true)
    {
        $("#Partido1").html( "<h4>L E V</h4>" );
    } else if(Local1 === true & Empate1 ===true & Visitante1 === false) {
        $("#Partido1").html( "<h4> L E </h4>" );
    } else if(Local1 === true & Empate1 ===false & Visitante1 === true) {
        $("#Partido1").html( "<h4> L V </h4>" );
    } else if(Local1 === false &Empate1 ===true & Visitante1 === true) {
        $("#Partido1").html( "<h4> E V </h4>" );
    } else if(Local1 === true & Empate1 ===false & Visitante1 === false) {
        $("#Partido1").html( "<h4> L </h4>" );
    } else if(Local1 === false & Empate1 ===true & Visitante1 === false) {
        $("#Partido1").html( "<h4> E </h4>" );
    } else if(Local1 === false &Empate1 ===false & Visitante1 === true) {
        $("#Partido1").html( "<h4> V </h4>" );
    } else {
    $("#Partido1").html( "<h4> - </h4>" );
    }

    });


    $("#Empate1").click(function() {
        var Local1 = $("#Local1").hasClass("btn-primary");
        var Empate1 = $("#Empate1").hasClass("btn-primary");
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");


        if(Local1 === true & Empate1 ===true & Visitante1 === true)
        {
            $("#Partido1").html( "<h4>L E V</h4>" );
        } else if(Local1 === true & Empate1 ===true & Visitante1 === false) {
            $("#Partido1").html( "<h4> L E </h4>" );
        } else if(Local1 === true & Empate1 ===false & Visitante1 === true) {
            $("#Partido1").html( "<h4> L V </h4>" );
        } else if(Local1 === false &Empate1 ===true & Visitante1 === true) {
            $("#Partido1").html( "<h4> E V </h4>" );
        } else if(Local1 === true & Empate1 ===false & Visitante1 === false) {
            $("#Partido1").html( "<h4> L </h4>" );
        } else if(Local1 === false & Empate1 ===true & Visitante1 === false) {
            $("#Partido1").html( "<h4> E </h4>" );
        } else if(Local1 === false &Empate1 ===false & Visitante1 === true) {
            $("#Partido1").html( "<h4> V </h4>" );
        } else {
        $("#Partido1").html( "<h4> - </h4>" );
        }

        });


    $("#Visitante1").click(function() {

        var Local1 = $("#Local1").hasClass("btn-primary");
        var Empate1 = $("#Empate1").hasClass("btn-primary");
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");


        if(Local1 === true & Empate1 ===true & Visitante1 === true)
        {
            $("#Partido1").html( "<h4>L E V</h4>" );
        } else if(Local1 === true & Empate1 ===true & Visitante1 === false) {
            $("#Partido1").html( "<h4> L E </h4>" );
        } else if(Local1 === true & Empate1 ===false & Visitante1 === true) {
            $("#Partido1").html( "<h4> L V </h4>" );
        } else if(Local1 === false &Empate1 ===true & Visitante1 === true) {
            $("#Partido1").html( "<h4> E V </h4>" );
        } else if(Local1 === true & Empate1 ===false & Visitante1 === false) {
            $("#Partido1").html( "<h4> L </h4>" );
        } else if(Local1 === false & Empate1 ===true & Visitante1 === false) {
            $("#Partido1").html( "<h4> E </h4>" );
        } else if(Local1 === false &Empate1 ===false & Visitante1 === true) {
            $("#Partido1").html( "<h4> V </h4>" );
        } else {
        $("#Partido1").html( "<h4> - </h4>" );
        }

        });




    $("#Local2").click(function() {
        event.preventDefault();
        var Local2 = $("#Local2").hasClass("btn-primary");
        if(Local2 === true) {
            $("#Local2").removeClass("btn-primary");
            --L2;
            QuinielaTotal ()
        } else {
            $("#Local2").addClass("btn-primary");
            ++L2;
            QuinielaTotal ()
        }
    })

    $("#Empate2").click(function() {
        event.preventDefault();
        var Empate2 = $("#Empate2").hasClass("btn-primary");
        if(Empate2 === true) {
            $("#Empate2").removeClass("btn-primary");
            --E2;
            QuinielaTotal ()
        } else {
            $("#Empate2").addClass("btn-primary");
            ++E2;
            QuinielaTotal ()
        }
    })


    $("#Visitante2").click(function() {
        event.preventDefault();
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");
        if(Visitante2 === true) {
            $("#Visitante2").removeClass("btn-primary");
            --V2;
            QuinielaTotal ()
        } else {
            $("#Visitante2").addClass("btn-primary");
            ++V2;
            QuinielaTotal ()
        }
    })

    $("#Local2").click(function() {

        var Local2 = $("#Local2").hasClass("btn-primary");
        var Empate2 = $("#Empate2").hasClass("btn-primary");
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");


    if(Local2 === true & Empate2 ===true & Visitante2 === true)
    {
        $("#Partido2").html( "<h4>L E V</h4>" );
    } else if(Local2 === true & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> L E </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> L V </h4>" );
    } else if(Local2 === false &Empate2 ===true & Visitante2 === true) {
        $("#Partido2").html( "<h4> E V </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === false) {
        $("#Partido2").html( "<h4> L </h4>" );
    } else if(Local2 === false & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> E </h4>" );
    } else if(Local2 === false &Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> V </h4>" );
    } else {
    $("#Partido2").html( "<h4> - </h4>" );
    }

    });



    $("#Empate2").click(function() {

        var Local2 = $("#Local2").hasClass("btn-primary");
        var Empate2 = $("#Empate2").hasClass("btn-primary");
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");


    if(Local2 === true & Empate2 ===true & Visitante2 === true)
    {
        $("#Partido2").html( "<h4>L E V</h4>" );
    } else if(Local2 === true & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> L E </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> L V </h4>" );
    } else if(Local2 === false &Empate2 ===true & Visitante2 === true) {
        $("#Partido2").html( "<h4> E V </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === false) {
        $("#Partido2").html( "<h4> L </h4>" );
    } else if(Local2 === false & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> E </h4>" );
    } else if(Local2 === false &Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> V </h4>" );
    } else {
    $("#Partido2").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante2").click(function() {

        var Local2 = $("#Local2").hasClass("btn-primary");
        var Empate2 = $("#Empate2").hasClass("btn-primary");
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");


    if(Local2 === true & Empate2 ===true & Visitante2 === true)
    {
        $("#Partido2").html( "<h4>L E V</h4>" );
    } else if(Local2 === true & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> L E </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> L V </h4>" );
    } else if(Local2 === false &Empate2 ===true & Visitante2 === true) {
        $("#Partido2").html( "<h4> E V </h4>" );
    } else if(Local2 === true & Empate2 ===false & Visitante2 === false) {
        $("#Partido2").html( "<h4> L </h4>" );
    } else if(Local2 === false & Empate2 ===true & Visitante2 === false) {
        $("#Partido2").html( "<h4> E </h4>" );
    } else if(Local2 === false &Empate2 ===false & Visitante2 === true) {
        $("#Partido2").html( "<h4> V </h4>" );
    } else {
    $("#Partido2").html( "<h4> - </h4>" );
    }

    });






    $("#Local3").click(function() {
        event.preventDefault();
        var Local3 = $("#Local3").hasClass("btn-primary");
        if(Local3 === true) {
            $("#Local3").removeClass("btn-primary");
            --L3;
            QuinielaTotal ()
        } else {
            $("#Local3").addClass("btn-primary");
            ++L3;
            QuinielaTotal ()
        }
    })

    $("#Empate3").click(function() {
        event.preventDefault();
        var Empate3 = $("#Empate3").hasClass("btn-primary");
        if(Empate3 === true) {
            $("#Empate3").removeClass("btn-primary");
            --E3;
            QuinielaTotal ()
        } else {
            $("#Empate3").addClass("btn-primary");
            ++E3;
            QuinielaTotal ()

        }
    })


    $("#Visitante3").click(function() {
        event.preventDefault();
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");
        if(Visitante3 === true) {
            $("#Visitante3").removeClass("btn-primary");
            --V3;
            QuinielaTotal ()

        } else {
            $("#Visitante3").addClass("btn-primary");
            ++V3;
            QuinielaTotal ()

        }
    })

    $("#Local3").click(function() {

        var Local3 = $("#Local3").hasClass("btn-primary");
        var Empate3 = $("#Empate3").hasClass("btn-primary");
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");


    if(Local3 === true & Empate3 ===true & Visitante3 === true)
    {
        $("#Partido3").html( "<h4>L E V</h4>" );
    } else if(Local3 === true & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> L E </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> L V </h4>" );
    } else if(Local3 === false &Empate3 ===true & Visitante3 === true) {
        $("#Partido3").html( "<h4> E V </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === false) {
        $("#Partido3").html( "<h4> L </h4>" );
    } else if(Local3 === false & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> E </h4>" );
    } else if(Local3 === false &Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> V </h4>" );
    } else {
    $("#Partido3").html( "<h4> - </h4>" );
    }

    });

    $("#Empate3").click(function() {

        var Local3 = $("#Local3").hasClass("btn-primary");
        var Empate3 = $("#Empate3").hasClass("btn-primary");
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");


    if(Local3 === true & Empate3 ===true & Visitante3 === true)
    {
        $("#Partido3").html( "<h4>L E V</h4>" );
    } else if(Local3 === true & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> L E </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> L V </h4>" );
    } else if(Local3 === false &Empate3 ===true & Visitante3 === true) {
        $("#Partido3").html( "<h4> E V </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === false) {
        $("#Partido3").html( "<h4> L </h4>" );
    } else if(Local3 === false & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> E </h4>" );
    } else if(Local3 === false &Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> V </h4>" );
    } else {
    $("#Partido3").html( "<h4> - </h4>" );
    }

    });


    $("#Visitante3").click(function() {

        var Local3 = $("#Local3").hasClass("btn-primary");
        var Empate3 = $("#Empate3").hasClass("btn-primary");
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");


    if(Local3 === true & Empate3 ===true & Visitante3 === true)
    {
        $("#Partido3").html( "<h4>L E V</h4>" );
    } else if(Local3 === true & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> L E </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> L V </h4>" );
    } else if(Local3 === false &Empate3 ===true & Visitante3 === true) {
        $("#Partido3").html( "<h4> E V </h4>" );
    } else if(Local3 === true & Empate3 ===false & Visitante3 === false) {
        $("#Partido3").html( "<h4> L </h4>" );
    } else if(Local3 === false & Empate3 ===true & Visitante3 === false) {
        $("#Partido3").html( "<h4> E </h4>" );
    } else if(Local3 === false &Empate3 ===false & Visitante3 === true) {
        $("#Partido3").html( "<h4> V </h4>" );
    } else {
    $("#Partido3").html( "<h4> - </h4>" );
    }

    });





    $("#Local4").click(function() {
        event.preventDefault();
        var Local4 = $("#Local4").hasClass("btn-primary");
        if(Local4 === true) {
            $("#Local4").removeClass("btn-primary");
            --L4;
            QuinielaTotal ()
        } else {
            $("#Local4").addClass("btn-primary");
            ++L4;
            QuinielaTotal ()

        }
    })

    $("#Empate4").click(function() {
        event.preventDefault();
        var Empate4 = $("#Empate4").hasClass("btn-primary");
        if(Empate4 === true) {
            $("#Empate4").removeClass("btn-primary");
            --E4;
            QuinielaTotal ()

        } else {
            $("#Empate4").addClass("btn-primary");
            ++E4;
            QuinielaTotal ()

        }
    })


    $("#Visitante4").click(function() {
        event.preventDefault();
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");
        if(Visitante4 === true) {
            $("#Visitante4").removeClass("btn-primary");
            --V4;
            QuinielaTotal ()

        } else {
            $("#Visitante4").addClass("btn-primary");
            ++V4;
            QuinielaTotal ()

        }
    })

    $("#Local4").click(function() {

        var Local4 = $("#Local4").hasClass("btn-primary");
        var Empate4 = $("#Empate4").hasClass("btn-primary");
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");


    if(Local4 === true & Empate4 ===true & Visitante4 === true)
    {
        $("#Partido4").html( "<h4>L E V</h4>" );
    } else if(Local4 === true & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> L E </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> L V </h4>" );
    } else if(Local4 === false &Empate4 ===true & Visitante4 === true) {
        $("#Partido4").html( "<h4> E V </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === false) {
        $("#Partido4").html( "<h4> L </h4>" );
    } else if(Local4 === false & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> E </h4>" );
    } else if(Local4 === false &Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> V </h4>" );
    } else {
    $("#Partido4").html( "<h4> - </h4>" );
    }

    });


    $("#Empate4").click(function() {

        var Local4 = $("#Local4").hasClass("btn-primary");
        var Empate4 = $("#Empate4").hasClass("btn-primary");
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");


    if(Local4 === true & Empate4 ===true & Visitante4 === true)
    {
        $("#Partido4").html( "<h4>L E V</h4>" );
    } else if(Local4 === true & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> L E </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> L V </h4>" );
    } else if(Local4 === false &Empate4 ===true & Visitante4 === true) {
        $("#Partido4").html( "<h4> E V </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === false) {
        $("#Partido4").html( "<h4> L </h4>" );
    } else if(Local4 === false & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> E </h4>" );
    } else if(Local4 === false &Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> V </h4>" );
    } else {
    $("#Partido4").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante4").click(function() {

        var Local4 = $("#Local4").hasClass("btn-primary");
        var Empate4 = $("#Empate4").hasClass("btn-primary");
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");


    if(Local4 === true & Empate4 ===true & Visitante4 === true)
    {
        $("#Partido4").html( "<h4>L E V</h4>" );
    } else if(Local4 === true & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> L E </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> L V </h4>" );
    } else if(Local4 === false &Empate4 ===true & Visitante4 === true) {
        $("#Partido4").html( "<h4> E V </h4>" );
    } else if(Local4 === true & Empate4 ===false & Visitante4 === false) {
        $("#Partido4").html( "<h4> L </h4>" );
    } else if(Local4 === false & Empate4 ===true & Visitante4 === false) {
        $("#Partido4").html( "<h4> E </h4>" );
    } else if(Local4 === false &Empate4 ===false & Visitante4 === true) {
        $("#Partido4").html( "<h4> V </h4>" );
    } else {
    $("#Partido4").html( "<h4> - </h4>" );
    }

    });






    $("#Local5").click(function() {
        event.preventDefault();
        var Local5 = $("#Local5").hasClass("btn-primary");
        if(Local5 === true) {
            $("#Local5").removeClass("btn-primary");
            --L5;
            QuinielaTotal ()
        } else {
            $("#Local5").addClass("btn-primary");
            ++L5;
            QuinielaTotal ()

        }
    })

    $("#Empate5").click(function() {
        event.preventDefault();
        var Empate5 = $("#Empate5").hasClass("btn-primary");
        if(Empate5 === true) {
            $("#Empate5").removeClass("btn-primary");
            --E5;
            QuinielaTotal ()

        } else {
            $("#Empate5").addClass("btn-primary");
            ++E5;
            QuinielaTotal ()

        }
    })


    $("#Visitante5").click(function() {
        event.preventDefault();
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");
        if(Visitante5 === true) {
            $("#Visitante5").removeClass("btn-primary");
            --V5;
            QuinielaTotal ()

        } else {
            $("#Visitante5").addClass("btn-primary");
            ++V5;
            QuinielaTotal ()

        }
    })

    $("#Local5").click(function() {

        var Local5 = $("#Local5").hasClass("btn-primary");
        var Empate5 = $("#Empate5").hasClass("btn-primary");
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");


    if(Local5 === true & Empate5 ===true & Visitante5 === true)
    {
        $("#Partido5").html( "<h4>L E V</h4>" );
    } else if(Local5 === true & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> L E </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> L V </h4>" );
    } else if(Local5 === false &Empate5 ===true & Visitante5 === true) {
        $("#Partido5").html( "<h4> E V </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === false) {
        $("#Partido5").html( "<h4> L </h4>" );
    } else if(Local5 === false & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> E </h4>" );
    } else if(Local5 === false &Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> V </h4>" );
    } else {
        $("#Partido5").html( "<h4> - </h4>" );
    }

    });



    $("#Empate5").click(function() {

        var Local5 = $("#Local5").hasClass("btn-primary");
        var Empate5 = $("#Empate5").hasClass("btn-primary");
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");


    if(Local5 === true & Empate5 ===true & Visitante5 === true)
    {
        $("#Partido5").html( "<h4>L E V</h4>" );
    } else if(Local5 === true & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> L E </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> L V </h4>" );
    } else if(Local5 === false &Empate5 ===true & Visitante5 === true) {
        $("#Partido5").html( "<h4> E V </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === false) {
        $("#Partido5").html( "<h4> L </h4>" );
    } else if(Local5 === false & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> E </h4>" );
    } else if(Local5 === false &Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> V </h4>" );
    } else {
        $("#Partido5").html( "<h4> - </h4>" );
    }

    });





    $("#Visitante5").click(function() {

        var Local5 = $("#Local5").hasClass("btn-primary");
        var Empate5 = $("#Empate5").hasClass("btn-primary");
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");


    if(Local5 === true & Empate5 ===true & Visitante5 === true)
    {
        $("#Partido5").html( "<h4>L E V</h4>" );
    } else if(Local5 === true & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> L E </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> L V </h4>" );
    } else if(Local5 === false &Empate5 ===true & Visitante5 === true) {
        $("#Partido5").html( "<h4> E V </h4>" );
    } else if(Local5 === true & Empate5 ===false & Visitante5 === false) {
        $("#Partido5").html( "<h4> L </h4>" );
    } else if(Local5 === false & Empate5 ===true & Visitante5 === false) {
        $("#Partido5").html( "<h4> E </h4>" );
    } else if(Local5 === false &Empate5 ===false & Visitante5 === true) {
        $("#Partido5").html( "<h4> V </h4>" );
    } else {
        $("#Partido5").html( "<h4> - </h4>" );
    }

    });




    $("#Local6").click(function() {
        event.preventDefault();
        var Local6 = $("#Local6").hasClass("btn-primary");
        if(Local6 === true) {
            $("#Local6").removeClass("btn-primary");
            --L6;
            QuinielaTotal ()

        } else {
            $("#Local6").addClass("btn-primary");
            ++L6;
            QuinielaTotal ()

        }
    })

    $("#Empate6").click(function() {
        event.preventDefault();
        var Empate6 = $("#Empate6").hasClass("btn-primary");
        if(Empate6 === true) {
            $("#Empate6").removeClass("btn-primary");
            --E6;
            QuinielaTotal ()

        } else {
            $("#Empate6").addClass("btn-primary");
            ++E6;
            QuinielaTotal ()

        }
    })


    $("#Visitante6").click(function() {
        event.preventDefault();
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");
        if(Visitante6 === true) {
            $("#Visitante6").removeClass("btn-primary");
            --V6;
            QuinielaTotal ()

        } else {
            $("#Visitante6").addClass("btn-primary");
            ++V6;
            QuinielaTotal ()

        }
    })

    $("#Local6").click(function() {

        var Local6 = $("#Local6").hasClass("btn-primary");
        var Empate6 = $("#Empate6").hasClass("btn-primary");
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");


    if(Local6 === true & Empate6 ===true & Visitante6 === true)
    {
        $("#Partido6").html( "<h4>L E V</h4>" );
    } else if(Local6 === true & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> L E </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> L V </h4>" );
    } else if(Local6 === false &Empate6 ===true & Visitante6 === true) {
        $("#Partido6").html( "<h4> E V </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === false) {
        $("#Partido6").html( "<h4> L </h4>" );
    } else if(Local6 === false & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> E </h4>" );
    } else if(Local6 === false &Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> V </h4>" );
    } else {
        $("#Partido6").html( "<h4> - </h4>" );
    }

    });


    $("#Empate6").click(function() {

        var Local6 = $("#Local6").hasClass("btn-primary");
        var Empate6 = $("#Empate6").hasClass("btn-primary");
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");


    if(Local6 === true & Empate6 ===true & Visitante6 === true)
    {
        $("#Partido6").html( "<h4>L E V</h4>" );
    } else if(Local6 === true & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> L E </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> L V </h4>" );
    } else if(Local6 === false &Empate6 ===true & Visitante6 === true) {
        $("#Partido6").html( "<h4> E V </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === false) {
        $("#Partido6").html( "<h4> L </h4>" );
    } else if(Local6 === false & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> E </h4>" );
    } else if(Local6 === false &Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> V </h4>" );
    } else {
        $("#Partido6").html( "<h4> - </h4>" );
    }

    });





    $("#Visitante6").click(function() {

        var Local6 = $("#Local6").hasClass("btn-primary");
        var Empate6 = $("#Empate6").hasClass("btn-primary");
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");


    if(Local6 === true & Empate6 ===true & Visitante6 === true)
    {
        $("#Partido6").html( "<h4>L E V</h4>" );
    } else if(Local6 === true & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> L E </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> L V </h4>" );
    } else if(Local6 === false &Empate6 ===true & Visitante6 === true) {
        $("#Partido6").html( "<h4> E V </h4>" );
    } else if(Local6 === true & Empate6 ===false & Visitante6 === false) {
        $("#Partido6").html( "<h4> L </h4>" );
    } else if(Local6 === false & Empate6 ===true & Visitante6 === false) {
        $("#Partido6").html( "<h4> E </h4>" );
    } else if(Local6 === false &Empate6 ===false & Visitante6 === true) {
        $("#Partido6").html( "<h4> V </h4>" );
    } else {
        $("#Partido6").html( "<h4> - </h4>" );
    }

    });


    $("#Local7").click(function() {
        event.preventDefault();
        var Local7 = $("#Local7").hasClass("btn-primary");
        if(Local7 === true) {
            $("#Local7").removeClass("btn-primary");
            --L7;
            QuinielaTotal ()

        } else {
            $("#Local7").addClass("btn-primary");
            ++L7;
            QuinielaTotal ()

        }
    })

    $("#Empate7").click(function() {
        event.preventDefault();
        var Empate7 = $("#Empate7").hasClass("btn-primary");
        if(Empate7 === true) {
            $("#Empate7").removeClass("btn-primary");
            --E7;
            QuinielaTotal ()

        } else {
            $("#Empate7").addClass("btn-primary");
            ++E7;
            QuinielaTotal ()

        }
    })


    $("#Visitante7").click(function() {
        event.preventDefault();
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");
        if(Visitante7 === true) {
            $("#Visitante7").removeClass("btn-primary");
            --V7;
            QuinielaTotal ()

        } else {
            $("#Visitante7").addClass("btn-primary");
            ++V7;
            QuinielaTotal ()

        }
    })

    $("#Local7").click(function() {

        var Local7 = $("#Local7").hasClass("btn-primary");
        var Empate7 = $("#Empate7").hasClass("btn-primary");
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");


    if(Local7 === true & Empate7 ===true & Visitante7 === true)
    {
        $("#Partido7").html( "<h4>L E V</h4>" );
    } else if(Local7 === true & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> L E </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> L V </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === true) {
        $("#Partido7").html( "<h4> E V </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === false) {
        $("#Partido7").html( "<h4> L </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> E </h4>" );
    } else if(Local7 === false &Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> V </h4>" );
    } else {
        $("#Partido7").html( "<h4> - </h4>" );
    }

    });


    $("#Empate7").click(function() {

        var Local7 = $("#Local7").hasClass("btn-primary");
        var Empate7 = $("#Empate7").hasClass("btn-primary");
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");


    if(Local7 === true & Empate7 ===true & Visitante7 === true)
    {
        $("#Partido7").html( "<h4>L E V</h4>" );
    } else if(Local7 === true & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> L E </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> L V </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === true) {
        $("#Partido7").html( "<h4> E V </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === false) {
        $("#Partido7").html( "<h4> L </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> E </h4>" );
    } else if(Local7 === false &Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> V </h4>" );
    } else {
        $("#Partido7").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante7").click(function() {

        var Local7 = $("#Local7").hasClass("btn-primary");
        var Empate7 = $("#Empate7").hasClass("btn-primary");
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");


    if(Local7 === true & Empate7 ===true & Visitante7 === true)
    {
        $("#Partido7").html( "<h4>L E V</h4>" );
    } else if(Local7 === true & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> L E </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> L V </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === true) {
        $("#Partido7").html( "<h4> E V </h4>" );
    } else if(Local7 === true & Empate7 ===false & Visitante7 === false) {
        $("#Partido7").html( "<h4> L </h4>" );
    } else if(Local7 === false & Empate7 ===true & Visitante7 === false) {
        $("#Partido7").html( "<h4> E </h4>" );
    } else if(Local7 === false &Empate7 ===false & Visitante7 === true) {
        $("#Partido7").html( "<h4> V </h4>" );
    } else {
        $("#Partido7").html( "<h4> - </h4>" );
    }

    });






    $("#Local8").click(function() {
        event.preventDefault();
        var Local8 = $("#Local8").hasClass("btn-primary");
        if(Local8 === true) {
            $("#Local8").removeClass("btn-primary");
            --L8;
            QuinielaTotal ()

        } else {
            $("#Local8").addClass("btn-primary");
            ++L8;
            QuinielaTotal ()

        }
    })

    $("#Empate8").click(function() {
        event.preventDefault();
        var Empate8 = $("#Empate8").hasClass("btn-primary");
        if(Empate8 === true) {
            $("#Empate8").removeClass("btn-primary");
            --E8;
            QuinielaTotal ()

        } else {
            $("#Empate8").addClass("btn-primary");
            ++E8;
            QuinielaTotal ()

        }
    })


    $("#Visitante8").click(function() {
        event.preventDefault();
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");
        if(Visitante8 === true) {
            $("#Visitante8").removeClass("btn-primary");
            --V8;
            QuinielaTotal ()

        } else {
            $("#Visitante8").addClass("btn-primary");
            ++V8;
            QuinielaTotal ()

        }
    })

    $("#Local8").click(function() {

        var Local8 = $("#Local8").hasClass("btn-primary");
        var Empate8 = $("#Empate8").hasClass("btn-primary");
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");


    if(Local8 === true & Empate8 ===true & Visitante8 === true)
    {
        $("#Partido8").html( "<h4>L E V</h4>" );
    } else if(Local8 === true & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> L E </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> L V </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === true) {
        $("#Partido8").html( "<h4> E V </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === false) {
        $("#Partido8").html( "<h4> L </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> E </h4>" );
    } else if(Local8 === false &Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> V </h4>" );
    } else {
        $("#Partido8").html( "<h4> - </h4>" );
    }

    });

    $("#Empate8").click(function() {

        var Local8 = $("#Local8").hasClass("btn-primary");
        var Empate8 = $("#Empate8").hasClass("btn-primary");
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");


    if(Local8 === true & Empate8 ===true & Visitante8 === true)
    {
        $("#Partido8").html( "<h4>L E V</h4>" );
    } else if(Local8 === true & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> L E </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> L V </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === true) {
        $("#Partido8").html( "<h4> E V </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === false) {
        $("#Partido8").html( "<h4> L </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> E </h4>" );
    } else if(Local8 === false &Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> V </h4>" );
    } else {
        $("#Partido8").html( "<h4> - </h4>" );
    }

    });


    $("#Visitante8").click(function() {

        var Local8 = $("#Local8").hasClass("btn-primary");
        var Empate8 = $("#Empate8").hasClass("btn-primary");
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");


    if(Local8 === true & Empate8 ===true & Visitante8 === true)
    {
        $("#Partido8").html( "<h4>L E V</h4>" );
    } else if(Local8 === true & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> L E </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> L V </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === true) {
        $("#Partido8").html( "<h4> E V </h4>" );
    } else if(Local8 === true & Empate8 ===false & Visitante8 === false) {
        $("#Partido8").html( "<h4> L </h4>" );
    } else if(Local8 === false & Empate8 ===true & Visitante8 === false) {
        $("#Partido8").html( "<h4> E </h4>" );
    } else if(Local8 === false &Empate8 ===false & Visitante8 === true) {
        $("#Partido8").html( "<h4> V </h4>" );
    } else {
        $("#Partido8").html( "<h4> - </h4>" );
    }

    });




    $("#Local9").click(function() {
        event.preventDefault();
        var Local9 = $("#Local9").hasClass("btn-primary");
        if(Local9 === true) {
            $("#Local9").removeClass("btn-primary");
            --L9;
            QuinielaTotal ()

        } else {
            $("#Local9").addClass("btn-primary");
            ++L9;
            QuinielaTotal ()

        }
    })

    $("#Empate9").click(function() {
        event.preventDefault();
        var Empate9 = $("#Empate9").hasClass("btn-primary");
        if(Empate9 === true) {
            $("#Empate9").removeClass("btn-primary");
            --E9;
            QuinielaTotal ()

        } else {
            $("#Empate9").addClass("btn-primary");
            ++E9;
            QuinielaTotal ()

        }
    })


    $("#Visitante9").click(function() {
        event.preventDefault();
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");
        if(Visitante9 === true) {
            $("#Visitante9").removeClass("btn-primary");
            --V9;
            QuinielaTotal ()

        } else {
            $("#Visitante9").addClass("btn-primary");
            ++V9;
            QuinielaTotal ()

        }
    })

    $("#Local9").click(function() {

        var Local9 = $("#Local9").hasClass("btn-primary");
        var Empate9 = $("#Empate9").hasClass("btn-primary");
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");


    if(Local9 === true & Empate9 ===true & Visitante9 === true)
    {
        $("#Partido9").html( "<h4>L E V</h4>" );
    } else if(Local9 === true & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> L E </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> L V </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === true) {
        $("#Partido9").html( "<h4> E V </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === false) {
        $("#Partido9").html( "<h4> L </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> E </h4>" );
    } else if(Local9 === false &Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> V </h4>" );
    } else {
        $("#Partido9").html( "<h4> - </h4>" );
    }

    });


    $("#Empate9").click(function() {

        var Local9 = $("#Local9").hasClass("btn-primary");
        var Empate9 = $("#Empate9").hasClass("btn-primary");
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");


    if(Local9 === true & Empate9 ===true & Visitante9 === true)
    {
        $("#Partido9").html( "<h4>L E V</h4>" );
    } else if(Local9 === true & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> L E </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> L V </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === true) {
        $("#Partido9").html( "<h4> E V </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === false) {
        $("#Partido9").html( "<h4> L </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> E </h4>" );
    } else if(Local9 === false &Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> V </h4>" );
    } else {
        $("#Partido9").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante9").click(function() {

        var Local9 = $("#Local9").hasClass("btn-primary");
        var Empate9 = $("#Empate9").hasClass("btn-primary");
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");


    if(Local9 === true & Empate9 ===true & Visitante9 === true)
    {
        $("#Partido9").html( "<h4>L E V</h4>" );
    } else if(Local9 === true & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> L E </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> L V </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === true) {
        $("#Partido9").html( "<h4> E V </h4>" );
    } else if(Local9 === true & Empate9 ===false & Visitante9 === false) {
        $("#Partido9").html( "<h4> L </h4>" );
    } else if(Local9 === false & Empate9 ===true & Visitante9 === false) {
        $("#Partido9").html( "<h4> E </h4>" );
    } else if(Local9 === false &Empate9 ===false & Visitante9 === true) {
        $("#Partido9").html( "<h4> V </h4>" );
    } else {
        $("#Partido9").html( "<h4> - </h4>" );
    }

    });










    $("#Local10").click(function() {
        event.preventDefault();
        var Local10 = $("#Local10").hasClass("btn-primary");
        if(Local10 === true) {
            $("#Local10").removeClass("btn-primary");
            --L10;
            QuinielaTotal ()

        } else {
            $("#Local10").addClass("btn-primary");
            ++L10;
            QuinielaTotal ()

        }
    })

    $("#Empate10").click(function() {
        event.preventDefault();
        var Empate10 = $("#Empate10").hasClass("btn-primary");
        if(Empate10 === true) {
            $("#Empate10").removeClass("btn-primary");
            --E10;
            QuinielaTotal ()

        } else {
            $("#Empate10").addClass("btn-primary");
            ++E10;
            QuinielaTotal ()

        }
    })


    $("#Visitante10").click(function() {
        event.preventDefault();
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");
        if(Visitante10 === true) {
            $("#Visitante10").removeClass("btn-primary");
            --V10;
            QuinielaTotal ()

        } else {
            $("#Visitante10").addClass("btn-primary");
            ++V10;
            QuinielaTotal ()

        }
    })

    $("#Local10").click(function() {

        var Local10 = $("#Local10").hasClass("btn-primary");
        var Empate10 = $("#Empate10").hasClass("btn-primary");
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");


    if(Local10 === true & Empate10 ===true & Visitante10 === true)
    {
        $("#Partido10").html( "<h4>L E V</h4>" );
    } else if(Local10 === true & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> L E </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> L V </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === true) {
        $("#Partido10").html( "<h4> E V </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === false) {
        $("#Partido10").html( "<h4> L </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> E </h4>" );
    } else if(Local10 === false &Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> V </h4>" );
    } else {
        $("#Partido10").html( "<h4> - </h4>" );
    }

    });


    $("#Empate10").click(function() {

        var Local10 = $("#Local10").hasClass("btn-primary");
        var Empate10 = $("#Empate10").hasClass("btn-primary");
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");


    if(Local10 === true & Empate10 ===true & Visitante10 === true)
    {
        $("#Partido10").html( "<h4>L E V</h4>" );
    } else if(Local10 === true & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> L E </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> L V </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === true) {
        $("#Partido10").html( "<h4> E V </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === false) {
        $("#Partido10").html( "<h4> L </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> E </h4>" );
    } else if(Local10 === false &Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> V </h4>" );
    } else {
        $("#Partido10").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante10").click(function() {

        var Local10 = $("#Local10").hasClass("btn-primary");
        var Empate10 = $("#Empate10").hasClass("btn-primary");
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");


    if(Local10 === true & Empate10 ===true & Visitante10 === true)
    {
        $("#Partido10").html( "<h4>L E V</h4>" );
    } else if(Local10 === true & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> L E </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> L V </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === true) {
        $("#Partido10").html( "<h4> E V </h4>" );
    } else if(Local10 === true & Empate10 ===false & Visitante10 === false) {
        $("#Partido10").html( "<h4> L </h4>" );
    } else if(Local10 === false & Empate10 ===true & Visitante10 === false) {
        $("#Partido10").html( "<h4> E </h4>" );
    } else if(Local10 === false &Empate10 ===false & Visitante10 === true) {
        $("#Partido10").html( "<h4> V </h4>" );
    } else {
        $("#Partido10").html( "<h4> - </h4>" );
    }

    });



});
