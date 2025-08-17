import { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, app } from "../../services/firebase"; // import your Firebase app

const storage = getStorage(app); // ⚡ pass the app instance

const ProductForm = ({ selectedProduct, onSave }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sizes, setSizes] = useState("");
  const [colors, setColors] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
      setDescription(selectedProduct.description);
      setImageUrl(selectedProduct.imageUrl || "");
      setPreviewUrl(selectedProduct.imageUrl || "");
      setQuantity(selectedProduct.quantity || "");
      setSizes((selectedProduct.sizes || []).join(", "));
      setColors((selectedProduct.colors || []).join(", "));
    } else {
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setPreviewUrl("");
      setImageFile(null);
      setQuantity("");
      setSizes("");
      setColors("");
    }
  }, [selectedProduct]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    try {
      if (!imageFile) return imageUrl; // keep existing
      const storageRef = ref(
        storage,
        `products/${Date.now()}-${imageFile.name}`
      );
      await uploadBytes(storageRef, imageFile);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (err) {
      console.error("Image upload failed:", err);
      throw err; // re-throw so handleSubmit can catch it
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const uploadedImageUrl = await uploadImage();

      const productData = {
        name,
        price,
        description,
        imageUrl: uploadedImageUrl,
        quantity: Number(quantity),
        sizes: sizes
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        colors: colors
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean),
      };

      if (selectedProduct) {
        const productRef = doc(db, "products", selectedProduct.id);
        await updateDoc(productRef, productData);
      } else {
        await addDoc(collection(db, "products"), productData);
      }

      onSave();
      // reset form if needed
      setImageFile(null);
      setUploading(false);
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Failed to save product. Check console for details.");
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{selectedProduct ? "Edit Product" : "Add Product"}</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Sizes (comma separated)"
        value={sizes}
        onChange={(e) => setSizes(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Colors (comma separated)"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
        required
      />

      <div style={styles.uploadWrapper}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              marginLeft: 10,
              borderRadius: 5,
            }}
          />
        )}
      </div>

      <button type="submit" style={styles.button} disabled={uploading}>
        {uploading ? "Uploading..." : selectedProduct ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ProductForm;

const styles = {
  form: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  input: { padding: "0.75rem", border: "1px solid #ddd", borderRadius: "5px" },
  textarea: {
    padding: "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  uploadWrapper: { display: "flex", alignItems: "center", gap: "1rem" },
  button: {
    padding: "0.75rem",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};
