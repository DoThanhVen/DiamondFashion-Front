import React, { useState } from "react";
import style from "../../css/admin/category/listcategory.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "react-bootstrap/Nav";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const numberPage = 10;
const listCategory = [
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: true,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: true,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: true,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: true,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      },
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  },
  {
    idCategory: "category001",
    categoryName: "Tên Loại",
    image: "banner-left.jpg",
    status: false,
    listCategoryItem: [
      {
        idCategoryItem: "item123",
        categoryItemName: "Tên Phân Loại Sản Phẩm"
      }
    ]
  }
];

function ListCategory() {
  //PAGE
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listCategory.length / numberPage);

  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
  const startIndex = (currentPage - 1) * numberPage;
  const endIndex = startIndex + numberPage;

  const listPage = listCategory.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <div className={style.listCategory}>
        <div className={style.heading}>
          <div className={style.column}>
            <label className={style.title}>Danh sách phân loại sản phẩm</label>
          </div>
        </div>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>ID</label>
            <label className={style.column}>Mã loại</label>
            <label className={style.column}>Hình ảnh</label>
            <label className={style.column}>Tên loại</label>
            <label className={style.column}>Danh sách loại</label>
            <label className={style.column}>Trạng thái</label>
            <label className={style.column}></label>
          </div>
          {listPage.map((value, index) => (
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {currentPage * numberPage - numberPage + index + 1}
              </label>
              <label className={style.column}>{value.idCategory}</label>
              <label className={style.column}>
                <img
                  className={style.image}
                  src={`/images/${value.image}`}
                  alt="Hình Ảnh"
                ></img>
              </label>
              <label className={style.column}>{value.categoryName}</label>
              <div className={style.column}>
                {value.listCategoryItem.map((valueCategory, indexCategory) => (
                  <ul key={indexCategory} className={style.menu}>
                    <li className={style.menuItem}>
                      {valueCategory.categoryItemName}
                      <a
                        className={style.buttonEditItem}
                        href={`#${valueCategory.idCategoryItem}`}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
              <label className={style.column}>
                <span
                  className={style.status}
                  style={{ backgroundColor: value.status ? "green" : "red" }}
                >
                  {value.status ? "Đang hoạt động" : "Dừng hoạt động"}
                </span>
              </label>
              <label className={style.column}>
                <a
                  className={style.buttonEditItem}
                  href={`#${value.idCategory}`}
                >
                  <i className="bi bi-pencil-square"></i>
                </a>
              </label>
            </div>
          ))}
        </div>
        <div className={`${style.buttonPage}`}>
          <Nav.Link className={`btn`} onClick={() => handlePageChange(1)}>
            <i className="bi bi-chevron-bar-left"></i>
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="bi bi-caret-left"></i>
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i className="bi bi-caret-right"></i>
          </Nav.Link>
          <Nav.Link
            className={`btn`}
            onClick={() =>
              handlePageChange(Math.ceil(listCategory.length / numberPage))
            }
          >
            <i className="bi bi-chevron-bar-right"></i>
          </Nav.Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListCategory;
