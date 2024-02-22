import React from "react";

export default function TableData({ t_data, visibleColumn }) {
  // here in visibleColumn we can get the information about which header is currently visible and which are not based on that we show the
  // specific div section by go through the visibleColumn array index

  // why go through array index ?
  // Ans : for this specific task the table header will not change dynamically and the posibility of
  // a new header added in the table is low so for this reason and keep the task simple i approached this method.
  // useContext hook is the another option to solve this problem

  return (
    <React.Fragment>
      <div className="row">
        {visibleColumn[0].visible && (
          <>
            <div className="cell">
              <div className="flex">
                <a className="link" href={t_data.title.link}>
                  {t_data.title.name}
                </a>
                <p>Topics : {t_data.title.topic}</p>
                <p>Lesson : {t_data.title.lesson}</p>
              </div>
            </div>
          </>
        )}
        {visibleColumn[1].visible && (
          <>
            <div className="cell ">{t_data.category}</div>
          </>
        )}
        {visibleColumn[2].visible && (
          <>
            <div className="cell ">{t_data.price}</div>
          </>
        )}
        {visibleColumn[3].visible && (
          <>
            <div className="cell ">
              <div className="flex">
                <p>{t_data.date.date}</p>
                <p>{t_data.date.time}</p>
              </div>
            </div>
          </>
        )}
        {visibleColumn[4].visible && (
          <>
            <div className="cell ">
              <p>{t_data.author}</p>
            </div>
          </>
        )}
        {visibleColumn[5].visible && (
          <>
            <div className="cell ">
              <select aria-label="Select an option">
                <option>publish</option>
                <option>Draft</option>
              </select>
            </div>
          </>
        )}
        {visibleColumn[6].visible && (
          <>
            <div className="cell ">
              <button className="edit-button">Edit</button>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}
