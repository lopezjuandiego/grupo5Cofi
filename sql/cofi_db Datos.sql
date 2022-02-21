-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2022 a las 23:45:35
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

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

--
-- Volcado de datos para la tabla `gramos`
--

INSERT INTO `gramos` (`ID`, `Cantidad`) VALUES
(1, 250),
(2, 500),
(3, 750),
(4, 1000);

--
-- Volcado de datos para la tabla `grano`
--

INSERT INTO `grano` (`ID`, `tipoDeGrano`) VALUES
(1, 'fino'),
(2, 'medio'),
(3, 'grueso');

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`ID`, `Url`, `Type`) VALUES
(1, 'cafe.jpg', 'product');

--
-- Volcado de datos para la tabla `origen`
--

INSERT INTO `origen` (`ID`, `Pais`) VALUES
(1, 'Brasil'),
(2, 'Costa Rica'),
(3, 'Colombia'),
(4, 'Guatemala');

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID`, `OrigenID`, `GranoID`, `CantidadID`, `Precio`, `Oferta`, `ImagenID`) VALUES
(1, 1, 1, 1, 4500, 0, 1),
(2, 3, 2, 2, 5000, 1, 1),
(3, 2, 3, 3, 6000, 0, 1),
(4, 4, 2, 4, 7000, 1, 1);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `nombre`, `apellido`, `email`, `password`, `admin`, `avatar`) VALUES
(9, 'juan', 'lopez', 'juanlopez@cofi.com', 'a123456', 1, 0),
(10, 'fernando', 'campos', 'fernando@cofi.com', 'a123456', 1, 1),
(11, 'juanma', 'pereyra', 'juanma@cofi.com', 'a123456', 1, 1),
(12, 'Alexis', 'Vazquez', 'alexis@cofi.com', 'a123456', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
