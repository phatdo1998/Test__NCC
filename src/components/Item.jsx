import React from "react";

const Item = ({ icon }) => {
  return (
    <div>
      <h1 className="items__heading">Lorem ipsum dolor sit amet</h1>
      <div className="wrapper__items-content">
        <img src={icon} alt="icon" className="items__icons" />
        <div className="items__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </div>
      </div>
      <div className="items__description-bottom">
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </div>
    </div>
  );
};

export default Item;
