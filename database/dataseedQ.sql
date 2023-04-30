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

INSERT INTO Book (ISBN, bookTitle, publisherID, genreID, numCopies, bookImage, synopsis) VALUES
('9780451524935', '1984', 1, 1, 3, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71kxa1-0mfL.jpg', 'Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can''t escape the fact that Big Brother is always watching...

A startling and haunting novel, 1984 creates an imaginary world that is completely convincing from start to finish. No one can deny the novel''s hold on the imaginations of whole generations, or the power of its admonitions—a power that seems to grow, not lessen, with the passage of time.'),
('9780553380163', 'A Brief History of Time', 2, 2, 6, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1xkFZX5k-L.jpg', 'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking''s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?

Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and "arrows of time," of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation.'),
('0441013597', 'Dune', 3, 3, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91OoNH1+MHL.jpg', 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....

When House Atreides is betrayed, the destruction of Paul''s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad''Dib, he will bring to fruition humankind''s most ancient and unattainable dream. 

A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.'),
('9781451673319', 'Fahrenheit 451', 4, 4, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61z7RDG3OIL.jpg', 'Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television "family." But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn''t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.'),
('1451626657', 'Catch-22', 5, 5, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61y5K2gy6pL.jpg', 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he''s assigned, he''ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.'),
('0312367554', 'A Wrinkle in Time', 6, 6, 3, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NvfPTY4hL.jpg', 'It was a dark and stormy night; Meg Murry, her small brother Charles Wallace, and her mother had come down to the kitchen for a midnight snack when they were upset by the arrival of a most disturbing stranger.

"Wild nights are my glory," the unearthly stranger told them. "I just got caught in a downdraft and blown off course. Let me sit down for a moment, and then I''ll be on my way. Speaking of ways, by the way, there is such a thing as a tesseract."'),
('1400033411', 'Beloved', 7, 7, 5, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613vQdXPDwL.jpg', 'Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. Sethe has too many memories of Sweet Home, the beautiful farm where so many hideous things happened. And Sethe''s new home is haunted by the ghost of her baby, who died nameless and whose tombstone is engraved with a single word: Beloved.'),
('0375815260', 'Charlie and the Chocolate Factory', 8, 8, 4, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51EkR6mNwEL.jpg', 'What happens when the five luckiest children in the entire world walk through the doors of Willy Wonka''s famous, mysterious chocolate factory? What happens when, one by one, the children disobey Mr. Wonka''s orders? In Dahl''s most popular story, the nasty are punished and the good are deliciously, sumptuously rewarded.'),
('0064400557', 'Charlotte''s Web', 9, 8, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/917FQerThOL.jpg', 'Some Pig. Humble. Radiant. These are the words in Charlotte''s Web, high up in Zuckerman''s barn. Charlotte''s spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur''s life when he was born the runt of his litter.'),
('0307588378', 'Gone Girl', 10, 9, 4, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71FZo7-3BnL.jpg', 'On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne''s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn''t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife''s head, but passages from Amy''s diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy''s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he''s definitely bitter—but is he really a killer?');

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

INSERT INTO membership (description) VALUES 
('Loaned Out'),
('Overdue'),
('Lost'),
('Returned'),
('Pending');

INSERT INTO users (firstname, lastname, , userRole, userimage, authusername, authpassword) VALUES
('Pedro', 'Pascal', 'Library_Patron', 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png', 'Pedrito@123', 'Password@123'),
('Emily', 'Dickinson', 'Library_Patron', 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png', 'Em@123', 'Hehe@456'),
('Kennedy', 'Washington', 'Library_Patron', 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png', 'Kenny@123', 'NoQuema@123'),
('Micah', 'Wiltman', 'Librarian', 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png', 'Micah@123', 'Password@123');

INSERT INTO library_patron (patronid, membershipid) VALUES
(1, 1),
(2, 1),
(3, 1);

INSERT INTO librarian (librarianid, staffid) VALUES 
(4, '01');

INSERT INTO fine (fineamt, finedesc) VALUES 
(5, 'Overdue on loan return date.'),
(15, 'Loaned out book was returned damaged.'),
(30, 'Loaned out book was lost.');

INSERT INTO loan (bookid, patronid, librarianid, loandate, returndate, statusid) VALUES
(1, 1, 4, '2023-04-28', '2023-05-28', 1),
(2, 1, 4, '2023-02-22', '2023-03-22', 4);

INSERT INTO loan (bookid, patronid, fineid, librarianid, loandate, returndate, statusid) VALUES
(3, 2, 2, 4, '2023-03-06', '2023-04-06', 4),
(4, 2, 1, 4, '2023-02-22', '2023-03-22', 2);