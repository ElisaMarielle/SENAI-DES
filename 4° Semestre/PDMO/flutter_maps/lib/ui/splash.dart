import 'package:flutter/material.dart';

import 'linha.dart';

class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> with TickerProviderStateMixin {
  late AnimationController aumentar;
  double tamanho = 0;

  @override
  void initState() {
    super.initState();
    animacao();
  }

  void animacao() {
    aumentar = AnimationController(vsync: this, duration: Duration(seconds: 2))
      ..addListener(() {
        setState(() {
          tamanho = aumentar.value;
        });
      });
    aumentar.forward().then((value) => irParaHome());
  }

  void irParaHome() async {
    await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => Linha()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Transform.scale(
          scale: tamanho,
          child: Image.asset("assets/icone.png", width: 300),
        ),
      ),
    );
  }
}