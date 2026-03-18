void main(){
    String texto = "Alô Mundo!";
    int numero = 999999988888887777777;
    double n = 0.3333333333333333333;
    bool ativo = false; //verdadeiro ou falso
    var coisa = 10; //não tipada
    dynamic tudo = "oi";
    print(texto);
    print(numero);
    print("Real = "+n.toString()); //concatenação
    print(ativo?"oi":"Tchau"); //? - if      : - else
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}