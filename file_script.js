    function ejcuta()
    {
        /* document hace referencia al documento html o sea a la pagina*/
        /* getElementsByTagName(nom_tag); El documento detecta un elemento por medio de este metodo. Este metodo retorna una array,
        [0] la primera p que encuentre aplique el evento onclick y que llame la funcion onClick()    */
       /* document.getElementsByTagName("p")[0].onclick=onClick;*/

        /* Para hacer el mismo proceso pero por medio del id del elemento */
        /*document.getElementById("importante").onclick=onClick*/

        /* Para recorrer todos los elementos p*/
        /*
        for (let i = 0; i < 3; i++)
        {
            document.getElementsByTagName("p")[i].onclick=onClick
        }
        */

        /* Para hacer el mismo proceso pero a traves de un identificador de clase */
        let r = document.getElementsByClassName("importante")[0].onclick=onClick

    }
    function onClick()
    {
        alert("Olonte Apps desde file_script.js");
    }
    /* Cuando cargue la ventana ejecute la funcion */
    /*window.onload=onClick(); */
    window.onload=ejcuta;

