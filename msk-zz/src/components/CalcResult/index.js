import { Descriptions } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Item } = Descriptions;

export default function CalcResult({ data, dataKeys, onClose }) {
    const width = useSelector((state) => state.browser.width);

    function handleClose() {
        typeof onClose === "function" && onClose();
    }

    return (
        <Descriptions bordered colon={false} layout={width > 1024 ? "vertical" : "horizontal"}>
            {Object.keys(dataKeys).map((key) => (
                <Item key={key} label={dataKeys[key]}>
                    {data[key]}
                </Item>
            ))}
        </Descriptions>
    );
}
