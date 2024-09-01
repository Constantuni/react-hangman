const HEAD = (
    <div
        style = {{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: -28
        }}
    ></div>
)

const BODY = (
    <div
        style = {{
            width: "10px",
            height: "100px",
            background: "black",
            position: "absolute",
            top: "120px",
            right: 0
        }}
    ></div> 
)

const R_ARM = (
    <div
        style = {{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom"
        }}
    ></div> 
)

const L_ARM = (
    <div
        style = {{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom"
        }}
    ></div> 
)

const R_LEG = (
    <div
        style = {{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px",
            right: "-100px",
            rotate: "60deg",
            transformOrigin: "left top"
        }}
    ></div>
)

const L_LEG = (
    <div
        style = {{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px",
            right: "10px",
            rotate: "-60deg",
            transformOrigin: "right top"
        }}
></div> 
)

const BODY_PARTS = [
    HEAD,
    BODY,
    R_ARM,
    L_ARM,
    R_LEG,
    L_LEG
]

type HangmanDrawingProps = {
    numberOfGuesses: number
}


export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps){
    return <div
        style = {{
            position:"relative"
        }}
    >
        {BODY_PARTS.slice(0, numberOfGuesses)}

        <div
            style = {{
                height: "50px",
                width: "10px",
                background: "black",
                position: "absolute",
                top: 0,
                right: 0
            }}
        ></div>

        <div
            style = {{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft: "120px"
            }}
        ></div>

        <div
            style = {{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft: "120px"
            }}
        ></div>

        <div
            style = {{
                height: "10px",
                width: "250px",
                background: "black"
            }}
        ></div>


    </div>
}