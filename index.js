let buttons = document.querySelectorAll(".links > button")
        buttons.forEach(button =>{
            button.addEventListener("click", ()=>{
                document.querySelectorAll(".test").forEach(box=> box.style.display = "none")
                document.querySelectorAll("input").forEach(box=> box.value = "")
                document.querySelectorAll("p").forEach(box=> box.innerText = "")
                let id = button.className
                document.getElementById(id).style.display = "flex"
            })
        })
        // console.log(buttons)
        
        // console.log(`Area of Triangle: `, 0.5*base*height)
        function areaOfTriangle(){
            let base = document.getElementById("base")
            let height = document.getElementById("height")
            triangleResult.innerText = "Area of Triangle: " + (0.5 * Number(base.value) * Number(height.value)).toFixed(2)
        }

        // console.log(`Area of a square: `, length  * length)
        // console.log(`Area of a Rectangle: `, length  * breadth)
        function areaOfSquare(){
            let length = document.getElementById("length")
            let breadth = document.getElementById("breadth")
            squareResult.innerText = "Area of Square: " +  (Number(length.value) * Number(breadth.value)).toFixed(2)
        }

        // console.log(`Area of a Circle: `, (22/7) * radius * radius)
        function areaOfCircle(){
            let radius = document.getElementById("radius")
            circleResult.innerText = "Area of Circle: " + ((22/7) * Number(radius.value) * Number(radius.value)).toFixed(2)
        }
        
        // console.log(`Area of a Rhombus: `, (diagonalp * diagonalq)/2)
        function areaOfRhombus(){
            let diagonalp = document.getElementById("diagonalp")
            let diagonalq = document.getElementById("diagonalq")
            rhombusResult.innerText = "Area of Rhombus: " + ((Number(diagonalp.value) * Number(diagonalq.value)) / 2).toFixed(2)
        }

        // console.log("Area of a Trapezium: ", (((base1+base2)/2)*height))
        function areaOfTrapezium(){
            let base1 = document.getElementById("base1")
            let base2 = document.getElementById("base2")
            let baseHeight = document.getElementById("baseHeight")
            trapeziumResult.innerText = "Area of Trapezium: " + ((Number(base1.value) + Number(base2.value))/2)* Number(baseHeight.value).toFixed(2)
        }

        // console.log(`Area of Paralellogram: `, base * height)
        function areaOfParalellogram(){   
            let pbase = document.getElementById("pbase")
            let pheight = document.getElementById("pheight")
            paralellogramResult.innerText = "Area of Parallelogram: " + (Number(pbase.value) * Number(pheight.value)).toFixed(2)
        }