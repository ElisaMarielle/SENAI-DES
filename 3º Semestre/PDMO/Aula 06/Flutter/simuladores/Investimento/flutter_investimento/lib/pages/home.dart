import 'package:flutter/material.dart';
import 'invest.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 5, 9, 57),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Text(
                "Simulador de Investimentos",
                style: TextStyle(color: Colors.white, fontSize: 30.0),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => Invest(),
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
