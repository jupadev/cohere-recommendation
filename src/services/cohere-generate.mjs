const buildPromp = (ingredients) =>
  `Given a list of ingredients, this program will generate a cocktail recipe.--Ingredients: gin, tonic.\nCocktail recipe: In a highball glass filled with ice cubes, pour the gin, then top with tonic. Ice, gin, and tonic in a glass. Gently stir to combine, but not so much so that you lose carbonation. Gin and tonic in a glass with a stirring spoon. Garnish with a lime wedge or lime slices. Serve and enjoy.\nCocktail name: Gin tonic\n--\nIngredients: rum, soda coke, ice rocks\nCocktail recipe: Fill a highball glass with ice, then add rum and Coca-Cola (soda coke). Garnish with a lime wedge. Squeeze the lime into your drink, if desired.\nCocktail name: Cubalibre\n--\nIngredients: gin, dry vermouth, olive\nCocktail recipe: Place 3 or 4 large ice rocks in a mixing glass. Add water Stir for a few seconds and discard the water. This is only to wash the ices, i.e., rinse them by swirling them with the long bar spoon. This technique is necessary to remove any residue that the ices may have and is also an excellent method to refresh the glass. Add 75 ml of gin and then 12.5 ml of dry vermouth. Then, just refresh the preparation for approximately 45 seconds. Place it in a previously cooled cocktail glass. This can be achieved by simply adding ice, or with a shot of sparkling water that is left to stand while the drink is being prepared. To finish, place an olive on a skewer.\nCocktail name: Dry Martini\n--\nIngredients: fernet, coke, ice\nCocktail recipe: Place 3 or 4 large ice rocks in a mixing glass. Add 30% of fernet and 70% of soda coke and mix it. \nCocktail name: Fernet cola\n--\nIngredients: white rum, lime juice, mint, ice\nCocktail recipe: Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice. Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.\nCocktail name: Mojito\n
  --\nIngredients: ${ingredients}.`;

const cloudflareCohereUrl = "https://cohere-api.jupavar.workers.dev";

export const fetchGenerate = async (ingredients) => {
  const data = {
    prompt: buildPromp(ingredients),
  };

  const response = await fetch(cloudflareCohereUrl, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((resp) => resp.json());

  return response.result;
};
