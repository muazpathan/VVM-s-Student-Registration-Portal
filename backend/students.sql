-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2026 at 03:35 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isa_3`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rollNo` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cgpa` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `rollNo`, `department`, `email`, `cgpa`, `createdAt`, `updatedAt`) VALUES
(1, 'Almas Khan', '2435229', 'Commerce', '2435229.almas.sdcce@vvm.edu.in', 9.9, '2026-09-28 13:28:09', '2026-09-28 13:28:09'),
(2, 'Muaz Pathan', '2408059', 'Computer Science', '2408059.muaz.sdcce@vvm.edu.in', 9.9, '2026-09-28 13:28:46', '2026-09-28 13:28:46'),
(3, 'Kishan Naik', '2408056', 'Computer Science', '2408056.kishan.sdcce@vvm.edu.in', 8.36, '2026-09-28 13:30:11', '2026-09-28 13:30:11'),
(4, 'Sohan Naik', '2408073', 'Computer Science', '2408073.sohan.sdcce@vvm.edu.in', 7.6, '2026-09-28 13:32:07', '2026-09-28 13:32:07'),
(5, 'Sakshi Mayekar', '2435150', 'Commerce', '2435150.sakshi.sdcce@vvm.edu.in', 9.36, '2026-09-28 13:32:44', '2026-09-28 13:32:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rollNo` (`rollNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
