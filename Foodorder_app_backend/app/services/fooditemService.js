const fooditemRepository = require("../database/repositories/fooditemRepository");
const expressAsyncHandler = require("express-async-handler");

const createFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.a HERE */
<<<<<<< HEAD
  try {
    const { name, description, image, CategoryId, CuisineId, isVeg } = req.body;
    const result = await fooditemRepository.createFooditem(
      name,
      description,
      image,
      CategoryId,
      CuisineId,
      isVeg
    );
=======
try {
    const { name, description, image } = req.body;
    const result = await fooditemRepository.createFooditem(name, description, image);
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00

    if (result) {
      res.status(201).json({
        message: "Food item created successfully",
      });
    } else {
      res.status(400);
<<<<<<< HEAD

=======
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      throw new Error(`Food item creation failed`);
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD

    res.status(500).json({
      message: "Error creating food item",

=======
    res.status(500).json({
      message: "Error creating food item",
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      error: err.message,
    });
  }
});

const editFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.b HERE */
<<<<<<< HEAD
  try {
=======
try {
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
    const fooditemId = req.params.id;
    const result = await fooditemRepository.editFooditem(fooditemId, req.body);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully edited",
      });
    } else {
      res.status(400);
<<<<<<< HEAD

=======
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      throw new Error(`Food item editing failed`);
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD

    res.status(500).json({
      message: "Error editing food item details",

=======
    res.status(500).json({
      message: "Error editing food item details",
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      error: err.message,
    });
  }
});

const deleteFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.c HERE */
<<<<<<< HEAD
  try {
    const fooditemId = req.params.id;
    const result = await fooditemRepository.deleteFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully deleted",
      });
    } else {
      res.status(400);

      throw new Error(`Food item deletion failed`);
    }
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Error deleting food item",

      error: err.message,
    });
  }
=======
 try {
      const fooditemId = req.params.id;
      const result = await fooditemRepository.deleteFooditem(fooditemId);
  
      if (result) {
        res.status(200).json({
          message: "Food item is successfully deleted",
        });
      } else {
        res.status(400);
        throw new Error(`Food item deletion failed`);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error deleting food item",
        error: err.message,
      });
    }
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
});

const getFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.d HERE */
<<<<<<< HEAD
  try {
=======
try {
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
    const fooditemId = req.params.id;
    const result = await fooditemRepository.getFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        data: result,
<<<<<<< HEAD

=======
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
        message: "Sucessfully fetched food item details.",
      });
    } else {
      res.status(204);
<<<<<<< HEAD

=======
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      throw new Error(
        `Not able to find the food item based on the food item id: ${fooditemId}`
      );
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD

    res.status(500).json({
      message: "Error fetching food item details",

=======
    res.status(500).json({
      message: "Error fetching food item details",
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      error: err.message,
    });
  }
});

const getAllFooditems = expressAsyncHandler(async (req, res) => {
<<<<<<< HEAD
  /* COMPLETE TASK 1.e HERE */
  try {
    const result = await fooditemRepository.getAllFooditems();

    res.status(200).json({
      data: result,

=======
  /* COMPLETE TASK 1.e HERE */try {
    const result = await fooditemRepository.getAllFooditems();
    res.status(200).json({
      data: result,
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      message: "Successfully fetched all food items.",
    });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD

    res.status(500).json({
      message: "Error fetching food items",

=======
    res.status(500).json({
      message: "Error fetching food items",
>>>>>>> 6d0a85076bb7474cc96eddee9b307ff9082e8d00
      error: err.message,
    });
  }
});

module.exports = {
  createFooditem,
  editFooditem,
  deleteFooditem,
  getFooditem,
  getAllFooditems,
};
