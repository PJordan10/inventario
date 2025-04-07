/* function expression */
import app from "./app.js";
const main = () => {
    const port = app.get("port");
    app.listen(port, () => {
        console.log(`The company's Super web server is running on port ${port}`);
    });
    
}

main();

/* function declaration */