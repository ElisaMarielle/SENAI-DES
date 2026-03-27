import 'package:flutter/material.dart';
import 'home.dart';
import 'dart:math';

class Invest extends StatefulWidget {
  const Invest({super.key});

  @override
  State<Invest> createState() => _InvestState();
}

class _InvestState extends State<Invest> {
  double invMensal = 0.0;
  int meses = 0;
  double juros = 0.0;
  double taxaDec = 0.0;

  //total
  double totalCJ = 0.0;
  double totalSJ = 0.0;
  String comJuros = '';
  String semJuros = '';

  void calcular() {
    //Com juros
    taxaDec = juros / 100;
    totalCJ = invMensal * (pow(1 + taxaDec, meses) - 1) / taxaDec;
    //sem juros
    totalSJ = invMensal * meses;

    setState(() {
      comJuros =
          "Valor total com juros compostos: R\$ ${totalCJ.toStringAsFixed(2)}";
      semJuros = "Valor total sem juros: R\$ ${totalSJ.toStringAsFixed(2)}";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.jpg"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.5),
              BlendMode.multiply,
            ),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Simulador de Investimentos',
                      style: TextStyle(color: Colors.white),
                    ),
                  ],
                ),
              ),
            ),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Investimento Mensal:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite o valor",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        invMensal = double.parse(value);
                      },
                    ),
                  ],
                ),
              ),
            ),

            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Número de meses:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Quantos mêses dejesa investir?",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        meses = int.parse(value);
                      },
                    ),
                  ],
                ),
              ),
            ),

            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Taxa de Juros aos Mês:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Qual a taxa de juros?",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        juros = double.parse(value);
                      },
                    ),
                  ],
                ),
              ),
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                  onPressed: () => calcular(),
                  child: Text("Simular"),
                ),
                ElevatedButton(
                  onPressed: () => Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(
                      builder: (BuildContext context) => Home(),
                    ),
                  ),
                  child: Text("Voltar"),
                ),
              ],
            ),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(22.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(comJuros, style: TextStyle(color: Colors.white)),
                    Text(semJuros, style: TextStyle(color: Colors.white)),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
