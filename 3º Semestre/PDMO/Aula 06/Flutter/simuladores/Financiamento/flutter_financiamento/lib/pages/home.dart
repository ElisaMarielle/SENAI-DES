import 'package:flutter/material.dart';
import 'financa.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(9, 62, 55, 1),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Text(
                "Simulador de Financiamento",
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
                    builder: (BuildContext context) => Financa(),
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
