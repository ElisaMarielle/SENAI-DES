import 'package:flutter/material.dart';

import 'colors.dart';

abstract class AppTheme {
  static ThemeData temaClaro = ThemeData.light().copyWith(
    scaffoldBackgroundColor: AppColors.c5,
    primaryColor: AppColors.c1,
    drawerTheme: DrawerThemeData(
      backgroundColor: AppColors.c5,
      scrimColor: AppColors.c2,
    ),
    iconTheme: IconThemeData(color: AppColors.c1),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: AppColors.c1,
      foregroundColor: AppColors.c5,
      shape: CircleBorder(),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.c1,
      foregroundColor: AppColors.c4,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.c1,
        foregroundColor: AppColors.c5,
        textStyle: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          fontFamily: 'PatrickHand',
        ),
      ),
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: AppColors.c5,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
      contentTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 16,
        fontFamily: 'PatrickHand',
      ),
    ),
    listTileTheme: ListTileThemeData(
      textColor: AppColors.c1,
      iconColor: AppColors.c2,
      style: ListTileStyle.list,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 16,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
  );
  static ThemeData temaEscuro = ThemeData.dark().copyWith(
    scaffoldBackgroundColor: AppColors.c1,
    primaryColor: AppColors.c5,
    drawerTheme: DrawerThemeData(
      backgroundColor: AppColors.c1,
      scrimColor: AppColors.c5,
    ),
    iconTheme: IconThemeData(color: AppColors.c5),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: AppColors.c5,
      foregroundColor: AppColors.c1,
      shape: CircleBorder(),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.c5,
      foregroundColor: AppColors.c2,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.c5,
        foregroundColor: AppColors.c1,
        textStyle: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          fontFamily: 'PatrickHand',
        ),
      ),
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: AppColors.c1,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
      contentTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 16,
        fontFamily: 'PatrickHand',
      ),
    ),
    listTileTheme: ListTileThemeData(
      textColor: AppColors.c5,
      iconColor: AppColors.c4,
      style: ListTileStyle.list,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 16,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
  );
}