El único error era el siguiente:

Tenía escrito `const cityName = clone.querySelector("city-name");`

`city-name` es una clase, signnifica que ahí toma como si fuera un tag html, por eso no existia

Solo había que corregirlo poniendole un punto haciendo referencia a una clase `const cityName = clone.querySelector(".city-name");`
