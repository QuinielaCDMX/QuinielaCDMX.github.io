$(document).ready(function() {


    // var html_aciertos = '';


    // for (let i = 0; i < aciertos.length; i++) {

    //     html_aciertos =
    //     '<p id="'+ aciertos[i].Quiniela_id +'">'+ aciertos[i].aciertos +'</p>';

    //     $("#RA"+aciertos[i].Quiniela_id).html(html_aciertos);
    // }

    let QT=0,L1=0, V1=0,L2=0,V2=0,L3=0,V3=0,L4=0,V4=0,
        L5=0,V5=0,L6=0,V6=0,L7=0,V7=0,L8=0,V8=0, L9=0, V9=0, L10=0, V10=0,
        L11=0, V11=0, L12=0, V12=0, L13=0, V13=0, L14=0, V14=0, L15=0, V15=0,
        Q1=0, Q2=0, Q3=0, Q4=0, Q5=0, Q6=0, Q7=0, Q8=0, Q9=0, Q10=0, Dobles=0, Unicos=0;


        var RespuestaApuesta = '', Nombre='', CostoTotal=0;

        function QuinielaTotal () {
            Q1 = L1+V1;
            Q2 = L2+V2;
            Q3 = L3+V3;
            Q4 = L4+V4;
            Q5 = L5+V5;
            Q6 = L6+V6;
            Q7 = L7+V7;
            Q8 = L8+V8;
            Q9 = L9+V9;
            Q10 = L10+V10;
            Q11 = L11+V11;
            Q12 = L12+V12;
            Q13 = L13+V13;
            Q14 = L14+V14;
            Q15 = L15+V15;

            CostoTotal = 0;



             QT = Q1 * Q2 * Q3 * Q4 * Q5 * Q6 * Q7 * Q8 * Q9 * Q10 * Q11 * Q12 * Q13 * Q14 * Q15;

             QArreglo = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15];


                CostoTotal = QT * 50;




            RespuestaL1 = (L1 == 1) ? "L": "";
            RespuestaV1 = (V1 == 1) ? "V": "" ;

            RespuestaL2 = (L2 == 1) ? "L": "";
            RespuestaV2 = (V2 == 1) ? "V": "" ;

            RespuestaL3 = (L3 == 1) ? "L": "";
            RespuestaV3 = (V3 == 1) ? "V": "" ;

            RespuestaL4 = (L4 == 1) ? "L": "";
            RespuestaV4 = (V4 == 1) ? "V": "" ;

            RespuestaL5 = (L5 == 1) ? "L": "";
            RespuestaV5 = (V5 == 1) ? "V": "" ;


            RespuestaL6 = (L6 == 1) ? "L": "";
            RespuestaV6 = (V6 == 1) ? "V": "" ;


            RespuestaL7 = (L7 == 1) ? "L": "";
            RespuestaV7 = (V7 == 1) ? "V": "" ;


            RespuestaL8 = (L8 == 1) ? "L": "";
            RespuestaV8 = (V8 == 1) ? "V": "" ;

            RespuestaL9 = (L9 == 1) ? "L": "";
            RespuestaV9 = (V9 == 1) ? "V": "" ;

            RespuestaL10 = (L10 == 1) ? "L": "";
            RespuestaV10 = (V10 == 1) ? "V": "" ;
            
            RespuestaL11 = (L11 == 1) ? "L": "";
            RespuestaV11 = (V11 == 1) ? "V": "" ;

            
            RespuestaL12 = (L12 == 1) ? "L": "";
            RespuestaV12 = (V12 == 1) ? "V": "" ;

            
            RespuestaL13 = (L13 == 1) ? "L": "";
            RespuestaV13 = (V13 == 1) ? "V": "" ;

            
            RespuestaL14 = (L14 == 1) ? "L": "";
            RespuestaV14 = (V14 == 1) ? "V": "" ;

            
            RespuestaL15 = (L15 == 1) ? "L": "";
            RespuestaV15 = (V15 == 1) ? "V": "" ;


            RespuestaApuesta = '' + RespuestaL1  + RespuestaV1 + '%0A' +
                               '' + RespuestaL2  + RespuestaV2 + '%0A'+
                               '' + RespuestaL3  + RespuestaV3 + '%0A'+
                               '' + RespuestaL4 + RespuestaV4 + '%0A'+
                               '' + RespuestaL5  + RespuestaV5 + '%0A'+
                               '' + RespuestaL6  + RespuestaV6 + '%0A'+
                               '' + RespuestaL7  + RespuestaV7 + '%0A'+
                               '' + RespuestaL8  + RespuestaV8 + '%0A'+
                               '' + RespuestaL9  + RespuestaV9 + '%0A'+
                               '' + RespuestaL10  + RespuestaV10 + '%0A'+
                               '' + RespuestaL11  + RespuestaV11 + '%0A'+
                               '' + RespuestaL12  + RespuestaV12 + '%0A'+
                               '' + RespuestaL13  + RespuestaV13 + '%0A'+
                               '' + RespuestaL14  + RespuestaV14 + '%0A'+
                               '' + RespuestaL15  + RespuestaV15;


            RespuestaPartidos = {
                               Partido1 : RespuestaL1  + RespuestaV1,
                               Partido2 : RespuestaL2  + RespuestaV2,
                               Partido3 : RespuestaL3  + RespuestaV3,
                               Partido4 : RespuestaL4  + RespuestaV4,
                               Partido5 : RespuestaL5  + RespuestaV5,
                               Partido6 : RespuestaL6  + RespuestaV6,
                               Partido7 : RespuestaL7  + RespuestaV7,
                               Partido8 : RespuestaL8  + RespuestaV8,
                               Partido9 : RespuestaL9  + RespuestaV9,
                               Partido10 : RespuestaL10 + RespuestaV10,
                               Partido11 : RespuestaL11 + RespuestaV11,
                               Partido12 : RespuestaL12 + RespuestaV12,
                               Partido13 : RespuestaL13 + RespuestaV13,
                               Partido14 : RespuestaL14 + RespuestaV14,
                               Partido15 : RespuestaL15 + RespuestaV15
            }


             $("#QuinielaTotal").html("<h4><b class='text-danger'>"+ QT +"</b> Quiniela(s)</h4>");


                $("#CostoTotal").html("<h4> Costo <b class='text-danger'> $"+ CostoTotal +"</b> </h4>");



        }




        function borrarQuiniela () {
            QT=0,L1=0,V1=0,L2=0,V2=0,L3=0,V3=0,L4=0,V4=0,
            L5=0,V5=0,L6=0,V6=0,L7=0,V7=0,L8=0,V8=0, L9=0, V9=0, L10=0, V10=0
            L11=0,V11=0,L12=0,V12=0,L13=0,V13=0, L14=0, V14=0, L15=0, V15=0;

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
            $("#Local11").removeClass("btn-primary");
            $("#Local12").removeClass("btn-primary");
            $("#Local13").removeClass("btn-primary");
            $("#Local14").removeClass("btn-primary");
            $("#Local15").removeClass("btn-primary");
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
            $("#Visitante11").removeClass("btn-primary");
            $("#Visitante12").removeClass("btn-primary");
            $("#Visitante13").removeClass("btn-primary");
            $("#Visitante14").removeClass("btn-primary");
            $("#Visitante15").removeClass("btn-primary");

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
            $("#Partido11").html( "<h4> - </h4>" );
            $("#Partido12").html( "<h4> - </h4>" );
            $("#Partido13").html( "<h4> - </h4>" );
            $("#Partido14").html( "<h4> - </h4>" );
            $("#Partido15").html( "<h4> - </h4>" );
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
            $("#Local11").removeClass("btn-primary");
            $("#Local12").removeClass("btn-primary");
            $("#Local13").removeClass("btn-primary");
            $("#Local14").removeClass("btn-primary");
            $("#Local15").removeClass("btn-primary");
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
            $("#Visitante11").removeClass("btn-primary");
            $("#Visitante12").removeClass("btn-primary");
            $("#Visitante13").removeClass("btn-primary");
            $("#Visitante14").removeClass("btn-primary");
            $("#Visitante15").removeClass("btn-primary");
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

        if(confirm('¿Estas seguro que deseas realizar una(s) apuesta(s) ?'))
        {
            alert('Tu apuesta ha sido exitoso, por favor comunicas con un administrador para que le depositas.');
            // console.log(RespuestaApuesta);
            borrarLEV();
            var baseURL = 'https://api.whatsapp.com/send?phone=+525628121403&text='
            window.open( baseURL + 'Tu boleto de apuesta son:' + '%0A'+ ' '+ '%0A' + RespuestaApuesta + '%0A'+ ' '+ '%0A' + 'Participante: '+ Nombre +'%0A'+'Costo Total: $ '+ CostoTotal ,"_blank");
        }

    }


    // console.log(RespuestaApuesta);

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
    $("#Partido11").html( "<h4> - </h4>" );
    $("#Partido12").html( "<h4> - </h4>" );
    $("#Partido13").html( "<h4> - </h4>" );
    $("#Partido14").html( "<h4> - </h4>" );
    $("#Partido15").html( "<h4> - </h4>" );


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
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");

    if(Local1 === true  & Visitante1 === true) {
        $("#Partido1").html( "<h4> L V </h4>" );
    } else if(Local1 === true & Visitante1 === false) {
        $("#Partido1").html( "<h4> L </h4>" );
    } else if(Local1 === false & Visitante1 === true) {
        $("#Partido1").html( "<h4> V </h4>" );
    } else {
    $("#Partido1").html( "<h4> - </h4>" );
    }

    });


    $("#Visitante1").click(function() {
        var Local1 = $("#Local1").hasClass("btn-primary");
        var Visitante1 = $("#Visitante1").hasClass("btn-primary");



        if(Local1 === true & Visitante1 === true) {
            $("#Partido1").html( "<h4> L V </h4>" );
        } else if(Local1 === true  & Visitante1 === false) {
            $("#Partido1").html( "<h4> L </h4>" );
        } else if(Local1 === false & Visitante1 === true) {
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
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");

   if(Local2 === true & Visitante2 === true) {
        $("#Partido2").html( "<h4> L V </h4>" );
    } else if(Local2 === true & Visitante2 === false) {
        $("#Partido2").html( "<h4> L </h4>" );
    } else if(Local2 === false & Visitante2 === true) {
        $("#Partido2").html( "<h4> V </h4>" );
    } else {
    $("#Partido2").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante2").click(function() {

        var Local2 = $("#Local2").hasClass("btn-primary");
        var Visitante2 = $("#Visitante2").hasClass("btn-primary");



    if(Local2 === true & Visitante2 === true) {
        $("#Partido2").html( "<h4> L V </h4>" );
    } else if(Local2 === true  & Visitante2 === false) {
        $("#Partido2").html( "<h4> L </h4>" );
    } else if(Local2 === false & Visitante2 === true) {
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
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");


    if(Local3 === true  & Visitante3 === true) {
        $("#Partido3").html( "<h4> L V </h4>" );
    } else if(Local3 === true  & Visitante3 === false) {
        $("#Partido3").html( "<h4> L </h4>" );
    } else if(Local3 === false  & Visitante3 === true) {
        $("#Partido3").html( "<h4> V </h4>" );
    } else {
    $("#Partido3").html( "<h4> - </h4>" );
    }

    });


    $("#Visitante3").click(function() {

        var Local3 = $("#Local3").hasClass("btn-primary");
        var Visitante3 = $("#Visitante3").hasClass("btn-primary");


    if(Local3 === true  & Visitante3 === true) {
        $("#Partido3").html( "<h4> L V </h4>" );
    } else if(Local3 === true & Visitante3 === false) {
        $("#Partido3").html( "<h4> L </h4>" );
    } else if(Local3 === false  & Visitante3 === true) {
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
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");


    if(Local4 === true & Visitante4 === true) {
        $("#Partido4").html( "<h4> L V </h4>" );
    } else if(Local4 === true  & Visitante4 === false) {
        $("#Partido4").html( "<h4> L </h4>" );
    } else if(Local4 === false & Visitante4 === true) {
        $("#Partido4").html( "<h4> V </h4>" );
    } else {
    $("#Partido4").html( "<h4> - </h4>" );
    }

    });

    $("#Visitante4").click(function() {

        var Local4 = $("#Local4").hasClass("btn-primary");
        var Visitante4 = $("#Visitante4").hasClass("btn-primary");


    if(Local4 === true &  Visitante4 === true) {
        $("#Partido4").html( "<h4> L V </h4>" );
    } else if(Local4 === true & Visitante4 === false) {
        $("#Partido4").html( "<h4> L </h4>" );
    } else if(Local4 === false & Visitante4 === true) {
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
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");


    if(Local5 === true  & Visitante5 === true) {
        $("#Partido5").html( "<h4> L V </h4>" );
    } else if(Local5 === true & Visitante5 === false) {
        $("#Partido5").html( "<h4> L </h4>" );
    } else if(Local5 === false & Visitante5 === true) {
        $("#Partido5").html( "<h4> V </h4>" );
    } else {
        $("#Partido5").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante5").click(function() {

        var Local5 = $("#Local5").hasClass("btn-primary");
        var Visitante5 = $("#Visitante5").hasClass("btn-primary");

    if(Local5 === true & Visitante5 === true) {
        $("#Partido5").html( "<h4> L V </h4>" );
    } else if(Local5 === true & Visitante5 === false) {
        $("#Partido5").html( "<h4> L </h4>" );
    } else if(Local5 === false & Visitante5 === true) {
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
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");


    if(Local6 === true & Visitante6 === true) {
        $("#Partido6").html( "<h4> L V </h4>" );
    } else if(Local6 === true & Visitante6 === false) {
        $("#Partido6").html( "<h4> L </h4>" );
    } else if(Local6 === false & Visitante6 === true) {
        $("#Partido6").html( "<h4> V </h4>" );
    } else {
        $("#Partido6").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante6").click(function() {

        var Local6 = $("#Local6").hasClass("btn-primary");
        var Visitante6 = $("#Visitante6").hasClass("btn-primary");


    if(Local6 === true & Visitante6 === true) {
        $("#Partido6").html( "<h4> L V </h4>" );
    } else if(Local6 === true & Visitante6 === false) {
        $("#Partido6").html( "<h4> L </h4>" );
    } else if(Local6 === false & Visitante6 === true) {
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
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");


    if(Local7 === true & Visitante7 === true) {
        $("#Partido7").html( "<h4> L V </h4>" );
    } else if(Local7 === true & Visitante7 === false) {
        $("#Partido7").html( "<h4> L </h4>" );
    } else if(Local7 === false  & Visitante7 === true) {
        $("#Partido7").html( "<h4> V </h4>" );
    } else {
        $("#Partido7").html( "<h4> - </h4>" );
    }

    });



    $("#Visitante7").click(function() {

        var Local7 = $("#Local7").hasClass("btn-primary");
        var Visitante7 = $("#Visitante7").hasClass("btn-primary");


    if(Local7 === true & Visitante7 === true) {
        $("#Partido7").html( "<h4> L V </h4>" );
    } else if(Local7 === true  & Visitante7 === false) {
        $("#Partido7").html( "<h4> L </h4>" );
    } else if(Local7 === false & Visitante7 === true) {
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
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");


    if(Local8 === true & Visitante8 === true) {
        $("#Partido8").html( "<h4> L V </h4>" );
    } else if(Local8 === true  & Visitante8 === false) {
        $("#Partido8").html( "<h4> L </h4>" );
    } else if(Local8 === false  & Visitante8 === true) {
        $("#Partido8").html( "<h4> V </h4>" );
    } else {
        $("#Partido8").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante8").click(function() {

        var Local8 = $("#Local8").hasClass("btn-primary");
        var Visitante8 = $("#Visitante8").hasClass("btn-primary");


    if(Local8 === true & Visitante8 === true) {
        $("#Partido8").html( "<h4> L V </h4>" );
    } else if(Local8 === true  & Visitante8 === false) {
        $("#Partido8").html( "<h4> L </h4>" );
    } else if(Local8 === false  & Visitante8 === true) {
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
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");

    if(Local9 === true & Visitante9 === true) {
        $("#Partido9").html( "<h4> L V </h4>" );
    } else if(Local9 === true & Visitante9 === false) {
        $("#Partido9").html( "<h4> L </h4>" );
    } else if(Local9 === false & Visitante9 === true) {
        $("#Partido9").html( "<h4> V </h4>" );
    } else {
        $("#Partido9").html( "<h4> - </h4>" );
    }

    });


    $("#Visitante9").click(function() {

        var Local9 = $("#Local9").hasClass("btn-primary");
        var Visitante9 = $("#Visitante9").hasClass("btn-primary");

    if(Local9 === true & Visitante9 === true) {
        $("#Partido9").html( "<h4> L V </h4>" );
    } else if(Local9 === true & Visitante9 === false) {
        $("#Partido9").html( "<h4> L </h4>" );
    } else if(Local9 === false & Visitante9 === true) {
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
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");


    if(Local10 === true & Visitante10 === true) {
        $("#Partido10").html( "<h4> L V </h4>" );
    } else if(Local10 === true & Visitante10 === false) {
        $("#Partido10").html( "<h4> L </h4>" );
    } else if(Local10 === false & Visitante10 === true) {
        $("#Partido10").html( "<h4> V </h4>" );
    } else {
        $("#Partido10").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante10").click(function() {

        var Local10 = $("#Local10").hasClass("btn-primary");
        var Visitante10 = $("#Visitante10").hasClass("btn-primary");


    if(Local10 === true &  Visitante10 === true) {
        $("#Partido10").html( "<h4> L V </h4>" );
    } else if(Local10 === true  & Visitante10 === false) {
        $("#Partido10").html( "<h4> L </h4>" );
    } else if(Local10 === false & Visitante10 === true) {
        $("#Partido10").html( "<h4> V </h4>" );
    } else {
        $("#Partido10").html( "<h4> - </h4>" );
    }

    });








    

    $("#Local11").click(function() {
        event.preventDefault();
        var Local11 = $("#Local11").hasClass("btn-primary");
        if(Local11 === true) {
            $("#Local11").removeClass("btn-primary");
            --L11;
            QuinielaTotal ()

        } else {
            $("#Local11").addClass("btn-primary");
            ++L11;
            QuinielaTotal ()

        }
    })



    $("#Visitante11").click(function() {
        event.preventDefault();
        var Visitante11 = $("#Visitante11").hasClass("btn-primary");
        if(Visitante11 === true) {
            $("#Visitante11").removeClass("btn-primary");
            --V11;
            QuinielaTotal ()
        } else {
            $("#Visitante11").addClass("btn-primary");
            ++V11;
            QuinielaTotal ()
        }
    })

    $("#Local11").click(function() {

        var Local11 = $("#Local11").hasClass("btn-primary");
        var Visitante11 = $("#Visitante11").hasClass("btn-primary");


    if(Local11 === true & Visitante11 === true) {
        $("#Partido11").html( "<h4> L V </h4>" );
    } else if(Local11 === true & Visitante11 === false) {
        $("#Partido11").html( "<h4> L </h4>" );
    } else if(Local11 === false & Visitante11 === true) {
        $("#Partido11").html( "<h4> V </h4>" );
    } else {
        $("#Partido11").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante11").click(function() {

        var Local11 = $("#Local11").hasClass("btn-primary");
        var Visitante11 = $("#Visitante11").hasClass("btn-primary");


    if(Local11 === true &  Visitante11 === true) {
        $("#Partido11").html( "<h4> L V </h4>" );
    } else if(Local11 === true  & Visitante11 === false) {
        $("#Partido11").html( "<h4> L </h4>" );
    } else if(Local11 === false & Visitante11 === true) {
        $("#Partido11").html( "<h4> V </h4>" );
    } else {
        $("#Partido11").html( "<h4> - </h4>" );
    }

    });











    

    $("#Local12").click(function() {
        event.preventDefault();
        var Local12 = $("#Local12").hasClass("btn-primary");
        if(Local12 === true) {
            $("#Local12").removeClass("btn-primary");
            --L12;
            QuinielaTotal ()

        } else {
            $("#Local12").addClass("btn-primary");
            ++L12;
            QuinielaTotal ()

        }
    })



    $("#Visitante12").click(function() {
        event.preventDefault();
        var Visitante12 = $("#Visitante12").hasClass("btn-primary");
        if(Visitante12 === true) {
            $("#Visitante12").removeClass("btn-primary");
            --V12;
            QuinielaTotal ()

        } else {
            $("#Visitante12").addClass("btn-primary");
            ++V12;
            QuinielaTotal ()

        }
    })

    $("#Local12").click(function() {

        var Local12 = $("#Local12").hasClass("btn-primary");
        var Visitante12 = $("#Visitante12").hasClass("btn-primary");


    if(Local12 === true & Visitante12 === true) {
        $("#Partido12").html( "<h4> L V </h4>" );
    } else if(Local12 === true & Visitante12 === false) {
        $("#Partido12").html( "<h4> L </h4>" );
    } else if(Local12 === false & Visitante12 === true) {
        $("#Partido12").html( "<h4> V </h4>" );
    } else {
        $("#Partido12").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante12").click(function() {

        var Local12 = $("#Local12").hasClass("btn-primary");
        var Visitante12 = $("#Visitante12").hasClass("btn-primary");


    if(Local12 === true &  Visitante12 === true) {
        $("#Partido12").html( "<h4> L V </h4>" );
    } else if(Local12 === true  & Visitante12 === false) {
        $("#Partido12").html( "<h4> L </h4>" );
    } else if(Local12 === false & Visitante12 === true) {
        $("#Partido12").html( "<h4> V </h4>" );
    } else {
        $("#Partido12").html( "<h4> - </h4>" );
    }

    });















    

    $("#Local13").click(function() {
        event.preventDefault();
        var Local13 = $("#Local13").hasClass("btn-primary");
        if(Local13 === true) {
            $("#Local13").removeClass("btn-primary");
            --L13;
            QuinielaTotal ()

        } else {
            $("#Local13").addClass("btn-primary");
            ++L13;
            QuinielaTotal ()

        }
    })



    $("#Visitante13").click(function() {
        event.preventDefault();
        var Visitante13 = $("#Visitante13").hasClass("btn-primary");
        if(Visitante13 === true) {
            $("#Visitante13").removeClass("btn-primary");
            --V13;
            QuinielaTotal ()

        } else {
            $("#Visitante13").addClass("btn-primary");
            ++V13;
            QuinielaTotal ()

        }
    })

    $("#Local13").click(function() {

        var Local13 = $("#Local13").hasClass("btn-primary");
        var Visitante13 = $("#Visitante13").hasClass("btn-primary");


    if(Local13 === true & Visitante13 === true) {
        $("#Partido13").html( "<h4> L V </h4>" );
    } else if(Local13 === true & Visitante13 === false) {
        $("#Partido13").html( "<h4> L </h4>" );
    } else if(Local13 === false & Visitante13 === true) {
        $("#Partido13").html( "<h4> V </h4>" );
    } else {
        $("#Partido13").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante13").click(function() {

        var Local13 = $("#Local13").hasClass("btn-primary");
        var Visitante13 = $("#Visitante13").hasClass("btn-primary");


    if(Local13 === true &  Visitante13 === true) {
        $("#Partido13").html( "<h4> L V </h4>" );
    } else if(Local13 === true  & Visitante13 === false) {
        $("#Partido13").html( "<h4> L </h4>" );
    } else if(Local13 === false & Visitante13 === true) {
        $("#Partido13").html( "<h4> V </h4>" );
    } else {
        $("#Partido13").html( "<h4> - </h4>" );
    }

    });












    

    $("#Local14").click(function() {
        event.preventDefault();
        var Local14 = $("#Local14").hasClass("btn-primary");
        if(Local14 === true) {
            $("#Local14").removeClass("btn-primary");
            --L14;
            QuinielaTotal ()

        } else {
            $("#Local14").addClass("btn-primary");
            ++L14;
            QuinielaTotal ()

        }
    })



    $("#Visitante14").click(function() {
        event.preventDefault();
        var Visitante14 = $("#Visitante14").hasClass("btn-primary");
        if(Visitante14 === true) {
            $("#Visitante14").removeClass("btn-primary");
            --V14;
            QuinielaTotal ()

        } else {
            $("#Visitante14").addClass("btn-primary");
            ++V14;
            QuinielaTotal ()

        }
    })

    $("#Local14").click(function() {

        var Local14 = $("#Local14").hasClass("btn-primary");
        var Visitante14 = $("#Visitante14").hasClass("btn-primary");


    if(Local14 === true & Visitante14 === true) {
        $("#Partido14").html( "<h4> L V </h4>" );
    } else if(Local14 === true & Visitante14 === false) {
        $("#Partido14").html( "<h4> L </h4>" );
    } else if(Local14 === false & Visitante14 === true) {
        $("#Partido14").html( "<h4> V </h4>" );
    } else {
        $("#Partido14").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante14").click(function() {

        var Local14 = $("#Local14").hasClass("btn-primary");
        var Visitante14 = $("#Visitante14").hasClass("btn-primary");


    if(Local14 === true &  Visitante14 === true) {
        $("#Partido14").html( "<h4> L V </h4>" );
    } else if(Local14 === true  & Visitante14 === false) {
        $("#Partido14").html( "<h4> L </h4>" );
    } else if(Local14 === false & Visitante14 === true) {
        $("#Partido14").html( "<h4> V </h4>" );
    } else {
        $("#Partido14").html( "<h4> - </h4>" );
    }

    });







    

    $("#Local15").click(function() {
        event.preventDefault();
        var Local15 = $("#Local15").hasClass("btn-primary");
        if(Local15 === true) {
            $("#Local15").removeClass("btn-primary");
            --L15;
            QuinielaTotal ()

        } else {
            $("#Local15").addClass("btn-primary");
            ++L15;
            QuinielaTotal ()

        }
    })



    $("#Visitante15").click(function() {
        event.preventDefault();
        var Visitante15 = $("#Visitante15").hasClass("btn-primary");
        if(Visitante15 === true) {
            $("#Visitante15").removeClass("btn-primary");
            --V15;
            QuinielaTotal ()

        } else {
            $("#Visitante15").addClass("btn-primary");
            ++V15;
            QuinielaTotal ()

        }
    })

    $("#Local15").click(function() {

        var Local15 = $("#Local15").hasClass("btn-primary");
        var Visitante15 = $("#Visitante15").hasClass("btn-primary");


    if(Local15 === true & Visitante15 === true) {
        $("#Partido15").html( "<h4> L V </h4>" );
    } else if(Local15 === true & Visitante15 === false) {
        $("#Partido15").html( "<h4> L </h4>" );
    } else if(Local15 === false & Visitante15 === true) {
        $("#Partido15").html( "<h4> V </h4>" );
    } else {
        $("#Partido15").html( "<h4> - </h4>" );
    }

    });




    $("#Visitante15").click(function() {

        var Local15 = $("#Local15").hasClass("btn-primary");
        var Visitante15 = $("#Visitante15").hasClass("btn-primary");


    if(Local15 === true &  Visitante15 === true) {
        $("#Partido15").html( "<h4> L V </h4>" );
    } else if(Local15 === true  & Visitante15 === false) {
        $("#Partido15").html( "<h4> L </h4>" );
    } else if(Local15 === false & Visitante15 === true) {
        $("#Partido15").html( "<h4> V </h4>" );
    } else {
        $("#Partido15").html( "<h4> - </h4>" );
    }

    });

});
