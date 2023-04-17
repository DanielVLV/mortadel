/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './MyDesign.css';

function MyDesign() {
  const [selectedImage, setSelectedImage] = useState('./img/0.png');
  const [craftPaper, setcraftPaper] = useState('./img/paper1.png');

  return (
    <div className="container">
      <div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/1.png" id="Пантера" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Пантера">Пантера</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/2.png" id="Дракон" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Дракон">Дракон</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/4.png" id="Тигр" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Тигр">Тигр</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/3.png" id="Пума" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Пума">Пума</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/5.png" id="Сердечко" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Сердечко">Сердечко</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/6.png" id="Нота" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Нота">Нота</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/7.png" id="Корона" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Корона">Корона</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/8.png" id="Волк" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Волк">Волк</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/9.png" id="Лапки" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Лапки">Лапки</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/11.png" id="Самурай" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Самурай">Самурай</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/12.png" id="Микрофон" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Микрофон">Микрофон</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/13.png" id="Кружка" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Кружка">Кружка</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/14.png" id="Пиво" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Пиво">Пиво</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/15.png" id="Космос" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Космос">Космос</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/16.png" id="Бургер" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Бургер">Бургер</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/17.png" id="Пенное" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Пенное">Пенное</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/18.png" id="Пикник" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Пикник">Пикник</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/20.png" id="Роза" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Роза">Роза</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/21.png" id="Мяч" onChange={(e) => setSelectedImage(e.target.value)} />
          <label htmlFor="Мяч">Мяч</label>
        </div>
      </div>
      <div className="imgPosition">
        <img style={{ borderRadius: '20px' }} src={craftPaper} alt="test" />
        <img className="print" src={selectedImage} alt="img" />
      </div>
      <div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/paper1.png" id="Стандарт" onChange={(e) => setcraftPaper(e.target.value)} />
          <label htmlFor="Стандарт">Стандарт</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/paper2.png" id="Яркий" onChange={(e) => setcraftPaper(e.target.value)} />
          <label htmlFor="Яркий">Яркий</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/paper3.png" id="Зеленый" onChange={(e) => setcraftPaper(e.target.value)} />
          <label htmlFor="Зеленый">Зеленый</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/paper4.png" id="Синий" onChange={(e) => setcraftPaper(e.target.value)} />
          <label htmlFor="Синий">Синий</label>
        </div>
        <div className="radioInput">
          <input type="radio" name="image" value="./img/paper5.png" id="Хаки" onChange={(e) => setcraftPaper(e.target.value)} />
          <label htmlFor="Хаки">Хаки</label>
        </div>
      </div>
    </div>
  );
}

export default MyDesign;
