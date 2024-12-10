class Meal {
    constructor(
      id,
      categoryIds, 
      title,
      affordability,
      complexity,
      imageUrl,
      duration,
      ingredients,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
    }
  }


Data = [
    {
        id: 1,
        quote: "Never eat the pitza with pinapple!",
        author: "Arthor Hill",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
        id: 2,
        quote: "blah blah blah",
        author: "Blah Blah",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
        id: 3,
        quote: "blah blah blah",
        author: "Blah Blah",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
        id: 4,
        quote: "blah blah blah",
        author: "Blah Blah",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
    {
        id: 5,
        quote: "blah blah blah",
        author: "Blah Blah",
        story: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    },
]

export default Data;