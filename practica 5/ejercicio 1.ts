function cambio<T,U>(par: [T,U]): [U,T] {
    return [par[1], par[0]]
}

console.log(cambio(["Hola mundo", 100]));