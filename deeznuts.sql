
-- queries to populate the database with 50 unique books.

INSERT INTO Author (firstName, lastName) VALUES
('George', 'Orwell'),
('Harper', 'Lee'),
('J.K.', 'Rowling'),
('J.R.R.', 'Tolkien'),
('F.', 'Scott Fitzgerald'),
('Jane', 'Austen'),
('Ernest', 'Hemingway'),
('Mark', 'Twain'),
('Arthur', 'Conan Doyle'),
('Mary', 'Shelley'),
('Margaret', 'Mitchell'),
('J.D.', 'Salinger'),
('Emily', 'Bronte'),
('Charles', 'Dickens'),
('Lewis', 'Carroll'),
('Ray', 'Bradbury'),
('Aldous', 'Huxley'),
('William', 'Goldman'),
('Vladimir', 'Nabokov'),
('Joseph', 'Heller'),
('Leo', 'Tolstoy'),
('Miguel', 'de Cervantes'),
('Herman', 'Melville'),
('Antoine', 'de Saint-Exupéry'),
('Gabriel', 'García Márquez'),
('Alexandre', 'Dumas'),
('Oscar', 'Wilde'),
('Bram', 'Stoker'),
('Franz', 'Kafka'),
('Charlotte', 'Brontë'),
('Louisa May', 'Alcott'),
('Victor', 'Hugo'),
('Nathaniel', 'Hawthorne'),
('Fyodor', 'Dostoevsky'),
('James', 'Joyce'),
('H.G.', 'Wells'),
('Edgar Allan', 'Poe'),
('Robert Louis', 'Stevenson'),
('Markus', 'Zusak'),
('John', 'Steinbeck'),
('Salman', 'Rushdie'),
('Jack', 'Kerouac'),
('Margaret', 'Atwood'),
('Kurt', 'Vonnegut'),
('William', 'Shakespeare'),
('Emily', 'St. John Mandel');

INSERT INTO Genre (genreDesc) VALUES
('Dystopian Fiction'),
('Southern Gothic'),
('Fantasy'),
('Epic Fantasy'),
('Classic Literature'),
('Romance'),
('Adventure'),
('Satire'),
('Detective Fiction'),
('Science Fiction'),
('Historical Fiction'),
('Coming-of-Age'),
('Gothic Fiction'),
('Social Criticism'),
('Nonsense'),
('Satirical Fiction'),
('Russian Literature'),
('Spanish Literature'),
('French Literature'),
('Irish Literature'),
('Horror Fiction'),
('Surreal Fiction'),
('American Literature'),
('Travelogue'),
('Post-Apocalyptic Fiction');

INSERT INTO Publisher (publisherName, publishYear) VALUES
('Secker & Warburg', 1949),
('J.B. Lippincott & Co.', 1960),
('Bloomsbury', 1997),
('Allen & Unwin', 1954),
('Charles Scribner'' Sons', 1925),
('Thomas Egerton', 1813),
('Charles Scribner''s Sons', 1952),
('American Publishing Company', 1884),
('Ward, Lock & Co', 1887),
('Lackington, Hughes, Harding, Mavor, & Jones', 1818),
('Macmillan', 1936),
('Little, Brown and Company', 1951),
('Thomas Cautley Newby', 1847),
('Chapman & Hall', 1859),
('Macmillan', 1865),
('Doubleday', 1953),
('Chatto & Windus', 1932),
('Harcourt Brace Jovanovich', 1973),
('Putnam', 1955),
('Simon & Schuster', 1961),
('The Russian Messenger', 1877),
('Francisco de Robles', 1605),
('Harper & Brothers', 1851),
('Reynal & Hitchcock', 1943),
('Editorial Sudamericana', 1967),
('Baudry', 1844),
('Lippincott''s Monthly Magazine', 1890),
('Archibald Constable and Company', 1897),
('Secker & Warburg', 1945),
('Kurt Wolff Verlag', 1925),
('Smith, Elder & Co.', 1847),
('Roberts Brothers', 1868),
('A. Lacroix', 1862),
('Ticknor, Reed & Fields', 1850),
('The Russian Messenger', 1866),
('Sylvia Beach', 1922),
('William Heinemann', 1895),
('Chapman & Hall', 1843),
('Macmillan', 1871),
('Graham''s Magazine', 1841),
('Cassell', 1886),
('Knopf', 2005),
('Viking Press', 1939),
('Jonathan Cape', 1981),
('Viking Press', 1957),
('McClelland and Stewart', 1985),
('Charles Scribner''s Sons', 1940),
('Delacorte', 1969),
('Jaggard', 1623),
('Knopf', 2014);

