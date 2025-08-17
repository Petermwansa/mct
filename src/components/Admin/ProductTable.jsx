import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ProductTable = ({ products, onEdit, refreshProducts }) => {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      refreshProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price ($)</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.description}</td>
            <td>
              {p.imageUrl && <img src={p.imageUrl} alt={p.name} style={{ width: "50px" }} />}
            </td>
            <td>
              <button onClick={() => onEdit(p)} style={styles.editBtn}>Edit</button>
              <button onClick={() => handleDelete(p.id)} style={styles.deleteBtn}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;

const styles = {
  table: { width: "100%", borderCollapse: "collapse", marginTop: "1rem" },
  editBtn: { marginRight: "0.5rem", padding: "0.5rem", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" },
  deleteBtn: { padding: "0.5rem", background: "red", color: "#fff", border: "none", borderRadius: "5px" },
};
