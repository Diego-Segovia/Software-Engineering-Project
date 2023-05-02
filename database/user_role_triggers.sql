-- The following triggers are utilized to validate the 'userRole' value in the 'users' table upon the creation/insertion of a new user. 
-- The triggers use the 'userRole' value to add the user into their respective table, acting as a safety mechanism.

-- Trigger function for Library_Patron
CREATE OR REPLACE FUNCTION validate_user_role_library_patron()
RETURNS TRIGGER AS $$
DECLARE
  role VARCHAR(50);
BEGIN
  SELECT userRole INTO role FROM Users WHERE UserID = NEW.patronID;
  IF role != 'Library_Patron' THEN
    RAISE EXCEPTION 'Invalid userRole value for Library_Patron';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger function for Librarian
CREATE OR REPLACE FUNCTION validate_user_role_librarian()
RETURNS TRIGGER AS $$
DECLARE
  role VARCHAR(50);
BEGIN
  SELECT userRole INTO role FROM Users WHERE UserID = NEW.librarianID;
  IF role != 'Librarian' THEN
    RAISE EXCEPTION 'Invalid userRole value for Librarian';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attaching the trigger functions to their respective table.

-- Trigger for Library_Patron
CREATE TRIGGER library_patron_user_role_check
BEFORE INSERT ON Library_Patron
FOR EACH ROW
EXECUTE FUNCTION validate_user_role_library_patron();

-- Trigger for Librarian
CREATE TRIGGER librarian_user_role_check
BEFORE INSERT ON Librarian
FOR EACH ROW
EXECUTE FUNCTION validate_user_role_librarian();

-- Automating the process of inserting librarians and library patrons into their respective tables.

-- Trigger function for Library_Patron
CREATE OR REPLACE FUNCTION insert_library_patron()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.userRole = 'Library_Patron' THEN
    INSERT INTO Library_Patron (patronID) VALUES (NEW.UserID);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger function for Librarian
CREATE OR REPLACE FUNCTION insert_librarian()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.userRole = 'Librarian' THEN
    INSERT INTO Librarian (librarianID) VALUES (NEW.UserID);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attaching the trigger functions to the users table.

CREATE TRIGGER users_library_patron_insert
AFTER INSERT ON Users
FOR EACH ROW
EXECUTE FUNCTION insert_library_patron();

CREATE TRIGGER users_librarian_insert
AFTER INSERT ON Users
FOR EACH ROW
EXECUTE FUNCTION insert_librarian();
