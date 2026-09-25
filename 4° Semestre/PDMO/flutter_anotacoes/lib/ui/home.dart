import 'package:flutter/material.dart';
import '../models/anotacao.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Anotacao> anotacoes = [
    Anotacao(data: "2026-08-05 10:00", texto: "Tomar café da manhã"),
    Anotacao(data: "2026-07-24 12:00", texto: "Almoçar"),
    Anotacao(data: "2026-07-24 15:00", texto: "Tomar café da tarde"),
    Anotacao(data: "2026-07-24 17:00", texto: "Ir para a casa"),
  ];
  String texto = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Anotações"),
        actions: [
          GestureDetector(
            onTap: cadastrar,
            child: Container(
              margin: EdgeInsets.only(right: 20),
              child: Icon(Icons.add),
            ),
          ),
        ],
      ),
      body: Center(
        child: ListView.separated(
          itemBuilder: (context, i) => ListTile(
            title: Text(anotacoes[i].data),
            subtitle: Text(anotacoes[i].texto),
            trailing: Icon(Icons.delete),
          ),
          separatorBuilder: (_, _) => Divider(),
          itemCount: anotacoes.length,
        ),
      ),
    );
  }

  void cadastrar() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text("Nova Anotação"),
        content: TextField(
          onChanged: (value) => setState(() {
            texto = value;
          }),
          decoration: InputDecoration(hintText: "Digite sua anotação"),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              anotacoes.add(Anotacao(data: "2026-08-05", texto: texto));
            },
            child: Text("Salvar"),
          ),
        ],
      ),
    );
  }
}
