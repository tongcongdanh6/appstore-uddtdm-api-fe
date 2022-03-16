-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 16, 2022 at 11:34 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Unclassified'),
(2, 'Business'),
(3, 'Graphic & Design'),
(4, 'Ultilities');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoryId` int(10) NOT NULL DEFAULT 1,
  `thumbnail_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `apple_store_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(1) NOT NULL DEFAULT 0,
  `is_best_seller` int(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `price` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `categoryId`, `thumbnail_url`, `apple_store_url`, `rating`, `is_best_seller`, `created_at`, `updated_at`, `price`) VALUES
(1, 'Craft Editor', 'Craft is a tool for creating beautiful documents and notes and sharing your thoughts. Everything you create in Craft can be shared with one tap. Craft supports inline markdown, backlinks, code snippets, images, videos, attaching PDF files, and rich link previews.', 2, 'assets/images/craft-editor_thumbnail.webp', 'https://apps.apple.com/vn/app/craft-docs-and-notes-editor/id1487937127', 3, 0, '2022-03-09 16:23:32', '2022-03-10 16:23:32', '56000'),
(2, 'Things 3', 'Get things done! The award-winning Things app helps you plan your day, manage your projects, and make real progress toward your goals.\n\n\nBest of all, it’s easy to use. Within the hour, you’ll have everything off your mind and neatly organized—from routine tasks to your biggest life goals—and you can start focusing on what matters today.', 3, 'assets/images/things-3_thumbnail.webp', 'https://apps.apple.com/vn/app/things-3/id904280696?mt=12', 5, 1, '2022-03-11 16:23:39', '2022-03-11 16:23:39', '1090000'),
(3, 'Pixelmator Pro', 'Pixelmator Pro is rated 4.8 out of 5 stars worldwide with over 24,000 five-star ratings.\n\n\nPixelmator Pro is an incredibly powerful, beautiful, and easy-to-use image editor designed exclusively for Mac.', 4, 'assets/images/Pixelmator-pro_thumbnail.webp', 'https://apps.apple.com/vn/app/pixelmator-pro/id1289583905?mt=12', 4, 1, '2022-03-12 16:23:42', '2022-03-12 16:23:42', '899000'),
(4, 'Project Planning Pro', 'Project Management for Mac OS X. Create a project plan in no time by entering tasks, duration and start dates. Use the interactive Gantt chart to edit and update the tasks.', 2, 'assets/images/project-planning-pro_thumbnail.webp', 'https://apps.apple.com/vn/app/project-planning-pro/id888976158?mt=12', 4, 1, '2022-03-13 16:23:46', '2022-03-13 16:23:46', '799000'),
(5, 'Affinity Designer', 'Affinity Designer is the fastest, smoothest, most precise vector graphic design software available. Built from the ground up over a five-year period, every feature, tool, panel and function has been developed with the needs of creative professionals at its core. With continuous innovation and development, the result is a ground-breaking application that will revolutionise how you work.', 3, 'assets/images/affinity-designer_thumbnail.webp', 'https://apps.apple.com/vn/app/affinity-designer/id824171161?mt=12', 5, 0, '2022-03-14 16:23:49', '2022-03-14 16:23:49', '1199000'),
(6, 'Dynamic Wallpaper Engine', 'Dynamic Wallpaper Engine allows you to use live wallpapers on your desktop/screensaver. It provides thousands of live wallpapers in the Workshop while taking as little system resources as possible. It\'s the Wallpaper Engine for Mac.', 1, 'assets/images/dynamic-wallpaper-engine_thumbnail.webp', 'https://apps.apple.com/vn/app/dynamic-wallpaper-engine/id1453504509?mt=12', 2, 0, '2022-03-15 16:23:51', '2022-03-15 16:23:51', '69000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_1` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
