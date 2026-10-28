import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../splash.dart';
import '../linha.dart';
import '../rota.dart';

class Menu {
  static Drawer ops(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          ListTile(
            trailing: Icon(Icons.chevron_left, size: 50),
            onTap: () => Navigator.pop(context),
          ),
          ListTile(
            leading: Icon(Icons.splitscreen),
            title: Text('Splash'),
            onTap: () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Splash()),
            ),
          ),
          ListTile(
            leading: Icon(Icons.home),
            title: Text('Traçar Linhas'),
            onTap: () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Linha()),
            ),
          ),
          ListTile(
            leading: Icon(Icons.home),
            title: Text('Traçar Rotas'),
            onTap: () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Rota()),
            ),
          ),
          ListTile(
            leading: Icon(Icons.exit_to_app),
            title: Text('Sair'),
            onTap: () => SystemNavigator.pop(),
          ),
        ],
      ),
    );
  }
}