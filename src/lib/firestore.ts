import { User } from "firebase/auth";
import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { RestaurantType, Recipe, Ingredient } from "@/lib/types";


/**
 * Function to handle user login and create a Firestore document if it doesn't exist.
 * @param user Firebase User object from authentication
 */
export const handleUserLogin = async (user: User) => {
  if (!user) return;

  const userDocRef = doc(db, "users", user.uid);

  try {
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      // Create user document with default data
      await setDoc(userDocRef, {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        email: user.email,
        createdAt: new Date().toISOString(),
        ingredients: [] as Ingredient[], // Empty list of ingredients for now
        restaurants: [] as RestaurantType[], // Empty list of restaurants for now
        recipes: [] as Recipe[], // Empty list of recipes for now
      });

      console.log("User document created!");
    } else {
      console.log("User document already exists.");
    }
  } catch (error) {
    console.error("Error handling user login:", error);
  }
};

export const saveIngredients = async (user: User, ingredients: Ingredient[]) => {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { ingredients }, { merge: true });
    console.log("Ingredients saved!");
  } catch (error) {
    console.error("Error saving ingredients:", error);
  }
};

export const getIngredients = async (user: User) => {
  try {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data().ingredients as Ingredient[] || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

export const addIngredients = async (user: User | null, ingredients: Ingredient[]) => {
  if (!user) return;
  try {
    const userRef = doc(db, "users", user.uid);

    // Fetch existing ingredients from Firestore
    const userSnap = await getDoc(userRef);
    const existingIngredients = userSnap.exists() ? userSnap.data().ingredients || [] : [];

    // Filter out ingredients that are already in the user's list
    const newIngredients = ingredients.filter(
      (ingredient) => !existingIngredients.some((existing: Ingredient) => existing.name === ingredient.name)
    );

    if (newIngredients.length > 0) {
      // Update Firestore only if there are new ingredients
      await updateDoc(userRef, {
        ingredients: arrayUnion(...newIngredients),
      });
      console.log("Ingredient(s) added!");
    } else {
      console.log("No new ingredients to add.");
    }
  } catch (error) {
    console.error("Error adding ingredient:", error);
  }
};

