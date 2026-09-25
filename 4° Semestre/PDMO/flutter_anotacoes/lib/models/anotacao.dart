class Anotacao {
  String data;
  String texto;
  Anotacao({required this.data, required this.texto});
  String toCSV() {
    return '$data,$texto';
  }
}