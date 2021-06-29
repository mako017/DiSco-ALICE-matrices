CREATE DATABASE IF NOT EXISTS `matrices` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
DROP TABLE IF EXISTS `matrices_results`;
CREATE TABLE `matrices_results` (
  `counter` int(11) NOT NULL,
  `VPCode` text COLLATE utf8_unicode_ci NOT NULL,
  `persCode` text COLLATE utf8_unicode_ci NOT NULL,
  `nickName` text COLLATE utf8_unicode_ci NOT NULL,
  `RT` longtext COLLATE utf8_unicode_ci NOT NULL,
  `response` longtext COLLATE utf8_unicode_ci NOT NULL,
  `log` longtext COLLATE utf8_unicode_ci NOT NULL,
  `phpCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE `matrices_results`
  ADD PRIMARY KEY (`counter`);
ALTER TABLE `matrices_results`
  MODIFY `counter` int(11) NOT NULL AUTO_INCREMENT;