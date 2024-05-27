



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

-- Cocktails avec leurs tags correspondants
INSERT INTO Cocktail (name, description, ingredients, categoriesId, imgUrl) VALUES
('Blue Lagoon 🌊', 'A vibrant and refreshing cocktail reminiscent of a tropical paradise, featuring blue curaçao, vodka, and lemonade.', '1.5 oz vodka, 1 oz blue curaçao, 4 oz lemonade, Lemon slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/cocktail-azur-table_140725-3974.jpg?t=st=1713876099~exp=1713879699~hmac=55ae69250577bf5776dfb45853d614a233435a171288e3a5557fc44470a5db6c&w=360'),
('Mojito', 'A classic cocktail made with white rum, mint, lime, sugar, and soda water.', '2 oz white rum, 1/2 oz lime juice, 1/2 oz simple syrup, 8 fresh mint leaves, Soda water, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/caipirinha-savoureuse-angle-eleve-citron-vert_23-2149451549.jpg?t=st=1713876440~exp=1713880040~hmac=800b1db216d43f215dfe1cb752e422759bf2dcba4269065743f5047e73841588&w=360'),
('Virgin Mojito', 'A non-alcoholic version of the classic Mojito, with a refreshing blend of mint, lime, and soda water.', 'Fresh mint leaves, 1 lime, 2 tsp sugar, Soda water, Ice cubes', 2, 'https://img.freepik.com/photos-gratuite/caipirinha-savoureuse-angle-eleve-fraises_23-2149451525.jpg?t=st=1713876475~exp=1713880075~hmac=a9b1a9bb4a0cf95060aff5aa8f140db99a51ab73405f0b1a74f21310995af94b&w=360'),
('Lemonade', 'A simple and refreshing drink made with freshly squeezed lemon juice, sugar, and water.', '2 cups freshly squeezed lemon juice, 1 1/2 cups sugar, 8 cups water, Ice cubes', 2, 'https://img.freepik.com/photos-gratuite/vue-face-cocktail-frais-citron-glace-fond-bleu-limonade-fruit-bar-club-couleur-jus-fruits_140725-156465.jpg?t=st=1713876523~exp=1713880123~hmac=9ec17e1e0b406d5be961acac6461062c8512e2529f9e4d4ed8882d88efd33f51&w=996'),
('Tequila Sunrise', 'A classic cocktail made with tequila, orange juice, and grenadine, creating a beautiful sunrise effect.', '2 oz tequila, 4 oz orange juice, 1/2 oz grenadine, Orange slice and cherry for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/delicieuse-caipirinha-angle-bas-au-citron-vert_23-2149407484.jpg?t=st=1713876574~exp=1713880174~hmac=c3d0925bca0847eb04a47d6c7fbc2e19f5d9686acae3cef5cadd682e933eccac&w=360'),
('Piña Colada', 'A tropical cocktail made with rum, coconut cream, and pineapple juice, served blended or shaken with ice.', '2 oz rum, 3 oz pineapple juice, 1 oz cream of coconut, Pineapple slice and cherry for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/delicieux-cocktail-pina-colada_23-2150143183.jpg?t=st=1713876624~exp=1713880224~hmac=7031d925a17213bd7a96b32d1596da7b935c0e6bbd7af0ac5c84fbbdf875be1f&w=360'),
('Sex on the Beach', 'A fruity cocktail made with vodka, peach schnapps, orange juice, and cranberry juice, served over ice.', '1 1/2 oz vodka, 1/2 oz peach schnapps, 2 oz orange juice, 2 oz cranberry juice, Orange slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/close-up-boisson-alcoolisee_1258-12.jpg?t=st=1713876665~exp=1713880265~hmac=0b1c8052af161b80ddf13824c557e61f3a3bdd6466961074f47bfe885a7b2881&w=996'),
('White Russian', 'A creamy cocktail made with vodka, coffee liqueur, and cream, served over ice.', '2 oz vodka, 1 oz coffee liqueur, 1 oz cream, Ice cubes', 1, 'https://img.freepik.com/photos-premium/lait-poule-noel-traditionnel-dans-beau-verre_277015-213.jpg?w=360'),
('Irish Coffee', 'A warm cocktail made with Irish whiskey, coffee, sugar, and cream, perfect for cold evenings.', '1 1/2 oz Irish whiskey, 4 oz hot coffee, 2 tsp sugar, 1 oz cream, Whipped cream for garnish', 1, 'https://img.freepik.com/photos-gratuite/latte-lacte-biscuits-au-chocolat-vanille_114579-3744.jpg?t=st=1713876826~exp=1713880426~hmac=f252520ce20fa26346294cad4c655d71df84b2f2ae749f174e01f3f15d6bdc2a&w=740'),
('Margarita', 'A classic cocktail made with tequila, triple sec, and lime juice, served with a salt rim.', '2 oz tequila, 1 oz triple sec, 1 oz lime juice, Salt for rimming glass, Lime wedge for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-premium/commercial-aliments-boissons_813556-1933.jpg?w=360'),
('Apple Cider Mimosa', 'A seasonal twist on the classic mimosa, made with apple cider and champagne.', '1/2 cup apple cider, 1/2 cup champagne, Apple slice for garnish', 2, 'https://img.freepik.com/photos-gratuite/verre-cocktail-orange-garni-tranches-pomme-verte_140725-6944.jpg?t=st=1713876945~exp=1713880545~hmac=67066aeb8878d601b329f2b2b6f856bfb09969e63df35df2062320c455031f9b&w=360'),
('Pumpkin Spice Latte Martini', 'A fall-inspired cocktail reminiscent of a pumpkin spice latte, made with coffee liqueur, vodka, and pumpkin spice.', '1 oz coffee liqueur, 1 oz vodka, 1/2 oz cream, 1/2 oz pumpkin spice syrup, Ground cinnamon for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/cocktail-decore-zeste-orange-fleurs-sechees_140725-7808.jpg?t=st=1713877001~exp=1713880601~hmac=0ddc791076ef3a07f160c62e159e692a38f5e62790ecd83048fafa216f6b59cb&w=360'),
('Caramel Apple Martini', 'A sweet and tangy cocktail made with apple cider, caramel syrup, vodka, and a caramel rim.', '2 oz apple cider, 1 oz caramel syrup, 1 oz vodka, Caramel syrup for rimming glass, Apple slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-premium/buvez-nappe-or_23-2151423563.jpg?w=360'),
('Cinnamon Apple Whiskey Sour', 'A spiced-up version of the classic whiskey sour, made with apple cider, cinnamon, whiskey, and lemon juice.', '2 oz whiskey, 2 oz apple cider, 1 oz lemon juice, 1/2 oz cinnamon syrup, Apple slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/angle-eleve-du-concept-boisson-delicieuse-aux-pommes_23-2148799214.jpg?t=st=1713877103~exp=1713880703~hmac=c302e80683efb3782c80934493f6fda774f59b93de966616340bc697049d9be5&w=360'),
('Cranberry Cinnamon Whiskey Sour', 'A festive twist on the classic whiskey sour, made with cranberry juice, cinnamon, whiskey, and lemon juice.', '2 oz whiskey, 2 oz cranberry juice, 1 oz lemon juice, 1/2 oz cinnamon syrup, Cranberries for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/arrangement-elegant-alcool-vegetalien_23-2149337769.jpg?t=st=1713877154~exp=1713880754~hmac=7442730ba566219d2cc9f8f0bcbf1a4971fc46e855d3a4764093a499e76f5b91&w=360'),
('Caramel Apple Moscow Mule', 'A fall-inspired twist on the classic Moscow Mule, made with apple cider, caramel syrup, vodka, and ginger beer.', '2 oz vodka, 4 oz apple cider, 1 oz caramel syrup, 6 oz ginger beer, Apple slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/cocktail-au-citron-du-vert-table_140725-4787.jpg?t=st=1713877207~exp=1713880807~hmac=305465bb977b852faf67b53996a247e50c5aed5bdfafea31f489f24b861de6d4&w=360'),
('Cranberry Cider Margarita', 'A seasonal margarita made with cranberry juice, apple cider, tequila, triple sec, and lime juice.', '2 oz tequila, 2 oz cranberry juice, 2 oz apple cider, 1 oz triple sec, 1 oz lime juice, Cranberries for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/cocktail-boisson-alcoolisee-framboise_23-2148722562.jpg?t=st=1713877242~exp=1713880842~hmac=22bf12d84c7f3a9548a0b5434666e805653d6c63ac8ab432e8e8e690e6703b03&w=360'),
('Apple Cider Sangria', 'A refreshing sangria made with apple cider, white wine, brandy, and fruits.', '1 bottle white wine, 1 cup apple cider, 1/2 cup brandy, Apple slices, Orange slices, Cinnamon sticks', 2, 'https://img.freepik.com/photos-gratuite/delicieux-assortiment-boissons-kombucha_23-2148895730.jpg?t=st=1713877291~exp=1713880891~hmac=c71d74a874c91ac86ea70f1798a3f5ec74a6579572370c9fd47cc63ef8aa87f6&w=360'),
('Caramel Apple Hot Toddy', 'A warm and comforting cocktail made with apple cider, caramel syrup, whiskey, and spices.', '1/2 cup apple cider, 1 oz whiskey, 1/2 oz caramel syrup, Cinnamon stick, Cloves, Lemon wedge, Hot water', 1, 'https://img.freepik.com/photos-gratuite/whisky-cannelle-table_140725-75.jpg?t=st=1713878010~exp=1713881610~hmac=0b3e28f1c8df57629c9b8d9f0af9081fd7d14a61f23e537b2b1fcef7b75b9b94&w=360'),
('Spiked Pumpkin Spice Latte', 'A boozy twist on the classic pumpkin spice latte, made with coffee liqueur, rum, and pumpkin spice.', '2 oz coffee liqueur, 1 oz rum, 1/2 oz cream, 1/2 oz pumpkin spice syrup, Whipped cream for garnish, Ground cinnamon for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/boisson-chaude-hiver-verre_23-2148784943.jpg?t=st=1713878062~exp=1713881662~hmac=41eae148215eb7517987cd02c0387761b8034946b2eb87785ab01dcafd9a8acc&w=360'),
('Cinnamon Maple Whiskey Sour', 'A cozy cocktail made with whiskey, lemon juice, maple syrup, and a hint of cinnamon.', '2 oz whiskey, 1 oz lemon juice, 1/2 oz maple syrup, 1/4 tsp ground cinnamon, Lemon slice for garnish, Ice cubes', 1, 'https://img.freepik.com/photos-gratuite/verres-degustation-orange_23-2148261628.jpg?t=st=1713878103~exp=1713881703~hmac=5f34c8da753d0bb09d305d4c036e86202d0e859ea4bd0c4d2a5cf96adfe6852c&w=360');

