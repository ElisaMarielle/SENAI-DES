import 'dart:math';

import 'package:flutter/material.dart';
import 'home.dart';

class Financa extends StatefulWidget {
  const Financa({super.key});

  @override
  State<Financa> createState() => _FinancaState();
}

class _FinancaState extends State<Financa> {
  double c = 0.0;
  double juros = 0.0;
  int n = 0;
  double taxasCustos = 0.0;
  double i = 0.0;

  //total
  double m = 0.0;
  double valorParcela = 0.0;
  String totalPagar = '';
  String parcela = '';

  void calcular() {
    //total de tudo
    i = juros / 100;
    m = c * pow(1 + i, n) + taxasCustos;

    //total das Ms
    valorParcela = m / n;

    setState(() {
      totalPagar = "Valor total a ser pago: R\$ ${m.toStringAsFixed(2)}";

      parcela =
          "Valor total das parcelas: R\$ ${valorParcela.toStringAsFixed(2)}";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.png"),
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
                      'Simulador de Financiamento',
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
                      'Valor do Financiamento:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite o valor",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        c = double.parse(value);
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
                      'Taxa de Juros ao Mês:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite a taxa de juros",
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

            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Número de Parcelas:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite o número de parcelas",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        n = int.parse(value);
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
                      'Demais Taxas e Custos:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText:
                            "Digite o total de taxas e custos adicionais",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        taxasCustos = double.parse(value);
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
                    Text(totalPagar, style: TextStyle(color: Colors.white)),
                    Text(parcela, style: TextStyle(color: Colors.white)),
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
