import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:http/http.dart' as http;

import 'widgets/menu.dart';

class Rota extends StatefulWidget {
  const Rota({super.key});

  @override
  State<Rota> createState() => _RotaState();
}

class _RotaState extends State<Rota> {
  final LatLng _pontoInicial = LatLng(-22.7130000, -46.8180000); //SESI Amparo
  LatLng? _pontoClicado;
  GoogleMapController? mapController;
  final Map<PolylineId, Polyline> _polylines = {};
  String mensagem = 'Destino: Clique em um ponto no mapa';

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Map traçar Rota")),
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
                onMapCreated: (GoogleMapController controller) {
                  mapController = controller;
                },
                onTap: (LatLng latLng) {
                  setState(() {
                    _pontoClicado = latLng;
                    buscarRota(_pontoInicial, latLng);
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
                          infoWindow: InfoWindow(title: 'Origem'),
                        ),
                      }
                    : {
                        Marker(
                          markerId: MarkerId('_pontoInicial'),
                          position: _pontoInicial,
                          infoWindow: InfoWindow(title: 'Origem'),
                        ),
                        Marker(
                          markerId: MarkerId('clicado'),
                          position: _pontoClicado!,
                          infoWindow: InfoWindow(title: 'Destino'),
                        ),
                      },
                polylines: _polylines.values.toSet(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> buscarRota(LatLng origem, LatLng destino) async {
    final url = Uri.parse(
      'https://router.project-osrm.org/route/v1/driving/'
      '${origem.longitude},${origem.latitude};'
      '${destino.longitude},${destino.latitude}'
      '?overview=full&geometries=geojson',
    );

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);

        if (data['routes'] == null || (data['routes'] as List).isEmpty) {
          debugPrint('OSRM: nenhuma rota encontrada');
          return;
        }

        final coords = data['routes'][0]['geometry']['coordinates'] as List;
        final pontos = coords
            .map<LatLng>((c) => LatLng(c[1].toDouble(), c[0].toDouble()))
            .toList();

        final polyline = Polyline(
          polylineId: const PolylineId('trajeto_osrm'),
          color: Colors.blue,
          width: 5,
          points: pontos,
        );

        setState(() {
          _polylines.clear();
          _polylines[polyline.polylineId] = polyline;
        });

        final bounds = _boundsFromPoints(pontos);
        if (bounds != null) {
          mapController?.animateCamera(
            CameraUpdate.newLatLngBounds(bounds, 48),
          );
        }
      } else {
        debugPrint('OSRM erro: ${response.statusCode} - ${response.body}');
      }
    } catch (e) {
      debugPrint('Erro ao buscar rota OSRM: $e');
    }
  }

  LatLngBounds? _boundsFromPoints(List<LatLng> points) {
    if (points.isEmpty) return null;

    final latitudes = points.map((p) => p.latitude).toList();
    final longitudes = points.map((p) => p.longitude).toList();

    return LatLngBounds(
      southwest: LatLng(
        latitudes.reduce((a, b) => a < b ? a : b),
        longitudes.reduce((a, b) => a < b ? a : b),
      ),
      northeast: LatLng(
        latitudes.reduce((a, b) => a > b ? a : b),
        longitudes.reduce((a, b) => a > b ? a : b),
      ),
    );
  }
}