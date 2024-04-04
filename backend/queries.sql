



CREATE TABLE cocktail (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    description VARCHAR(1024),
    ingredients VARCHAR(1024), 
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id) 
);

CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255)
)
INSERT INTO cocktail (id, name, description, ingredients, category_id) VALUES
(1, 'Mojito', 'Un cocktail rafraîchissant à base de rhum blanc, jus de citron vert, feuilles de menthe, sucre, et eau gazeuse.', '2 oz de rhum blanc, 1 oz de jus de citron vert, 2 cuillères à café de sucre, 6 à 8 feuilles de menthe fraîche, Eau gazeuse', 1),
(2, 'Cosmopolitan', 'Un cocktail classique à base de vodka, jus de canneberge, triple sec, et jus de citron vert frais.', '1,5 oz de vodka, 1 oz de jus de canneberge, 0,5 oz de triple sec, 0,5 oz de jus de citron vert frais', 1),
(3, 'Margarita', 'Un cocktail mexicain populaire à base de tequila, jus de citron vert, et triple sec, servi avec du sel sur le bord du verre.', '2 oz de tequila, 1 oz de jus de citron vert, 0,5 oz de triple sec, Sel pour le bord du verre', 1),
(4, 'Old Fashioned', 'Un cocktail classique à base de whisky, sucre, bitter, et une touche d''agrume.', '2 oz de bourbon ou de whisky de seigle, 1 cube de sucre, 2 traits d''amers Angostura, Zeste d''orange ou de citron pour la garniture', 1),
(5, 'Pina Colada', 'Un cocktail tropical à base de rhum, crème de coco, et jus d''ananas, généralement servi mélangé avec de la glace.', '2 oz de rhum blanc, 3 oz de jus d''ananas, 1 oz de crème de coco, Tranche d''ananas et cerise pour la garniture', 1),
(6, 'Virgin Mojito', 'Une version non alcoolisée rafraîchissante du Mojito classique.', '1 oz de jus de citron vert, 2 cuillères à café de sucre, 6 à 8 feuilles de menthe fraîche, Eau gazeuse', 2),
(7, 'Virgin Cosmopolitan', 'Une version non alcoolisée du Cosmopolitan classique à base de jus de canneberge, triple sec, et jus de citron vert frais.', '1 oz de jus de canneberge, 0,5 oz de triple sec, 0,5 oz de jus de citron vert frais', 2),
(8, 'Virgin Margarita', 'Une version non alcoolisée de la Margarita classique à base de jus de citron vert et de triple sec, servi avec du sel sur le bord du verre.', '1 oz de jus de citron vert, 0,5 oz de triple sec, Sel pour le bord du verre', 2),
(9, 'Virgin Pina Colada', 'Une version non alcoolisée de la Pina Colada classique à base de crème de coco, jus d''ananas, et crème.', '3 oz de jus d''ananas, 1 oz de crème de coco, Tranche d''ananas et cerise pour la garniture', 2),
(10, 'Virgin Mary', 'Une version non alcoolisée de la Bloody Mary classique à base de jus de tomate, d''épices, et d''assaisonnements.', '3 oz de jus de tomate, 0,5 oz de jus de citron, Sauce Worcestershire, Sauce piquante, Sel et poivre, Branche de céleri pour la garniture', 2),
(11, 'Gin and Tonic', 'Un cocktail classique à base de gin et d''eau tonique.', '2 oz de gin, 4 à 6 oz d''eau tonique, Quartier de citron vert pour la garniture', 1),
(12, 'Whiskey Sour', 'Un cocktail acidulé classique à base de whisky, jus de citron, et sirop simple.', '2 oz de bourbon ou de whisky de seigle, 0,75 oz de jus de citron, 0,5 oz de sirop simple, Cerise marasquin pour la garniture', 1),
(13, 'Tom Collins', 'Un cocktail classique à base de gin, jus de citron, sirop simple, et eau gazeuse.', '2 oz de gin, 1 oz de jus de citron, 0,5 oz de sirop simple, Eau gazeuse, Tranche de citron pour la garniture', 1),
(14, 'Tequila Sunrise', 'Un cocktail à base de tequila, jus d''orange, et grenadine, souvent servi non mélangé dans un verre haut.', '2 oz de tequila, 4 oz de jus d''orange, Grenadine', 1),
(15, 'Shirley Temple', 'Un cocktail non alcoolisé classique à base de ginger ale, grenadine, et une cerise marasquin.', '4 oz de ginger ale, 1 oz de grenadine, Cerise marasquin pour la garniture', 2),
(16, 'Piña Colada Mocktail', 'Une version non alcoolisée de la Piña Colada classique à base de crème de coco, jus d''ananas, et crème.', '3 oz de jus d''ananas, 1 oz de crème de coco, Tranche d''ananas et cerise pour la garniture', 2),
(17, 'Mock Champagne', 'Une alternative non alcoolisée au champagne, souvent servi lors de célébrations.', '4 oz de jus de raisin blanc pétillant', 2),
(18, 'Limonade', 'Une boisson non alcoolisée classique à base de jus de citron, d''eau, et de sucre.', '2 oz de jus de citron, 2 oz de sirop simple, 4 oz d''eau', 2);


