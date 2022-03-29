import React, { useState } from "react";
import classes from "./TeacherHeader.module.scss";

const TeacherHeader = () => {
  const username = "Масыгина Ирина Александровна";
  const [showList, setShowList] = useState(false);

  const openList = () => {
    setShowList(!showList);
  };

  return (
    <nav className={classes.nav}>
      <div className="container">
        <div className={classes.nav__items}>
          <div className={`${classes.nav__item} ${classes.title}`}>
            Тема урока
          </div>
          <div className={classes.nav__item}>
            <div className={`${classes.nav__itemSelect} ${classes.select}`}>
              <img
                src={require("../../../../img/arrow_bottom.png")}
                alt="Стрелка вниз"
              />
              <select>
                <option>Выберите группу</option>
                <option>3ПКС2</option>
              </select>
            </div>
            <div onClick={openList} className={classes.nav__itemUsername}>
              <img
                src={require("../../../../img/arrow_bottom.png")}
                alt="Стрелка вниз"
              />
              <p>{username}</p>
              {showList && (
                <div className={classes.list}>
                  <h2>Изменить пароль</h2>
                </div>
              )}
            </div>
            <h2 className={classes.nav__itemExit}>Выход</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TeacherHeader;
