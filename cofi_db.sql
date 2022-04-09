-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-04-2022 a las 19:54:07
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

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
(1, 'Fino'),
(2, 'Medio'),
(3, 'Grueso');

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
(44, 'avatar-1646853291983.png', 2),
(45, 'avatar-1646858198701.png', 2),
(47, 'avatar-1646861375741.jpeg', 2),
(48, 'avatar-1646861646105.jpeg', 2),
(50, 'avatar-1647123533880.jpeg', 2),
(53, 'avatar-1647123748331.jpeg', 2),
(55, 'avatar-1647613287361.pdf', 2),
(71, 'avatar-1647620316690.jpeg', 2),
(72, 'avatar-1647620475918.jpeg', 2),
(73, 'avatar-1647620559574.png', 2),
(74, 'avatar-1647620576835.png', 2),
(75, 'avatar-1647620699865.jpeg', 2),
(80, 'avatar-1647960712714.jpeg', 2),
(81, 'avatar-1647966082325.jpeg', 2),
(82, 'imagen-1647983006999.jpg', 1),
(83, 'avatar-1647992942302.jpeg', 2),
(84, 'avatar-1648137941289.jpeg', 2),
(85, 'avatar-1648137976882.jpeg', 2),
(86, 'avatar-1648210219764.jpeg', 2),
(87, 'avatar-1648212553578.jpeg', 2),
(88, 'avatar-1648730009390.jpg', 2),
(89, 'avatar-1649002093139.jpeg', 2),
(90, 'imagen-1649106824927.png', 1),
(91, 'avatar-1649168611576.png', 2),
(93, 'imagen-1649169360712.png', 1),
(96, 'avatar-1649525278688.png', 2),
(97, 'imagen-1649525757124.png', 1),
(98, 'imagen-1649525883613.png', 1),
(99, 'imagen-1649526066313.png', 1),
(100, 'imagen-1649526095260.png', 1),
(101, 'imagen-1649526289054.png', 1);

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
(1, 'Egipto'),
(2, 'Costa Rica'),
(3, 'Colombia'),
(4, 'Guatemala'),
(5, 'Etiopia'),
(6, 'Vietnam'),
(7, 'Indonesia'),
(8, 'Malasia');

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
(44, 4, 2, 2, 2500, 0, 82),
(45, 3, 2, 2, 1800, 1, 90),
(47, 2, 3, 4, 1300, 1, 93),
(49, 1, 3, 2, 4500, 0, 97),
(50, 5, 1, 1, 2000, 1, 98),
(51, 6, 1, 2, 3000, 0, 99),
(52, 6, 1, 1, 1999, 1, 100),
(53, 7, 3, 4, 7000, 0, 101);

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
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `avatar` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `admin`, `avatar`) VALUES
(59, 'Mick', 'Jagger', 'jagger@cofi.com ', '$2b$10$0eP2/x/.z1JVV2biptTtFuLOhS0rFHF9s0LZ6VVsCrgv.Cu9ssszm', 1, 80),
(60, 'Juan Diego', 'Lopez', 'juan@cofi.com', '$2b$10$j6dql4sieQRwrd3yXnbM0usaHK/Pfodb4qXHweVIMqUQt2cWANSwi', 1, 85),
(62, 'David', 'Cooperfield', 'mago@cofi.com', '$2b$10$XEMywWnHDAvw0yedGd/u9enwkH0hwFWzuKlBGBUFl51/P2E34shW6', 1, 83),
(66, 'John', 'Lennon', 'john@beatles.com', '$2b$10$QbK2MZQvj9AMO8aW/8llvucjMFNSBsJY3sQeOrV1vGO8vUx63qbZy', 0, 86),
(67, 'Freddie', 'Mercury', 'queen@queen.com', '$2b$10$3NQAlCbQWXC4brNhJcci9.au9dDrjyFnyxFn3zJuvAoUCMNMhkwTq', 0, 87),
(68, 'Marty', 'McFly', 'marty@bttf.com', '$2b$10$C.ChxoY1Dts2oKKt6s5sf.Kw3Duh6QbV8anayd.jvN.Fmif82nexC', 0, 88),
(69, 'Axl', 'Rose', 'axl@guns.com', '$2b$10$OTlTZA.yfar5NldKNOjKSOyD12y7cnGbmZhLsbfk.iMK2SSDUey7m', 0, 89),
(70, 'Buzz', 'Lightyear', 'buzz@cofi.com', '$2b$10$ebCidupkFHOXptAhFQJIrOZkzHzWHz1mYpt2WerYF1UumJlLpoTGu', 1, 91),
(72, 'Woody', 'Pride', 'woody@cofi.com', '$2b$10$6pKw0b82lt33t856ItFkxOI6l/C3j8A2i/BnUCOMw/Snq7.cuhsHW', 1, 96);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `origen`
--
ALTER TABLE `origen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

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
