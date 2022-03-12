-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2022 a las 15:34:39
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
  `id` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gramos`
--

INSERT INTO `gramos` (`id`, `Cantidad`) VALUES
(1, 250),
(2, 500),
(3, 750),
(4, 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grano`
--

CREATE TABLE `grano` (
  `id` int(11) NOT NULL,
  `tipoDeGrano` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grano`
--

INSERT INTO `grano` (`id`, `tipoDeGrano`) VALUES
(1, 'fino'),
(2, 'medio'),
(3, 'grueso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `Url` text NOT NULL,
  `Type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `Url`, `Type`) VALUES
(41, 'avatar-1646698456145.jpeg', 0),
(42, 'avatar-1646698801150.jpg', 0),
(43, 'avatar-1646698817040.jpg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origen`
--

CREATE TABLE `origen` (
  `id` int(11) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `origen`
--

INSERT INTO `origen` (`id`, `country`) VALUES
(1, 'Brasil'),
(2, 'Costa Rica'),
(3, 'Colombia'),
(4, 'Guatemala'),
(5, 'Mexico'),
(6, 'Argentina'),
(7, 'Francia'),
(8, 'Chile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `OrigenID` int(255) DEFAULT NULL,
  `GranoID` int(255) DEFAULT NULL,
  `CantidadID` int(20) DEFAULT NULL,
  `Precio` int(20) NOT NULL,
  `Oferta` tinyint(1) NOT NULL DEFAULT 0,
  `ImagenID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `OrigenID`, `GranoID`, `CantidadID`, `Precio`, `Oferta`, `ImagenID`) VALUES
(14, 1, 1, 4, 5600, 0, NULL),
(37, 2, 1, 1, 788, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `password2` text NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `avatar` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `password2`, `admin`, `avatar`) VALUES
(27, 'Martin', 'Palermo', 'palermo@cofi.com', '$2b$10$LmSOh7GjILMyGYpV0AtRRuJ3cRAVeLuT0eudzfX5M1zA3SJ8zvDSm', '0', 1, 43),
(31, 'Juan', 'Diaz', 'juancho@cofi.com', '$2b$10$iFy7bSmskwgHmsbi44N2GeKa1lFho4TpcL2xy3sfWbOdxHGLYWf6W', '0', 1, NULL),
(33, 'alexis', 'sanchez', 'alexis@cofi.com', '$2b$10$GVapNyDXqlgvG5AWVM5ZK.slgPpLuJ7h1ckVYpxOQyCzz0TZuQ06y', '0', 1, NULL),
(34, 'Ric', 'Lopez', 'ricardo@cofi.com', '$2b$10$fjP0/2xTkSDkDMDSA/E89Oo4nVuAi07Xxhm3kUjBMhNa6INmhq55e', 'ric123', 1, NULL),
(35, 'Pedro', 'Troglio', 'troglio@sl.com', '$2b$10$E.vZlC0JqIf2.pfvVuLS8e.NJnTaDl8heobsRNGFHgCItPo2O/bxa', 't123456', 0, NULL),
(36, 'Fernando', 'Campos', 'fernando@cofi.com', '$2b$10$Fz6tBbCvJiC4EJqrqGdavuGqSWwG3.2GEzaEaUuJDh/o7z0okjaAu', 'f123456', 1, 42);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gramos`
--
ALTER TABLE `gramos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grano`
--
ALTER TABLE `grano`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `origen`
--
ALTER TABLE `origen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `origenid` (`OrigenID`),
  ADD KEY `granoid` (`GranoID`),
  ADD KEY `cantidadid` (`CantidadID`),
  ADD KEY `imagenid` (`ImagenID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `avatar` (`avatar`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gramos`
--
ALTER TABLE `gramos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `grano`
--
ALTER TABLE `grano`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `origen`
--
ALTER TABLE `origen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`CantidadID`) REFERENCES `gramos` (`id`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`OrigenID`) REFERENCES `origen` (`id`),
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`GranoID`) REFERENCES `grano` (`id`),
  ADD CONSTRAINT `productos_ibfk_5` FOREIGN KEY (`ImagenID`) REFERENCES `imagenes` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`avatar`) REFERENCES `imagenes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