-- category données

INSERT INTO category (id, name) VALUES
(1, 'Original'),
(2, 'Virgin')

-- tag données

INSERT INTO tag (name) VALUES
('vodka'),
('blue curaçao'),
('lemonade'),
('mint'),
('lime'),
('sugar'),
('soda water'),
('tequila'),
('orange juice'),
('grenadine'),
('rum'),
('coconut cream'),
('pineapple juice'),
('cream of coconut'),
('coffee liqueur'),
('cream'),
('caramel syrup'),
('apple cider'),
('cinnamon'),
('apple slices');


-- Tags associés aux cocktails
INSERT INTO Cocktail_tags_tag (cocktailId, tagId) VALUES
(1, 2), (1, 1), (1, 3), -- Blue Lagoon (vodka, blue curaçao, lemonade)
(2, 1), (2, 4), (2, 5), (2, 6), -- Mojito (vodka, mint, lime, soda water)
(3, 4), (3, 5), -- Virgin Mojito (mint, lime, soda water)
(4, 7), -- Lemonade (lemonade)
(5, 8), (5, 9), (5, 10), -- Tequila Sunrise (tequila, orange juice, grenadine)
(6, 11), (6, 12), (6, 13), -- Piña Colada (rum, coconut cream, pineapple juice)
(7, 1), (7, 14), (7, 15), (7, 9), -- Sex on the Beach (vodka, peach schnapps, orange juice, cranberry juice)
(8, 1), (8, 14), (8, 16), -- White Russian (vodka, coffee liqueur, cream)
(9, 17), (9, 18), -- Irish Coffee (whiskey, coffee)
(10, 1), (10, 10), (10, 9), -- Margarita (tequila, lime juice, salt)
(11, 9), (11, 19), -- Apple Cider Mimosa (apple cider, champagne)
(12, 14), (12, 1), (12, 20), -- Pumpkin Spice Latte Martini (coffee liqueur, vodka, pumpkin spice)
(13, 17), (13, 10), (13, 20), -- Caramel Apple Martini (whiskey, apple cider, caramel syrup)
(14, 17), (14, 9), (14, 10), (14, 16), -- Cinnamon Apple Whiskey Sour (whiskey, apple cider, lemon juice, cinnamon)
(15, 17), (15, 10), (15, 9), (15, 16), -- Cranberry Cinnamon Whiskey Sour (whiskey, cranberry juice, lemon juice, cinnamon)
(16, 17), (16, 9), (16, 10), (16, 20), -- Caramel Apple Moscow Mule (whiskey, apple cider, caramel syrup, ginger beer)
(17, 17), (17, 18), (17, 10), (17, 9), -- Cranberry Cider Margarita (whiskey, apple cider, tequila, lime juice)
(18, 17), (18, 9), (18, 20), -- Apple Cider Sangria (whiskey, apple cider, fruits)
(19, 17), (19, 9), (19, 10), (19, 16), -- Caramel Apple Hot Toddy (whiskey, apple cider, caramel syrup, spices)
(20, 14), (20, 17), (20, 10), (20, 20); -- Spiked Pumpkin Spice Latte (coffee liqueur, whiskey, pumpkin spice)


