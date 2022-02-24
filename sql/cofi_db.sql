-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2022 a las 00:06:49
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cofi_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gramos`
--

CREATE TABLE `gramos` (
  `ID` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gramos`
--

INSERT INTO `gramos` (`ID`, `Cantidad`) VALUES
(1, 250),
(2, 500),
(3, 750),
(4, 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grano`
--

CREATE TABLE `grano` (
  `ID` int(11) NOT NULL,
  `tipoDeGrano` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grano`
--

INSERT INTO `grano` (`ID`, `tipoDeGrano`) VALUES
(1, 'fino'),
(2, 'medio'),
(3, 'grueso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `ID` int(11) NOT NULL,
  `Url` text NOT NULL,
  `Type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`ID`, `Url`, `Type`) VALUES
(1, 'cafe.jpg', 'product');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origen`
--

CREATE TABLE `origen` (
  `ID` int(11) NOT NULL,
  `Pais` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `origen`
--

INSERT INTO `origen` (`ID`, `Pais`) VALUES
(1, 'Brasil'),
(2, 'Costa Rica'),
(3, 'Colombia'),
(4, 'Guatemala');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID` int(11) NOT NULL,
  `OrigenID` int(255) NOT NULL,
  `GranoID` int(255) NOT NULL,
  `CantidadID` int(20) NOT NULL,
  `Precio` bigint(20) NOT NULL,
  `Oferta` tinyint(1) NOT NULL DEFAULT 0,
  `ImagenID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID`, `OrigenID`, `GranoID`, `CantidadID`, `Precio`, `Oferta`, `ImagenID`) VALUES
(1, 1, 1, 1, 4500, 0, 1),
(2, 3, 2, 2, 5000, 1, 1),
(3, 2, 3, 3, 6000, 0, 1),
(4, 4, 2, 4, 7000, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `avatarID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `nombre`, `apellido`, `email`, `password`, `admin`, `avatarID`) VALUES
(9, 'juan', 'lopez', 'juanlopez@cofi.com', 'a123456', 1, NULL),
(10, 'fernando', 'campos', 'fernando@cofi.com', 'a123456', 1, NULL),
(11, 'juanma', 'pereyra', 'juanma@cofi.com', 'a123456', 1, NULL),
(12, 'Alexis', 'Vazquez', 'alexis@cofi.com', 'a123456', 1, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gramos`
--
ALTER TABLE `gramos`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `grano`
--
ALTER TABLE `grano`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `origen`
--
ALTER TABLE `origen`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `origenid` (`OrigenID`),
  ADD KEY `granoid` (`GranoID`),
  ADD KEY `cantidadid` (`CantidadID`),
  ADD KEY `imagenid` (`ImagenID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `avatarID` (`avatarID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gramos`
--
ALTER TABLE `gramos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `grano`
--
ALTER TABLE `grano`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `origen`
--
ALTER TABLE `origen`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`CantidadID`) REFERENCES `gramos` (`ID`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`OrigenID`) REFERENCES `origen` (`ID`),
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`GranoID`) REFERENCES `grano` (`ID`),
  ADD CONSTRAINT `productos_ibfk_5` FOREIGN KEY (`ImagenID`) REFERENCES `imagenes` (`ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`avatarID`) REFERENCES `imagenes` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
