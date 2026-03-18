class Animal{
    //atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;

    //métodos
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    // Instância
    Animal boi;
    //objeto
    boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    boi = new Vaca(1, "", "", "Nelori", 499.9);
    boi = new Galo(1, "", "", "Nelori", 499.9);
    boi = new Galinha(1, "", "", "Nelori", 499.9);
    boi = new Cachorro(1, "", "", "Nelori", 499.9);
    boi = new Ovelha(1, "", "", "Nelori", 499.9);

    // boi.id = 1;
    // boi.nome = "Bandido";
    // boi.especie = "Bovino";
    // boi.raca = "Nelori";
    // boi.peso = 499.9;

    print(boi.tudoJunto());
}