-- Test divers
 
DROP TABLE category
DROP TABLE cocktail

SELECT * FROM cocktail
SELECT * FROM category
JOIN  category ON cocktail.category_id = category.id
WHERE  category.name='Virgin'

SELECT COUNT(*) AS nb FROM cocktail
WHERE ingredients LIKE '%soda%'

SELECT * FROM cocktail
JOIN Cocktails_by_Tags ON cocktail.id =  Cocktails_by_Tags.cocktailId
JOIN tag ON tag.id =  Cocktails_by_Tags.tagId
WHERE tag.name = 'cream' 

SELECT * FROM cocktail
JOIN Cocktails_by_Tags AS cbt1 ON cocktail.id = cbt1.cocktailId
JOIN Cocktails_by_Tags AS cbt2 ON cocktail.id = cbt2.cocktailId
JOIN tag AS tag1 ON cbt1.tagId = tag1.id
JOIN tag AS tag2 ON cbt2.tagId = tag2.id
WHERE tag1.name = 'cream' AND tag2.name = 'vodka';

SELECT * FROM cocktail 
JOIN  category ON cocktail.categoryId = category.id 
WHERE category.name = 'Virgin' 

DELETE FROM cocktail WHERE name LIKE '%Lagoon%'

SELECT * FROM cocktail WHERE name  LIKE '%Blue%'



