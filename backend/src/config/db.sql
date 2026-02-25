CREATE DATABASE blog_db;
USE blog_db;
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150)NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE post (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL UNIQUE, 
    content TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);


INSERT INTO user (name, email) VALUES
('Alice Martin', 'alice.martin@example.com'),
('Jean Dupont', 'jean.dupont@example.com'),
('Sophie Bernard', 'sophie.bernard@example.com'),
('Lucas Moreau', 'lucas.moreau@example.com'),
('Emma Leroy', 'emma.leroy@example.com');

INSERT INTO post (title, content, user_id) VALUES
(
  'Bienvenue sur mon blog',
  'Ceci est mon tout premier article sur ce blog. J’espère que vous apprécierez le contenu.',
  1
),
(
  'Pourquoi apprendre le développement web',
  'Le développement web est un domaine passionnant avec de nombreuses opportunités.',
  1
),
(
  'Mon expérience avec MySQL',
  'Dans cet article, je partage mon retour d’expérience sur l’utilisation de MySQL dans mes projets.',
  2
),
(
  'Conseils pour bien débuter en programmation',
  'Commencez par les bases, pratiquez régulièrement et n’ayez pas peur de faire des erreurs.',
  3
),
(
  'Comment organiser ses projets',
  'Une bonne organisation est essentielle pour réussir ses projets informatiques.',
  3
),
(
  'Les erreurs fréquentes des débutants',
  'Voici une liste des erreurs les plus courantes lorsque l’on débute en développement.',
  4
),
(
  'Pourquoi utiliser un framework',
  'Les frameworks permettent de gagner du temps et d’éviter de réinventer la roue.',
  5
);

