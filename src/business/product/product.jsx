import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import style from "../css/business/product.module.css";
import AddProduct from './product/addProduct'

function ListProduct(status, cantSell) {
    //MODEL EDIT
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    function handleClickEditProduct(event) {
        const tdElement = event.currentTarget.parentElement;

        const idProduct = tdElement.querySelector("td:last-child").textContent;
        const productName = tdElement.querySelector("td:nth-child(3)").textContent;
        const idCategory = "category1";
        const idCategoryItem = "categoryItem1";
        const price = tdElement.querySelector("td:nth-child(5)").textContent;

        setModalData({ idProduct, productName, price, idCategory, idCategoryItem });

        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData({});
    };

    //FORM SEARCH
    const [selectedOption, setSelectedOption] = React.useState("");
    const [valueOption, setValueOption] = React.useState("");
    const handleChangeOption = (event) => {
        const selectedOptionValue = event.target.value;
        let text = "";
        setValueOption(selectedOptionValue);
        const options = event.target.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === selectedOptionValue) {
                text = options[i].innerText;
                break;
            }
        }
        setSelectedOption(text);
    };

    //LOẠI SẢN PHẨM
    const categories = [
        {
            idCategory: "category1",
            imageCategory: "tiktok.jpg",
            type: "Áo"
        },
        {
            idCategory: "category2",
            imageCategory: "facebook.jpg",
            type: "Quần"
        },
        {
            idCategory: "category3",
            imageCategory: "banner-left.jpg",
            type: "Giày"
        },
        {
            idCategory: "category4",
            imageCategory: "banner-right-1.jpg",
            type: "Điện Thoại"
        }
    ];

    const [valueCategory, setValueCategory] = React.useState("");
    const handleChangeCategory = (event) => {
        const selectedOptionValue = event.target.value;
        setValueCategory(selectedOptionValue);
    };
    //PHÂN LOẠI SẢN PHẨM
    const categoryItem = [
        {
            idCategoryItem: "categoryItem1",
            idCategory: "category1",
            type: "Áo Thun"
        },
        {
            idCategoryItem: "categoryItem2",
            idCategory: "category1",
            type: "Áo Sơ Mi"
        },
        {
            idCategoryItem: "categoryItem3",
            idCategory: "category1",
            type: "Áo Hoddie"
        },
        {
            idCategoryItem: "categoryItem4",
            idCategory: "category1",
            type: "Áo Khoác Dù"
        },
        {
            idCategoryItem: "categoryItem5",
            idCategory: "category2",
            type: "Quần Thun Co Dãn"
        }
    ];

    const [valueCategoryItem, setValueCategoryItem] = React.useState("");
    const handleChangeCategoryItem = (event) => {
        const selectedOptionValue = event.target.value;
        setValueCategoryItem(selectedOptionValue);
    };
    //INPUT NUMBER
    const [numberMinValue, setNumberMinValue] = useState(0);
    const [numberMaxValue, setNumberMaxValue] = useState(0);

    const handleNumberMinChange = (event) => {
        const newValue = event.target.value;
        setNumberMinValue(newValue);
    };
    const handleNumberMaxChange = (event) => {
        const newValue = event.target.value;
        setNumberMaxValue(newValue);
    };

    //DANH SÁCH SẢN PHẨM
    const listProduct = [
        {
            idProduct: "product",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: true
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: true
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: true
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: false
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: true
        },
        {
            idProduct: "product1",
            image: [
                "banner-left.jpg",
                "banner-right-1.jpg",
                "banner-right-2.jpg",
                "tiktok.jpg",
                "facebook.jpg",
                "instagram.jpg",
                "best-saler-1.jpg",
                "best-saler-2.jpg",
                "best-saler-3.jpg"
            ],
            productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
            typeCategory: "Áo",
            typeCategoryItem: "Áo Sơ Mi",
            price: 123000,
            isActive: true
        }
    ];
    const listActive = listProduct.filter((product) => product.isActive);
    const listUnActive = listProduct.filter((product) => !product.isActive);

    return (
        <React.Fragment>
            {status === null && cantSell === null ? (
                <React.Fragment>
                    <div className={`${style.action}`}>
                        <div className={`${style.formSearch}`}>
                            <select
                                value={valueOption}
                                onChange={handleChangeOption}
                                className={`${style.optionSelect}`}
                            >
                                <option value="idProduct">Mã Sản Phẩm</option>
                                <option value="productName">Tên Sản Phẩm</option>
                            </select>
                            <input
                                className={`${style.inputSearch}`}
                                type="text"
                                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                                    }...`}
                            ></input>
                        </div>
                        <div className={`${style.typeProduct}`}>
                            <select
                                value={valueCategory}
                                onChange={handleChangeCategory}
                                className={`${style.optionSelectType}`}
                            >
                                <option value="">Loại Sản Phẩm...</option>
                                {categories.map((value, index) => (
                                    <option key={index} value={value.idCategory}>
                                        {value.type}
                                    </option>
                                ))}
                            </select>
                            {valueCategory !== "" ? (
                                <select
                                    value={valueCategoryItem}
                                    onChange={handleChangeCategoryItem}
                                    className={`${style.optionSelectType}`}
                                >
                                    <option value="">Phân Loại Sản Phẩm...</option>
                                    {categoryItem.map((value, index) =>
                                        valueCategory === value.idCategory ? (
                                            <option key={index} value={value.idCategoryItem}>
                                                {value.type}
                                            </option>
                                        ) : null
                                    )}
                                </select>
                            ) : null}
                        </div>
                        <div className={`${style.storge}`}>
                            <label>Kho Hàng</label>
                            <input
                                type="number"
                                className={`${style.inputNumber} ms-3`}
                                value={numberMinValue}
                                onChange={handleNumberMinChange}
                            />
                            <span> - </span>
                            <input
                                type="number"
                                className={`${style.inputNumber}`}
                                value={numberMaxValue}
                                onChange={handleNumberMaxChange}
                            />
                        </div>
                        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
                    </div>
                    <div className={`${style.content}`}>
                        <table className={`table ${style.tableProduct}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Phân Loại</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th colSpan={2}>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listProduct.map((value, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>
                                            {value.image.map((data, index) => (
                                                <img key={index} src={`/images/${data}`}></img>
                                            ))}
                                        </td>
                                        <td>{value.productName}</td>
                                        <td>
                                            {value.typeCategory} - {value.typeCategoryItem}
                                        </td>
                                        <td>{formatCurrency(value.price, 0)}</td>
                                        <td>
                                            {value.isActive ? (
                                                <i
                                                    className="bx bx-check"
                                                    style={{
                                                        fontSize: "24px",
                                                        color: "white",
                                                        backgroundColor: "green",
                                                        borderRadius: "50%"
                                                    }}
                                                ></i>
                                            ) : (
                                                <i
                                                    className="bx bx-x"
                                                    style={{
                                                        fontSize: "24px",
                                                        color: "white",
                                                        backgroundColor: "red",
                                                        borderRadius: "50%"
                                                    }}
                                                ></i>
                                            )}
                                        </td>
                                        <td onClick={handleClickEditProduct}>
                                            <i className="bx bx-pencil" style={{ color: "blue" }}></i>
                                        </td>
                                        <td>
                                            <i
                                                className="bi bi-x-circle-fill"
                                                style={{ color: "red" }}
                                            ></i>
                                        </td>
                                        <td style={{ display: "none" }}>{value.idProduct}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            ) : null}
            {status === 1 && cantSell === true ? (
                <React.Fragment>
                    <div className={`${style.action}`}>
                        <div className={`${style.formSearch}`}>
                            <select
                                value={valueOption}
                                onChange={handleChangeOption}
                                className={`${style.optionSelect}`}
                            >
                                <option value="idProduct">Mã Sản Phẩm</option>
                                <option value="productName">Tên Sản Phẩm</option>
                            </select>
                            <input
                                className={`${style.inputSearch}`}
                                type="text"
                                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                                    }...`}
                            ></input>
                        </div>
                        <div className={`${style.typeProduct}`}>
                            <select
                                value={valueCategory}
                                onChange={handleChangeCategory}
                                className={`${style.optionSelectType}`}
                            >
                                <option value="">Loại Sản Phẩm...</option>
                                {categories.map((value, index) => (
                                    <option key={index} value={value.idCategory}>
                                        {value.type}
                                    </option>
                                ))}
                            </select>
                            {valueCategory !== "" ? (
                                <select
                                    value={valueCategoryItem}
                                    onChange={handleChangeCategoryItem}
                                    className={`${style.optionSelectType}`}
                                >
                                    <option value="">Phân Loại Sản Phẩm...</option>
                                    {categoryItem.map((value, index) =>
                                        valueCategory === value.idCategory ? (
                                            <option key={index} value={value.idCategoryItem}>
                                                {value.type}
                                            </option>
                                        ) : null
                                    )}
                                </select>
                            ) : null}
                        </div>
                        <div className={`${style.storge}`}>
                            <label>Kho Hàng</label>
                            <input
                                type="number"
                                className={`${style.inputNumber} ms-3`}
                                value={numberMinValue}
                                onChange={handleNumberMinChange}
                            />
                            <span> - </span>
                            <input
                                type="number"
                                className={`${style.inputNumber}`}
                                value={numberMaxValue}
                                onChange={handleNumberMaxChange}
                            />
                        </div>
                        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
                    </div>
                    <div className={`${style.content}`}>
                        <table className={`table ${style.tableProduct}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Phân Loại</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th colSpan={2}>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listActive.map((value, index) =>
                                    value.isActive ? (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>
                                                {value.image.map((data, index) => (
                                                    <img key={index} src={`/images/${data}`}></img>
                                                ))}
                                            </td>
                                            <td>{value.productName}</td>
                                            <td>
                                                {value.typeCategory} - {value.typeCategoryItem}
                                            </td>
                                            <td>{formatCurrency(value.price, 0)}</td>
                                            <td>
                                                {value.isActive ? (
                                                    <i
                                                        className="bx bx-check"
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "white",
                                                            backgroundColor: "green",
                                                            borderRadius: "50%"
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className="bx bx-x"
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "white",
                                                            backgroundColor: "red",
                                                            borderRadius: "50%"
                                                        }}
                                                    ></i>
                                                )}
                                            </td>
                                            <td onClick={handleClickEditProduct}>
                                                <i
                                                    className="bx bx-pencil"
                                                    style={{ color: "blue" }}
                                                ></i>
                                            </td>
                                            <td>
                                                <i
                                                    className="bi bi-x-circle-fill"
                                                    style={{ color: "red" }}
                                                ></i>
                                            </td>
                                            <td style={{ display: "none" }}>{value.idProduct}</td>
                                        </tr>
                                    ) : null
                                )}
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            ) : null}
            {status === 1 && cantSell === false ? (
                <React.Fragment>
                    <div className={`${style.action}`}>
                        <div className={`${style.formSearch}`}>
                            <select
                                value={valueOption}
                                onChange={handleChangeOption}
                                className={`${style.optionSelect}`}
                            >
                                <option value="idProduct">Mã Sản Phẩm</option>
                                <option value="productName">Tên Sản Phẩm</option>
                            </select>
                            <input
                                className={`${style.inputSearch}`}
                                type="text"
                                placeholder={`${selectedOption ? selectedOption : "Tìm kiếm"
                                    }...`}
                            ></input>
                        </div>
                        <div className={`${style.typeProduct}`}>
                            <select
                                value={valueCategory}
                                onChange={handleChangeCategory}
                                className={`${style.optionSelectType}`}
                            >
                                <option value="">Loại Sản Phẩm...</option>
                                {categories.map((value, index) => (
                                    <option key={index} value={value.idCategory}>
                                        {value.type}
                                    </option>
                                ))}
                            </select>
                            {valueCategory !== "" ? (
                                <select
                                    value={valueCategoryItem}
                                    onChange={handleChangeCategoryItem}
                                    className={`${style.optionSelectType}`}
                                >
                                    <option value="">Phân Loại Sản Phẩm...</option>
                                    {categoryItem.map((value, index) =>
                                        valueCategory === value.idCategory ? (
                                            <option key={index} value={value.idCategoryItem}>
                                                {value.type}
                                            </option>
                                        ) : null
                                    )}
                                </select>
                            ) : null}
                        </div>
                        <button className={`${style.buttonSearch}`}>Tìm Kiếm</button>
                    </div>
                    <div className={`${style.content}`}>
                        <table className={`table ${style.tableProduct}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Phân Loại</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th colSpan={2}>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUnActive.map((data, index) =>
                                    data.isActive ? (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>
                                                {data.image.map((data, index) => (
                                                    <img key={index} src={`/images/${data}`}></img>
                                                ))}
                                            </td>
                                            <td>{data.productName}</td>
                                            <td>
                                                {data.typeCategory} - {data.typeCategoryItem}
                                            </td>
                                            <td>{formatCurrency(data.price, 0)}</td>
                                            <td>
                                                {data.isActive ? (
                                                    <i
                                                        className="bx bx-check"
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "white",
                                                            backgroundColor: "green",
                                                            borderRadius: "50%"
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className="bx bx-x"
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "white",
                                                            backgroundColor: "red",
                                                            borderRadius: "50%"
                                                        }}
                                                    ></i>
                                                )}
                                            </td>
                                            <td>
                                                <i
                                                    className="bx bx-pencil"
                                                    style={{ color: "blue" }}
                                                ></i>
                                            </td>
                                            <td>
                                                <i
                                                    className="bi bi-x-circle-fill"
                                                    style={{ color: "red" }}
                                                ></i>
                                            </td>
                                        </tr>
                                    ) : null
                                )}
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            ) : null}
            {isModalOpen && <ModelEdit data={modalData} closeModal={closeModal} />}
        </React.Fragment>
    );
}