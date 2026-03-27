import 'package:flutter/material.dart';
import 'simulador.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 62, 29, 3),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Text(
                "Calculadora de Bitola",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 30.0,
                  fontWeight: FontWeight(600),
                ),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => Simulador(),
                  ),
                ),
                child: Text("Entrar"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
