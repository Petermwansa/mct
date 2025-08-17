import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/AuthProvider";
import ProductForm from "../components/Admin/ProductForm";
import ProductTable from "../components/Admin/ProductTable";
import { db } from "../services/firebase";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // here we Check if user exists AND is the admin email
  const adminEmail = "petermwansa401@gmail.com"; // replace with the email you created in Firebase
  if (!user || user.email !== adminEmail) {
    return <p>Unauthorized</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>
      <button onClick={logout} style={{ marginBottom: "1rem" }}>
        Logout
      </button>

      <ProductForm
        selectedProduct={selectedProduct}
        onSave={() => {
          setSelectedProduct(null);
          fetchProducts();
        }}
      />

      <ProductTable
        products={products}
        onEdit={(p) => setSelectedProduct(p)}
        refreshProducts={fetchProducts}
      />
    </div>
  );
};

export default AdminDashboard;
