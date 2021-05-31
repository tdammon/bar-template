import React from "react";
import { useHistory } from "react-router-dom";
import style from "./AdminEditPage.module.css";
import { Modal } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AdminEditPage = ({ menuList, updateMenuItem, deleteMenuItem, addMenuItem }) => {
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [addModal, setAddModal] = React.useState(false);

  const [editItem, setEditItem] = React.useState();
  const [editPrice, setEditPrice] = React.useState();
  const [editId, setEditId] = React.useState();
  const [category, setCategory] = React.useState("");
  const [addPrice, setAddPrice] = React.useState();
  const [addNewItem, setAddNewItem] = React.useState();

  const history = useHistory();

  const getGroupNames = (menu) => {
    let tempList = menuList;
    let temp = [];
    for (let item of tempList) {
      if (item.group_name) {
        if (temp.indexOf(item.group_name) === -1) {
          temp.push(item.group_name);
        }
      } else {
        temp.push(null);
        break;
      }
    }
    return temp;
  };

  const openEditModal = () => {
    setEditModal(true);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const openAddModal = () => {
    setAddModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const closeAddModal = () => {
    setAddModal(false);
  };

  const saveEdits = () => {
    updateMenuItem(editItem, editPrice, editId);
    closeEditModal();
  };

  const deleteItem = () => {
    deleteMenuItem(editId, editItem);
    closeDeleteModal();
  };

  const addItem = () => {
      addMenuItem(addNewItem, addPrice, category)
    closeAddModal();
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={style.app}>
      <Modal open={editModal} onClose={closeEditModal}>
        <div className={style.modal}>
          <div className={style.modalForm}>
            <div className={style.modalTitle}>Edit Menu</div>
            <div className={style.editItem}>
              <div>Menu Item</div>
              <input
                value={editItem}
                onChange={(e) => setEditItem(e.target.value)}
              />
            </div>
            <div className={style.editItem}>
              <div>Price</div>
              <input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </div>
            <div className={style.editItem}>
              <button onClick={closeEditModal}>Cancel</button>
              <button onClick={() => saveEdits()}>Save</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={deleteModal} onClose={closeDeleteModal}>
        <div className={style.modal}>
          <div className={style.modalForm}>
            <div className={style.modalTitle}>Delete Item</div>
            <div className={style.editItem}>
              <div>{editItem}</div>
              <div>{editPrice}</div>
            </div>
            <div className={style.editItem}>
              <button onClick={closeDeleteModal}>Cancel</button>
              <button onClick={() => deleteItem()}>Delete</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={addModal} onClose={closeAddModal}>
        <div className={style.modal}>
          <div className={style.modalForm}>
            <div className={style.modalTitle}>Add Item</div>
            <FormControl className={style.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
              >
                {getGroupNames(menuList).map((group_name, index) => (
                  <MenuItem value={group_name}>{group_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={style.itemGroup}>
              <div>Name</div>
              <input
                value={addNewItem}
                onChange={(e) => setAddNewItem(e.target.value)}
              />
            </div>
            <div className={style.itemGroup}>
              <div>Price (do not include $)</div>
              <input
                value={addPrice}
                onChange={(e) => setAddPrice(e.target.value)}
              />
            </div>
            <div className={style.editItem}>
              <button onClick={closeAddModal}>Cancel</button>
              <button onClick={() => addItem()}>Add Item</button>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <button onClick={openAddModal}>Add Menu Item</button>
        <div>Edit Menu</div>
        {getGroupNames(menuList).map((group_name, index) => (
          <div className={style.group}>
            <div className={style.groupName}>{group_name}</div>
            {menuList
              .filter((e) => e.group_name === group_name)
              .map((item, ind) => (
                <div className={style.menuItem} key={ind}>
                  <button
                    className={style.menuButton}
                    onClick={() => {
                      setEditItem(item.item);
                      setEditPrice(item.price);
                      setEditId(item.id);
                      openEditModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={style.menuButton}
                    onClick={() => {
                      setEditItem(item.item);
                      setEditPrice(item.price);
                      setEditId(item.id);
                      openDeleteModal();
                    }}
                  >
                    Delete
                  </button>
                  <div className={style.menuName}>{item.item}</div>
                  <div className={style.menuPrice}>{item.price}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEditPage;
