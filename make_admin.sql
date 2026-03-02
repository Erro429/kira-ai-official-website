
-- Replace 'hustlesaransh@gmail.com' with the email you used to sign up
UPDATE users
SET role = 'admin'
WHERE email = 'hustlesaransh@gmail.com';

-- Verify the update
SELECT * FROM users WHERE email = 'hustlesaransh@gmail.com';