INSERT INTO category (id, name) VALUES
(1, 'Original'),
(2, 'Virgin')




DROP TABLE category
DROP TABLE cocktail

SELECT * FROM cocktail
SELECT * FROM category
JOIN  category ON cocktail.category_id = category.id
WHERE  category.name='Virgin'

SELECT COUNT(*) AS nb FROM cocktail
WHERE ingredients LIKE '%soda%'

DELETE FROM cocktail WHERE name LIKE '%Lagoon%'

SELECT * FROM cocktail WHERE name  LIKE '%Blue%'



-- INSERT INTO cocktail (id, name, description, ingredients, category_id) VALUES
-- (1, 'Mojito', 'A refreshing cocktail made with white rum, lime juice, mint leaves, sugar, and soda water.', '2 oz white rum, 1 oz lime juice, 2 teaspoons sugar, 6-8 fresh mint leaves, Soda water', 1),
-- (2, 'Cosmopolitan', 'A classic cocktail featuring vodka, cranberry juice, triple sec, and fresh lime juice.', '1.5 oz vodka, 1 oz cranberry juice, 0.5 oz triple sec, 0.5 oz fresh lime juice', 1),
-- (3, 'Margarita', 'A popular Mexican cocktail made with tequila, lime juice, and triple sec, served with salt on the rim.', '2 oz tequila, 1 oz lime juice, 0.5 oz triple sec, Salt for rimming the glass', 1),
-- (4, 'Old Fashioned', 'A classic cocktail made with whiskey, sugar, bitters, and a twist of citrus.', '2 oz bourbon or rye whiskey, 1 sugar cube, 2 dashes Angostura bitters, Orange or lemon twist for garnish', 1),
-- (5, 'Pina Colada', 'A tropical cocktail made with rum, coconut cream, and pineapple juice, typically served blended with ice.', '2 oz white rum, 3 oz pineapple juice, 1 oz coconut cream, Pineapple wedge and cherry for garnish', 1),
-- (6, 'Virgin Mojito', 'A refreshing non-alcoholic version of the classic Mojito.', '1 oz lime juice, 2 teaspoons sugar, 6-8 fresh mint leaves, Soda water', 2),
-- (7, 'Virgin Cosmopolitan', 'A non-alcoholic version of the classic Cosmopolitan featuring cranberry juice, triple sec, and fresh lime juice.', '1 oz cranberry juice, 0.5 oz triple sec, 0.5 oz fresh lime juice', 2),
-- (8, 'Virgin Margarita', 'A non-alcoholic version of the classic Margarita made with lime juice and triple sec, served with salt on the rim.', '1 oz lime juice, 0.5 oz triple sec, Salt for rimming the glass', 2),
-- (9, 'Virgin Pina Colada', 'A non-alcoholic version of the classic Pina Colada made with coconut cream, pineapple juice, and cream.', '3 oz pineapple juice, 1 oz coconut cream, Pineapple wedge and cherry for garnish', 2),
-- (10, 'Virgin Mary', 'A non-alcoholic version of the classic Bloody Mary made with tomato juice, spices, and flavorings.', '3 oz tomato juice, 0.5 oz lemon juice, Worcestershire sauce, Hot sauce, Salt and pepper, Celery stalk for garnish', 2),
-- (11, 'Gin and Tonic', 'A classic cocktail made with gin and tonic water.', '2 oz gin, 4-6 oz tonic water, Lime wedge for garnish', 1),
-- (12, 'Whiskey Sour', 'A classic sour cocktail made with whiskey, lemon juice, and simple syrup.', '2 oz bourbon or rye whiskey, 0.75 oz lemon juice, 0.5 oz simple syrup, Maraschino cherry for garnish', 1),
-- (13, 'Tom Collins', 'A classic gin-based cocktail made with lemon juice, simple syrup, and soda water.', '2 oz gin, 1 oz lemon juice, 0.5 oz simple syrup, Club soda, Lemon slice for garnish', 1),
-- (14, 'Tequila Sunrise', 'A cocktail made with tequila, orange juice, and grenadine, typically served unmixed in a tall glass.', '2 oz tequila, 4 oz orange juice, Grenadine', 1),
-- (15, 'Shirley Temple', 'A classic non-alcoholic cocktail made with ginger ale, grenadine, and a maraschino cherry.', '4 oz ginger ale, 1 oz grenadine, Maraschino cherry for garnish', 2),
-- (16, 'Piña Colada Mocktail', 'A non-alcoholic version of the classic Piña Colada made with coconut cream, pineapple juice, and cream.', '3 oz pineapple juice, 1 oz coconut cream, Pineapple wedge and cherry for garnish', 2),
-- (17, 'Mock Champagne', 'A non-alcoholic alternative to champagne, often served at celebrations.', '4 oz sparkling white grape juice', 2),
-- (18, 'Lemonade', 'A classic non-alcoholic beverage made with lemon juice, water, and sugar.', '2 oz lemon juice, 2 oz simple syrup, 4 oz water', 2)
