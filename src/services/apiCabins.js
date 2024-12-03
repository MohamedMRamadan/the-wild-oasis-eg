import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return cabins;
}

export async function createUpdateCabin(newCabin, id) {
  const isImageHasPath = newCabin.image?.startsWith?.(supabaseUrl);
  // 1.create / Update cabin
  const imageName = !isImageHasPath
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    : "";
  const imagePath = isImageHasPath
    ? newCabin.image
    : `${import.meta.env.VITE_STORAGE_URL}/${imageName}`;

  // BUILDING QUERY
  let query = supabase.from("cabins");

  //* A) Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //* b) Edit Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data: cabin, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(`cabin couldn't be ${id ? "updated" : "created"}`);
  }
  //* 2.create image
  if (!isImageHasPath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3.Deleting the cabin if there was an error uploading image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", cabin.id);
      console.error(storageError);
      throw new Error(
        "We were unable to upload the image of the cabin, therefore, the cabin could not be created."
      );
    }
  }
  return cabin;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error(`cabin #${id} couldn't be deleted`);
  }
}
