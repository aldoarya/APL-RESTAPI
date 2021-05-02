require("./models/db");

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const employeeController = require("./controllers/employeeController");

var app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.set("views", path.join(__dirname, "/views"));
app.engine(
    "hbs",
    exphbs({
        extname: "hbs",
        defaultLayout: "mainLayout",
        layoutsDir: __dirname + "/views/layouts",
        runtimeOptions: {
                  allowProtoPropertiesByDefault: true,
                  allowProtoMethodsByDefault: true,
        }
    })
);
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log("Express server started at port: localhost:3000/employee");
});

app.use("/employee", employeeController);