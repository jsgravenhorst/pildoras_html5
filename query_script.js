    function ejcuta()
    {
        /* Esta apuntando al primer elemnto que tenga el selector css .importante*/
       /*document.querySelector(".importante").onclick=onClick;*/

        /* Apunte a div y que apunte a los parrafos etiqueta "p" que sean hijos de principal y que sea el ultimo hijo last-child*/
        /*document.querySelector("#principal p:last-child").onclick=onClick;*/

        /*
        for (let i = 0; i < 4; i++)
        {
            // Me retorna en una array todos los elementos p de principal
            let elementos = document.querySelectorAll("#principal p");
            elementos[i].onclick = onClick;
        }
        */

        /* Para iterar sin saber el numero de lementos */
        let elementos = document.querySelectorAll("#principal p, span"); // Le estamos indicando que sean las etiquetas p y span asi no este en el mismo padre
        for (let i = 0; i < elementos.length; i++)
        {
            elementos[i].onclick = onClick;
        }

    }

    function onClick()
    {
        alert("Olonte Apps Elemento ");
    }
    window.onload=ejcuta;