INSERT INTO Book (bookTitle, authorID, publisherID, genreID, numCopies) VALUES
('1984', 1, 1, 1, 3),
('To Kill a Mockingbird', 2, 2, 2, 6),
('Harry Potter and the Philosopher''s Stone', 3, 3, 3, 5),
('The Lord of the Rings: The Fellowship of the Ring', 4, 4, 4, 5),
('The Great Gatsby', 5, 5, 5, 2),
('Pride and Prejudice', 6, 6, 6, 3),
('The Old Man and the Sea', 7, 7, 7, 5),
('The Adventures of Huckleberry Finn', 8, 8, 8, 4),
('A Study in Scarlet', 9, 9, 9, 4),
('Frankenstein', 10, 10, 10, 4),
('Gone with the Wind', 11, 11, 11, 4),
('The Catcher in the Rye', 12, 12, 12, 3),
('Wuthering Heights', 13, 13, 13, 6),
('A Tale of Two Cities', 14, 14, 14, 7),
('Alice''s Adventures in Wonderland', 15, 15, 15, 7),
('Fahrenheit 451', 16, 16, 1, 3),
('Brave New World', 17, 17, 1, 3),
('The Princess Bride', 18, 18, 16, 4),
('Lolita', 19, 19, 17, 2),
('Catch-22', 20, 20, 8, 4),
('Anna Karenina', 21, 21, 18, 3),
('Don Quixote', 22, 22, 19, 7),
('Moby-Dick', 23, 23, 7, 1000),
('The Little Prince', 24, 24, 20, 7),
('One Hundred Years of Solitude', 25, 25, 19, 6),
('The Count of Monte Cristo', 26, 26, 20, 2),
('The Picture of Dorian Gray', 27, 27, 21, 4),
('Dracula', 28, 28, 10, 3),
('Animal Farm', 29, 1, 8, 4),
('The Metamorphosis', 30, 30, 22, 4),
('Jane Eyre', 31, 31, 18, 2),
('Little Women', 32, 32, 23, 2),
('Les Misérables', 33, 33, 20, 4),
('The Scarlet Letter', 34, 34, 23, 3),
('Crime and Punishment', 35, 35, 18, 7),
('Ulysses', 36, 36, 21, 6),
('The Time Machine', 37, 37, 10, 7),
('A Christmas Carol', 38, 38, 14, 6),
('Through the Looking-Glass', 39, 39, 15, 5),
('The Murders in the Rue Morgue', 40, 40, 9, 7),
('Strange Case of Dr. Jekyll and Mr. Hyde', 41, 41, 13, 7),
('The Book Thief', 42, 42, 16, 5),
('The Grapes of Wrath', 43, 43, 7, 3),
('Midnight''s Children', 44, 44, 16, 2),
('On the Road', 45, 45, 24, 6),
('The Handmaid''s Tale', 46, 46, 1, 4),
('For Whom the Bell Tolls', 47, 47, 7, 7),
('Slaughterhouse-Five', 48, 48, 17, 2),
('Hamlet', 49, 49, 5, 6),
('Station Eleven', 50, 50, 25, 4);

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
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(1, 29),
(29, 30),
(30, 31),
(31, 32),
(32, 33),
(33, 34),
(34, 35),
(35, 36),
(36, 37),
(14, 38),
(15, 39),
(37, 40),
(38, 41),
(39, 42),
(40, 43),
(41, 44),
(42, 45),
(43, 46),
(7, 47),
(44, 48),
(45, 49),
(46, 50);