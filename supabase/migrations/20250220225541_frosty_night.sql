/*
  # Configuration des tables de rôles et permissions

  1. Nouvelles Tables
    - `roles`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `created_at` (timestamp)
    - `user_roles`
      - `user_id` (uuid, foreign key)
      - `role_id` (uuid, foreign key)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for role management
*/

-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create user_roles table
CREATE TABLE IF NOT EXISTS user_roles (
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id uuid REFERENCES roles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, role_id)
);

-- Enable RLS
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage roles"
  ON roles
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Users can view roles"
  ON roles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage user roles"
  ON user_roles
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Users can view their roles"
  ON user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert default roles
INSERT INTO roles (name, description) VALUES
  ('admin', 'Administrateur système'),
  ('parent', 'Parent d''élève'),
  ('staff', 'Personnel de cantine'),
  ('teacher', 'Enseignant'),
  ('developer', 'Développeur'),
  ('supervisor', 'Superviseur')
ON CONFLICT (name) DO NOTHING;