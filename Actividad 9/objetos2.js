<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"/>
    <title>OOJS: Task 2</title>
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
  class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }

    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`El perimetro de ${this.name} es ${perimeter}`);
    }
  }

  class Square extends Shape {
    constructor(sideLength) {
      super('cuadrado', 4, sideLength); // Llama al constructor de la clase padre con los valores predeterminados
    }

    calcArea() {
      const area = this.sideLength ** 2; // Calcula el área del cuadrado (lado al cuadrado)
      console.log(`El area del cuadrado es ${area}`);
    }
  }

  const square = new Square(5); // Crea una instancia de Square con longitud de lado 5
  square.calcPerimeter(); 
  square.calcArea(); 
  </script>
</html>
