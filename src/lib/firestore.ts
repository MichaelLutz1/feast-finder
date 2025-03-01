import { User } from "firebase/auth";
import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";


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
        ingredients: [], // Empty list of ingredients for now
      });

      console.log("User document created!");
    } else {
      console.log("User document already exists.");
    }
  } catch (error) {
    console.error("Error handling user login:", error);
  }
};

export const saveIngredients = async (user: User, ingredients: string[]) => {
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
      return docSnap.data().ingredients || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

export const addIngredient = async (userId: string, ingredient: string) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      ingredients: arrayUnion(ingredient),
    });
    console.log("Ingredient added!");
  } catch (error) {
    console.error("Error adding ingredient:", error);
  }
};
