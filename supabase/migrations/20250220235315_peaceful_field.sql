/*
  # Création des tables pour la gestion des menus et QR codes

  1. Tables créées
    - menus
      - id (uuid, primary key)
      - date (date)
      - starter (text)
      - main_course (text)
      - dessert (text)
      - image_url (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)
    
    - meal_tickets
      - id (uuid, primary key)
      - student_id (uuid, foreign key)
      - qr_code (text)
      - is_used (boolean)
      - used_at (timestamptz)
      - created_at (timestamptz)
      
    - students
      - id (uuid, primary key)
      - parent_id (uuid, foreign key)
      - first_name (text)
      - last_name (text)
      - class (text)
      - created_at (timestamptz)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques d'accès basées sur les rôles
*/

-- Create menus table
CREATE TABLE IF NOT EXISTS menus (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  starter text,
  main_course text NOT NULL,
  dessert text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  class text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create meal_tickets table
CREATE TABLE IF NOT EXISTS meal_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  qr_code text UNIQUE NOT NULL,
  is_used boolean DEFAULT false,
  used_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_tickets ENABLE ROW LEVEL SECURITY;

-- Create policies for menus
CREATE POLICY "Menus are viewable by all authenticated users"
  ON menus
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can manage menus"
  ON menus
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' IN ('staff', 'admin'));

-- Create policies for students
CREATE POLICY "Parents can view their students"
  ON students
  FOR SELECT
  TO authenticated
  USING (parent_id = auth.uid() OR auth.jwt() ->> 'role' IN ('staff', 'admin'));

CREATE POLICY "Parents can manage their students"
  ON students
  FOR ALL
  TO authenticated
  USING (parent_id = auth.uid() OR auth.jwt() ->> 'role' IN ('staff', 'admin'));

-- Create policies for meal_tickets
CREATE POLICY "Users can view their meal tickets"
  ON meal_tickets
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM students
      WHERE students.id = meal_tickets.student_id
      AND (students.parent_id = auth.uid() OR auth.jwt() ->> 'role' IN ('staff', 'admin'))
    )
  );

CREATE POLICY "Staff can manage meal tickets"
  ON meal_tickets
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' IN ('staff', 'admin'));

-- Create function to update menu timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for menus
CREATE TRIGGER update_menus_updated_at
  BEFORE UPDATE ON menus
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();