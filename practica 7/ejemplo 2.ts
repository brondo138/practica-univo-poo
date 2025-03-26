/*Ejemplo incorrecto de DIP

class MySqlDatabase{
    connect(){
        console.log("Conectando a MySQL...");
    }
}

class UserService{
    constructor(private database: MySqlDatabase){}

    getUser(){
        this.database.connect();
        console.log("Obteniendo usuarios a DB");
    }
}*/

//Ejemplo correcto de DIP

interface Database{
    connect(): void;
}

class MySqlDatabase implements Database{
    connect(): void {
        console.log("Conectando a MySQL...");
    }
}

class PostgreSQL implements Database{
    connect(): void {
        console.log("Conectando a POSTgreSQL...");
    }
}

class UserService{
    constructor(private database: Database){}

    getUser(){
        this.database.connect();
    }
}

const userMysql = new UserService(new MySqlDatabase());
const userPostgresql = new UserService(new PostgreSQL());

userMysql.getUser();
userPostgresql.getUser();