class Autores {
    protected name : string;
    protected nacionalidade : string;
    protected releaseDate : string;
    constructor(name : string, releaseDate : string, nacionalidade : string) {
        this.name = name;
        this.nacionalidade = nacionalidade;
        this.releaseDate = releaseDate;

        console.log(this.name, this.releaseDate, this.nacionalidade);
    }
    public showname() {
        console.log("Name of autor: " + this.name);
    }
    public showNacionalidade() {
        console.log("Nacionalidade: ", this.nacionalidade);
    }
    public showReleasedate() {
        console.log("Release Date Autor: ", this.releaseDate)
    }
}

class Livros extends Autores {
    constructor(name1 : string) {
        super(name1);

    }
}
