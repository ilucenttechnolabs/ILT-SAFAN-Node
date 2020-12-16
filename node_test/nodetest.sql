-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2020 at 07:17 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodetest`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `nickname`, `title`, `content`, `created_at`) VALUES
(1, 'level', 'Breakdance Becomes an Olympic Sport – level 1', 'Breakdance is a type of street dance. It starts in the US in the 1970s. African Americans start this dance in New York. It quickly gets very popular. It goes all over the world.\n\nA report says that more than a million break dancers are in the world. It is a big number. Many break dancers are happy now. Breakdance becomes an Olympic sport. It will be at the Olympic games in Paris in 2024. It is important news for all the community of break dancers. They will be a part of the Olympic world.\n\nBreak dancers must be strong. Olympic judges will watch other things, too. They will judge style. They will judge dancers´ interesting and unusual tricks.', '2020-12-15 16:59:01'),
(2, 'level', 'Breakdance Becomes an Olympic Sport – level 1', 'Breakdance is a type of street dance. It starts in the US in the 1970s. African Americans start this dance in New York. It quickly gets very popular. It goes all over the world.\r\n\r\nA report says that more than a million break dancers are in the world. It is a big number. Many break dancers are happy now. Breakdance becomes an Olympic sport. It will be at the Olympic games in Paris in 2024. It is important news for all the community of break dancers. They will be a part of the Olympic world.\r\n\r\nBreak dancers must be strong. Olympic judges will watch other things, too. They will judge style. They will judge dancers´ interesting and unusual tricks.', '2020-12-15 16:59:01'),
(3, 'level', 'Breakdance Becomes an Olympic Sport – level 1', 'Breakdance is a type of street dance. It starts in the US in the 1970s. African Americans start this dance in New York. It quickly gets very popular. It goes all over the world.\r\n\r\nA report says that more than a million break dancers are in the world. It is a big number. Many break dancers are happy now. Breakdance becomes an Olympic sport. It will be at the Olympic games in Paris in 2024. It is important news for all the community of break dancers. They will be a part of the Olympic world.\r\n\r\nBreak dancers must be strong. Olympic judges will watch other things, too. They will judge style. They will judge dancers´ interesting and unusual tricks.', '2020-12-15 16:59:01'),
(4, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:48:51'),
(5, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:51:21'),
(6, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:52:22'),
(7, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:54:19'),
(8, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:54:33'),
(9, 'John', 'Title of the article', 'Content of the article', '2020-12-15 19:58:50'),
(10, 'Norma Halvorson', 'Legacy Group Executive', 'Branding', '2020-12-15 21:41:56'),
(11, 'Wendell Simonis', 'International Response Orchestrator', 'Response', '2020-12-15 21:43:13'),
(12, 'Nina Stanton', 'International Program Assistant', 'Response', '2020-12-15 21:43:54'),
(13, 'Ernesto Fahey', 'Corporate Mobility Engineer', 'Dynamic', '2020-12-15 21:45:09'),
(14, 'Winifred Mueller MD', 'National Markets Manager', 'Director', '2020-12-15 21:46:42'),
(15, 'Devin Wilderman', 'Forward Functionality Executive', 'Executive', '2020-12-15 21:50:04'),
(16, 'Terrell Bogisich V', 'Principal Infrastructure Planner', 'Engineer', '2020-12-15 21:52:46'),
(17, 'Ruben Hoeger MD', 'International Marketing Manager', 'Developer', '2020-12-15 21:53:30'),
(18, 'Gilbert Barton', 'Lead Metrics Liaison', 'Representative', '2020-12-15 21:58:18'),
(19, 'Danielle McKenzie', 'Dynamic Factors Associate', 'Coordinator', '2020-12-15 21:58:42'),
(20, 'Francisco Kerluke', 'International Communications Manager', 'Executive', '2020-12-15 22:00:31'),
(21, 'Minnie Corkery IV', 'Legacy Integration Liaison', 'Agent', '2020-12-15 22:00:57'),
(22, 'Kevin Koelpin', 'International Data Developer', 'Representative', '2020-12-15 22:03:30'),
(23, 'Max Schumm', 'Global Implementation Officer', 'Liaison', '2020-12-15 22:08:14');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `parant_id` int(11) DEFAULT NULL,
  `nickname` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `article_id`, `parant_id`, `nickname`, `content`, `created_at`) VALUES
(2, 1, NULL, 'John', 'The content field is mandatory.', '2020-12-15 17:54:58'),
(3, 1, 2, 'John', 'The content field is mandatory.', '2020-12-15 17:58:04'),
(4, 10, NULL, 'Mindy Wunsch', 'Planner', '2020-12-15 21:58:42'),
(5, 9, NULL, 'Mrs. Wendy Kulas', 'Planner', '2020-12-15 22:00:31'),
(6, 7, NULL, 'Desiree Rogahn', 'Manager', '2020-12-15 22:00:57'),
(7, 7, NULL, 'Desiree Rogahn', 'Manager', '2020-12-15 22:00:57'),
(8, 7, NULL, 'Harvey Lubowitz', 'Producer', '2020-12-15 22:03:30'),
(9, 7, NULL, 'Harvey Lubowitz', 'Producer', '2020-12-15 22:03:30'),
(10, 4, NULL, 'Guadalupe Kuhlman', 'Director', '2020-12-15 22:08:14'),
(11, 4, NULL, 'Guadalupe Kuhlman', 'Director', '2020-12-15 22:08:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
