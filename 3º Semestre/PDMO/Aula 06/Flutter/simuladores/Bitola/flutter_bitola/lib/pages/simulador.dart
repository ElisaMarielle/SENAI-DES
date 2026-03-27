import 'package:flutter/material.dart';
import 'home.dart';

class Simulador extends StatefulWidget {
  const Simulador({super.key});

  @override
  State<Simulador> createState() => _SimuladorState();
}

class _SimuladorState extends State<Simulador> {
  double distancia = 0.0;
  double ampere = 0.0;

  //total
  double tensao1 = 0.0;
  double tensao2 = 0.0;
  String tensao127 = '';
  String tensao220 = '';

  void calcular() {
    //bitola para tensao 127v
    tensao1 = (0.86 * distancia * ampere) / 127;

    //bitola para tensao 220v
    tensao2 = (0.86 * distancia * ampere) / 220;

    setState(() {
      tensao127 =
          "Bitola recomendada para tensão 127V: ${tensao1.toStringAsFixed(2)}";

      tensao220 =
          "Bitola recomendada para tensão 220V: ${tensao2.toStringAsFixed(2)}";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.webp"),
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
                      'Elétrica Residencial Cabos de Cobre',
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
                      'Distância em Metros:',
                      style: TextStyle(color: Colors.white),
                    ),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite o valor",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        distancia = double.parse(value);
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
                    Text('Corrente:', style: TextStyle(color: Colors.white)),
                    TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: "Digite a corrente em amperes",
                        labelStyle: TextStyle(color: Colors.white),
                      ),
                      onChanged: (value) {
                        ampere = double.parse(value);
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
                    Text(tensao127, style: TextStyle(color: Colors.white)),
                    Text(tensao220, style: TextStyle(color: Colors.white)),
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
