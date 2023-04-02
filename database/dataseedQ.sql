
-- queries to populate the database with 50 unique books.

INSERT INTO Author (firstName, lastName) VALUES
('George', 'Orwell'),
('Stephen', 'Hawking'),
('Frank', 'Herbert'),
('Ray', 'Bradbury'),
('Joseph', 'Heller'),
('Madeleine', 'L''Engle'), -- 6
('Toni', 'Morrison'),
('Roald', 'Dahl'),
('E.', 'B. White'), --9
('Gillian', 'Flynn');

INSERT INTO Genre (genreDesc) VALUES
('Dystopian Fiction'),
('Astronomy'),
('Epic Fantasy'),
('American Literature'),
('War Fiction'),
('Young Adult Fantasy'), -- 6
('Coming of Age Fiction'),
('Children''s Classics'),
('Murder Thrillers'); -- 9

INSERT INTO Publisher (publisherName, publishYear) VALUES
('Signet Classic', 1949),
('Bantam', 1998),
('Penguin Publishing Group', 2005),
('Simon & Schuster', 2012),
('Simon & Schuster', 2011),
('Square Fish', 2007), --6
('Vintage', 2004),
('Knopf Books for Young Readers', 2001),
('HarperCollins', 2012), -- 9
('Random House Publishing Group', 2014);

INSERT INTO Book (ISBN, bookTitle, publisherID, genreID, numCopies, bookImage) VALUES
('9780451524935', '1984', 1, 1, 3, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71kxa1-0mfL.jpg'),
('9780553380163', 'A Brief History of Time', 2, 2, 6, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1xkFZX5k-L.jpg'),
('0441013597', 'Dune', 3, 3, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91OoNH1+MHL.jpg'),
('9781451673319', 'Fahrenheit 451', 4, 4, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61z7RDG3OIL.jpg'),
('1451626657', 'Catch-22', 5, 5, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61y5K2gy6pL.jpg'),
('0312367554', 'A Wrinkle in Time', 6, 6, 3, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NvfPTY4hL.jpg'),
('1400033411', 'Beloved', 7, 7, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613vQdXPDwL.jpg'),
('0375815260', 'Charlie and the Chocolate Factory', 8, 8, 4, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51EkR6mNwEL.jpg'),
('0064400557', 'Charlotte''s Web', 9, 8, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/917FQerThOL.jpg'),
('0307588378', 'Gone Girl', 10, 9, 4, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71FZo7-3BnL.jpg');

INSERT INTO Author_Book (authorID, bookID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);