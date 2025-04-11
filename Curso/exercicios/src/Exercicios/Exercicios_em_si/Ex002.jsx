// outra forma de fazer isso seria passando apenas o parametro props, não necessariamente precisaria criar esses parametros, ai era só definir eles na onde eu estou passando o valor para eles e chamar props.canal por exemplo que iria funcionar da mesma forma, mas acho que fica meio confuso.
function dados({canal,curso,livros,documentação,função}){
    return(
        <section>
            <p>canal:{canal}</p>
            <p>curso:{curso}</p>
            <p>livros {livros}</p>
            <p>documentação{documentação}</p>
            <p>{função}</p>
        </section>
    )
}


export default dados