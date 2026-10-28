import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

import 'widgets/menu.dart';

class Linha extends StatefulWidget {
  const Linha({super.key});

  @override
  State<Linha> createState() => _LinhaState();
}

class _LinhaState extends State<Linha> {
  LatLng _pontoInicial = LatLng(-22.7130000, -46.8180000); //SESI Amparo
  LatLng? _pontoClicado;
  Set<Polyline> _linhas = {};
  String mensagem = 'Destino: Clique em um ponto no mapa';

  @override
  void initState() {
    super.initState();
    obterCoordenadasGPS();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Map traçar linha")),
      drawer: Menu.ops(context),
      body: Center(
        child: Column(
          children: [
            Text(
              'Origem: @${_pontoInicial.latitude}, ${_pontoInicial.longitude}',
            ),
            Text(mensagem),
            Expanded(
              child: GoogleMap(
                initialCameraPosition: CameraPosition(
                  target: _pontoInicial,
                  zoom: 15.0,
                ),
                onTap: (LatLng latLng) {
                  setState(() {
                    _pontoClicado = latLng;
                    atualizarLinha();
                    mensagem =
                        'Destino: @${latLng.latitude.toStringAsFixed(7)}, ${latLng.longitude.toStringAsFixed(7)}';
                  });
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text(
                        'Latitude: ${latLng.latitude}, Longitude: ${latLng.longitude}',
                      ),
                      duration: Duration(seconds: 3),
                    ),
                  );
                },
                markers: _pontoClicado == null
                    ? {
                        Marker(
                          markerId: MarkerId('_pontoInicial'),
                          position: _pontoInicial,
                        ),
                      }
                    : {
                        Marker(
                          markerId: MarkerId('_pontoInicial'),
                          position: _pontoInicial,
                        ),
                        Marker(
                          markerId: MarkerId('clicado'),
                          position: _pontoClicado!,
                        ),
                      },
                polylines: _linhas,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> obterCoordenadasGPS() async {
    bool servicoAtivo;
    LocationPermission permissao;
    servicoAtivo = await Geolocator.isLocationServiceEnabled();
    if (!servicoAtivo) {
      return Future.error('O serviço de localização está desativado.');
    }
    permissao = await Geolocator.checkPermission();
    if (permissao == LocationPermission.denied) {
      permissao = await Geolocator.requestPermission();
      if (permissao == LocationPermission.denied) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Permissão de localização negada.')),
          );
        }
      }
    }
    if (permissao == LocationPermission.deniedForever) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              'Permissão negada permanentemente. Altere nas configurações.',
            ),
          ),
        );
      }
    }
    Position position = await Geolocator.getCurrentPosition(
      locationSettings: LocationSettings(),
    );
    setState(() {
      _pontoInicial = LatLng(position.latitude, position.longitude);
    });
    atualizarLinha();
  }

  void atualizarLinha() {
    if (_pontoClicado == null) {
      _linhas = {};
      return;
    }

    final pontos = [_pontoInicial, _pontoClicado!];
    _linhas = {
      Polyline(
        polylineId: PolylineId('linha_unica'),
        points: pontos,
        color: Colors.blue,
        width: 5,
        jointType: JointType.round,
      ),
    };
  }
}