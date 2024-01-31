import React, { useState } from 'react';
import '../styles/CreateEvent.css'
import AdminNav from './AdminNav'

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    videographerDetails: '',
    themeCost: '',
    themeDescription: '',
    photographerDetails: ''
  });

  const [items, setItems] = useState([]);
  const [addOns, setAddOns] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem = { itemName: '', itemCategory: '', price: '' };
    setItems([...items, newItem]);
  };
  const handleAddOn = () => {
    setAddOns([...addOns, { addOnItem: '', addOnPrice: '', addOnImageUrl: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(items);
    // You can handle form submission here, for example, sending the data to an API
  };

  return (
    <div className='ce-page'>
        <div className='ce-nav'>
            <AdminNav/>
        </div>
    <div className='ce-form'> 
        CREATE EVENT  
    <form className='ce-formbox' onSubmit={handleSubmit}>
        <div className='ce-total'>
        <div className='theme-add'>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Name:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Image URL:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Videographer Details:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="videographerDetails"
                    value={formData.videographerDetails}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Theme Cost:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="themeCost"
                    value={formData.themeCost}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Theme Description:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="themeDescription"
                    value={formData.themeDescription}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='theme-inputs'>
                <label className='theme-label'>
                Photographer Details:
                </label>
                <input
                    className='theme-box'
                    type="text"
                    name="photographerDetails"
                    value={formData.photographerDetails}
                    onChange={handleFormChange}
                    required
                />
            </div>
            </div>
        <div className='add-button'>
        <div className='ce-button'>
            <button className='ce-additem' type="button" onClick={handleAddItem}>
            Add Item
            </button>
        </div>
        {items.map((item, index) => (
            <div key={index}>
                    <div className='add-align'>
                    <div className='add-inputs'>
                    <label className='add-label'>
                        Item Name:
                        </label>
                        <input
                        className='add-box'
                        type="text"
                        value={item.itemName}
                        onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                        required
                        />
                    </div>
                    <div className='add-inputs'>
                    <label className='add-label'>
                        Item Category:
                        </label>
                        <input
                        className='add-box'
                        type="text"
                        value={item.itemCategory}
                        onChange={(e) => handleItemChange(index, 'itemCategory', e.target.value)}
                        required
                        />
                    </div>
                    <div className='add-inputs'>
                    <label className='add-label'>
                        Price:
                        </label>
                        <input
                        className='add-box'
                        type="text"
                        value={item.price}
                        onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                        required
                        />
                    </div>
                </div>
            </div>
        ))}
        </div>
        <div>
          <div className='ce-button'>
        <button className='ce-addon' type="button" onClick={handleAddOn}>
          Add On
        </button>
        </div>
        {addOns.map((addOn, index) => (
          <div key={index}>
            <div className='on-align'>
            <div className='on-inputs'>
            <label htmlFor={`addOnItem${index}`}>Add On Item:</label>
            <input
              className='on-box'
              type="text"
              id={`addOnItem${index}`}
              name={`addOnItem${index}`}
              value={addOn.addOnItem}
              onChange={(e) => {
                const newAddOns = [...addOns];
                newAddOns[index].addOnItem = e.target.value;
                setAddOns(newAddOns);
              }}
              required
            />
            </div>
            <div className='on-inputs'>
            <label htmlFor={`addOnPrice${index}`}>Add On Price:</label>
            <input
              className='on-box'
              type="text"
              id={`addOnPrice${index}`}
              name={`addOnPrice${index}`}
              value={addOn.addOnPrice}
              onChange={(e) => {
                const newAddOns = [...addOns];
                newAddOns[index].addOnPrice = e.target.value;
                setAddOns(newAddOns);
              }}
              required
            />
            </div>
            <div className='on-inputs'>
            <label htmlFor={`addOnImageUrl${index}`}>Add On Image URL:</label>
            <input
              className='on-box'
              type="text"
              id={`addOnImageUrl${index}`}
              name={`addOnImageUrl${index}`}
              value={addOn.addOnImageUrl}
              onChange={(e) => {
                const newAddOns = [...addOns];
                newAddOns[index].addOnImageUrl = e.target.value;
                setAddOns(newAddOns);
              }}
              required
            />
            </div>
            </div>
          </div>
        ))}
        </div>
        <div className='ce-button'>
            <button type="submit" className='ce-submit'>Submit</button>
        </div>
        </div>
        </form>
        </div> 
    </div>
  );
};

export default CreateEvent;
