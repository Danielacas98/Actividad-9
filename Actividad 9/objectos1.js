<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"/>
    <title>OOJS: Task 1</title>
    <style>
      p {
        color: purple;
        margin: 0.5em 0;
      }

      * {
        box-sizing: border-box;
      }
    </style>
    <link rel="stylesheet" href="../styles.css" />
  </head>

  <body>
    <section class="preview">

    </section>

  </body>
  <script>
  // Definición de la clase Shape
  class Shape {
    // Declaración de las propiedades de la clase
    constructor(name, sides, sideLength) {
      this.name = name; // Inicialización de la propiedad name con el valor proporcionado al crear una instancia
      this.sides = sides; // Inicialización de la propiedad sides con el valor proporcionado al crear una instancia
      this.sideLength = sideLength; // Inicialización de la propiedad sideLength con el valor proporcionado al crear una instancia
    }

    // Declaración del método calcPerimeter
    calcPerimeter() {
      // Cálculo del perímetro utilizando las propiedades sides y sideLength de la clase
      const perimeter = this.sides * this.sideLength;
      // Imprime el resultado del cálculo en la consola del navegador
      console.log(`El perimetro de ${this.name} es ${perimeter}`);
    }
  }

  // Creación de una instancia de la clase Shape para un cuadrado
  const square = new Shape('cuadrado', 4, 5);
  // Llamada al método calcPerimeter en la instancia square para calcular y mostrar el perímetro
  square.calcPerimeter(); 

  // Creación de una instancia de la clase Shape para un triángulo
  const triangle = new Shape('triangulo', 3, 3);
  // Llamada al método calcPerimeter en la instancia triangle para calcular y mostrar el perímetro
  triangle.calcPerimeter(); 
  </script>
</html>
