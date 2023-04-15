import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate(e.target.value);
  };
  return (
    <select className="menu" onChange={handleChange}>
      <option value="/">Home</option>
      <option value="/boolean">Boolean</option>
      <option value="/numbers">Numbers</option>
      <option value="/strings">Strings</option>
      <option value="/object">Object</option>
      <option value="/array1">Array1</option>
      <option value="/array2">Array2</option>
    </select>
  );
};

export default Menu;
